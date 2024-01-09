<template>
  <div class="page">
    <header>
      <a class="button" href="/">
        <Icon.Home style="width: 32px"></Icon.Home>
      </a>
      <Page.SyncDialog></Page.SyncDialog>
      <h1>Challenges</h1>
    </header>
    <Page.Sidebar v-model:selectedSerie="selectedSerie" v-model:selectedSet="selectedSet" :series="series"
      class="sidebar" />

    <main v-if="selectedSerie">
      <h2>{{ selectedSerie.name }}</h2>
      <div class="challenges">
        <button v-for="(challenge, index) of challenges" :keys="'challenge_' + index"
          :class="['challenge', { 'selected': selectedChallenge.name == challenge.name }]"
          @click="selectChallenge(challenge)">
          {{ challenge.name }}
        </button>
        <br>
        <input type="text" placeholder="search" v-model="search">
      </div>
      <div v-if="!filteredCards" class="text-center">
        <Base.Loader></Base.Loader>
      </div>
      <div v-else-if="Object.keys(filteredCards).length === 0" class="text-center">
        no cards found
      </div>
      <div v-else>
        <div v-if="selectedSet">
          <h3>{{ selectedSet.name }}</h3>
        </div>
        <!-- <div v-if="'GenI' == selectedSet" class="genI_counter">
          <div v-for="(count, index) of cardCountPerSet" :key="'cardCountPerSet_' + index">
            <div class="counter">
              <div class="label" :title="index + ' - ' + count">{{ index }} - {{ count }}</div>
              <div class="bar" :style="'width: ' + count + 'px'"></div>
            </div>
          </div>
        </div> -->
        <h3>cards ({{ filteredCards.length }})</h3>
        <div class="cards">
          <Utils.TCGCard v-for="(card, index) of filteredCards" :key="'card_' + index" :card="card"
            :series="selectedSerie"></Utils.TCGCard>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import * as Base from '@/components/basic';
import * as Icon from '@/components/icons';
import * as Page from '@/components/Challenges';
import * as Utils from '@/components/utils'

import { ref, onMounted, computed } from 'vue'

import { usePokemonTCGStore } from '@/stores';
import { storeToRefs } from 'pinia';

const pokemonTCGStore = usePokemonTCGStore()
const { loadSeries } = pokemonTCGStore;
const { series, cards } = storeToRefs(pokemonTCGStore)

// const series = ref(null);
const selectedSerie = ref(null);
const selectedSet = ref(null);
const search = ref("");
const challenges = [
  { name: 'all' },
  { name: '151', filter: (card) => card.pokedexNr && card.pokedexNr < 151, sort: pokedexSort },
  { name: 'Eeveelutions', filter: card => [133, 134, 135, 136, 196, 197, 470, 471, 700].includes(card.pokedexNr), sort: pokedexSort },
  { name: 'Starters', filter: card => [1, 4, 7, 152, 155, 158, 252, 255, 258, 387, 390, 393, 495, 498, 501, 650, 653, 656, 722, 725, 728, 810, 813, 816, 906, 909, 912].includes(card.pokedexNr), sort: pokedexSort },
  { name: 'Pikachus', filter: card => [25].includes(card.pokedexNr) },
  { name: 'Vivillon', filter: card => card.pokedexNr == 666 },
  { name: '3 Birds', filter: card => [144, 145, 146].includes(card.pokedexNr), sort: pokedexSort },
  { name: 'Lapras', filter: card => card.pokedexNr == 131 },
  { name: 'the 4', filter: card => [123, 125, 126, 127].includes(card.pokedexNr), sort: pokedexSort }
]
const selectedChallenge = ref(challenges[0]);

function selectChallenge(challenge) {
  selectedChallenge.value = challenge;
}

function pokedexSort(a, b) {
  return a.pokedexNr - b.pokedexNr
}

onMounted(async () => {
  loadSeries()
})

const filteredCards = computed(() => {
  let allCards = cards.value[selectedSerie.value.name];
  if (!allCards) return null;

  if (selectedSet.value) {
    allCards = allCards.filter(card => card.set.id == selectedSet.value.id).sort((a, b) => a.number - b.number);;
  }

  if (selectedChallenge.value.filter) allCards = allCards.filter(selectedChallenge.value.filter);
  if (selectedChallenge.value.sort) allCards.sort(selectedChallenge.value.sort);

  if (search.value) {
    const val = search.value.toString().toLowerCase();
    allCards = allCards.filter(card => card.name.toLowerCase().includes(val) || card.pokedexNr == val);
  }

  return allCards;


})

const cardCountPerSet = computed(() => {
  const counter = {};
  for (const key in cards.value) {
    const card = cards.value[key][0];
    counter[card.set.name] = counter[card.set.name] || new Set();
    counter[card.set.name].add(card.nationalPokedexNumbers[0]);
  }

  const count = Object.entries(counter).reduce((acc, [name, set]) => {
    if (!name) return acc;
    acc[name] = set.size;
    return acc;
  }, {});

  return count
})
</script>

<style scoped>
.page {
  margin: 0;
  background-color: #121212;
  color: #eee;
  font-family: Arial, sans-serif;

  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-areas:
    "header header"
    "aside main"
    "footer footer";
}

header {
  display: flex;
  align-items: center;
  grid-area: header;
  background-color: #191919;
  margin-bottom: 15px;
}

.sidebar {
  grid-area: aside;
}

main {
  padding: 10px;
  grid-area: main;
}

.challenges {
  border-top: 1px solid rgba(100, 100, 100, 0.3);
  border-bottom: 1px solid rgba(100, 100, 100, 0.3);
  margin: 8px 2px;

  & .challenge {
    margin: 8px 4px;

    &.selected {
      background-color: #245b47;
    }
  }
}


.sets {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.cards {
  display: flex;
  flex-wrap: wrap;
}

.genI_counter {
  .counter {
    display: flex;
    align-items: center;
    width: 251px;

    .label {
      width: 200px;
      background-color: #245b47;
      padding: 4px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      border-top: 1px solid #fff;
      border-bottom: 1px solid #fff;
    }

    .bar {
      background-color: #245b47;
      /* background-color: red; */
      width: 15px;
      height: 26px;
    }
  }
}
</style>
