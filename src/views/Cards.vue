<template>
  <div class="page cards-page">
    <main>
      <div class="search">
        <input v-model="search" type="text" style="width: 100%;" placeholder="search">
        <div class="text-right small-text clickable" @click="toggleAdvancedSearch">advanced search</div>
        <div v-if="isAdvancedSearchExpanded"
        style="padding: 5px 10px; margin-top: 5px; border-top: 1px solid rgba(100,100,100,0.5)">
          <div class="text-small">separate multiple values with a comma</div>
          <input v-model="nameSearch" type="text" style="width: 250px; margin-right: 10px" placeholder="Name">
          <input v-model="pokedexSearch" type="text" style="width: 250px;" placeholder="PokedexNr">
        </div>
      </div>
      <div class="content">
        <Page.Sidebar 
        :series="series"
        :artists="artists"
        v-model:selected-serie="selectedSeries"
        @update:selected-serie="loadSerie"
        v-model:selected-set="selectedSet"
        v-model:selected-artist="selectedArtist"
        @update:selected-artist="loadArtist"></Page.Sidebar>
        <div v-if="loadingPokemon" class="loader_container">
          <Base.Loader></Base.Loader>
        </div>
        <div v-else class="cards">
          <Utils.TCGCard v-for="card of cardsToDisplay" :key="card.Id" :card="card"></Utils.TCGCard>
        </div>
      </div>

    </main>
  </div>
</template>

<script setup>
import * as Base from '@/components/basic';
import * as Page from '@/components/Cards';
import * as Utils from '@/components/utils'

import { ref, onMounted, computed } from 'vue';

import { usePokemonStore, storeToRefs } from '@/stores';

const pokemonTCGStore = usePokemonStore()
const { sets, artists, cards, loadingPokemon } = storeToRefs(pokemonTCGStore);
const selectedSeries = ref(null);
const selectedSet = ref(null);
const selectedArtist = ref(null);

onMounted(() => {
  if(sets.value.length === 0) pokemonTCGStore.loadSets();
  if(artists.value.length === 0) pokemonTCGStore.loadArtists();
})

const search = ref("");
const nameSearch = ref("");
const pokedexSearch = ref("");

const series = computed(() => {
  return sets.value.reduce((acc, set) => {
    acc[set.series] = acc[set.series] || [];
    acc[set.series].push(set);

    return acc;
  }, {})
})

const cardsToDisplay = computed(() => {
  if(!selectedSeries.value && !selectedArtist.value) return [];
  let filtered = cards.value;
  
  if(selectedSeries.value) filtered = filtered.filter(card => card.series == selectedSeries.value);
  if(selectedSet.value) filtered = filtered.filter(card => card.setname == selectedSet.value);
  if(selectedArtist.value) filtered = filtered.filter(card => card.artist == selectedArtist.value);
  if(search.value) filtered = filtered.filter(card => JSON.stringify(card).toLowerCase().includes(search.value.toLowerCase()));
  
  if(nameSearch.value) {
    const values = nameSearch.value.toLowerCase().split(',');
    let newFiltered = [];
    for(const value of values) {
      if(!value) continue;
      const result = filtered.filter(card => card.name.toLowerCase().includes(value));
      newFiltered.push(...result);
    }
    filtered = newFiltered;
  }
  if(pokedexSearch.value) {
    const values = pokedexSearch.value.toLowerCase().split(',');
    filtered = filtered.filter(card => values.includes(card.pokedexnr?.toString()?.toLowerCase()));
  }

  filtered.sort((a,b) => a.number - b.number);
  console.log(filtered.length)


  return filtered;
})

/**
 * 
 * @param {String} serie 
 */
function loadSerie(serie) {
  if(!serie) return;
  pokemonTCGStore.loadCardsForSeries(serie);
}

/**
 * 
 * @param {String} artist
 */
function loadArtist(artist) {
  if(!artist) return;
  pokemonTCGStore.loadCardsForArtist(artist);
}

const isAdvancedSearchExpanded = ref(false);
function toggleAdvancedSearch() {
  isAdvancedSearchExpanded.value = !isAdvancedSearchExpanded.value;
}
</script>

<style scoped>
main {
  margin: 0 10%;
}

.search {
  margin-bottom: 35px;
}

.content {
  display: flex;
  align-items: flex-start;
}

.loader_container {
  display: flex;
  justify-content: center;
  flex-grow: 1;
}

.cards {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5px;
  margin-left: 15px;
}
</style>
