<template>
  <div class="page cards-page">
    <main>
      <div class="search">
        <input v-model="search" type="text" style="width: 100%;" placeholder="search">
        <div class="text-right small-text clickable" @click="toggleAdvancedSearch">advanced search</div>
        <div v-if="isAdvancedSearchExpanded"
          style="padding: 5px 10px; margin-top: 5px; border-top: 1px solid rgba(100,100,100,0.5)">
          <div class="text-small">separate multiple values with a comma</div>
          <div>
            <input v-model="nameSearch" type="text" style="width: 250px; margin-right: 10px" placeholder="Name">
            <input v-model="pokedexSearch" type="text" style="width: 250px;" placeholder="PokedexNr">
          </div>
          <div>
            <div>
              <Base.Checkbox v-model="showOwned" label="show only owned cards"></Base.Checkbox> <br>
              <Base.Checkbox v-model="showFaved" label="show only faved cards"></Base.Checkbox>
            </div>
          </div>
        </div>
      </div>
      <div class="content">
        <Page.Sidebar :series="series" :artists="artists" v-model:selected-serie="selectedSeries"
          @update:selected-serie="loadSerie" v-model:selected-set="selectedSet" v-model:selected-artist="selectedArtist"
          @update:selected-artist="loadArtist"></Page.Sidebar>
        <div v-if="loadingPokemon" class="loader_container">
          <Base.Loader></Base.Loader>
        </div>
        <div v-else class="cards">
          <Utils.TCGCard v-for="card of cardsToDisplay" :key="card.Id" :card="card"
            :owned="collections.get('owned').has(card.id)" :faved="collections.get('faved').has(card.id)"
            @click:owned="toggleOwned" @click:add="showAddDialog" @click:faved="toggleFaved"></Utils.TCGCard>
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

import { debounce } from '@/modules/utils';
import { usePokemonStore, storeToRefs } from '@/stores';

const pokemonTCGStore = usePokemonStore()
const debouncedSaveOwned = debounce(pokemonTCGStore.saveCollection, 5000);
const debouncedSaveFaved = debounce(pokemonTCGStore.saveCollection, 5000);

const { sets, artists, cards, collections, loadingPokemon } = storeToRefs(pokemonTCGStore);
const selectedSeries = ref(null);
const selectedSet = ref(null);
const selectedArtist = ref(null);

onMounted(() => {
  if (sets.value.length === 0) pokemonTCGStore.loadSets();
  if (artists.value.length === 0) pokemonTCGStore.loadArtists();
  if (collections.value.size === 0) pokemonTCGStore.loadCollections();
})

const search = ref("");
const nameSearch = ref("");
const pokedexSearch = ref("");
const showOwned = ref(false);
const showFaved = ref(false);

const series = computed(() => {
  return sets.value.reduce((acc, set) => {
    acc[set.series] = acc[set.series] || [];
    acc[set.series].push(set);

    return acc;
  }, {})
})

const cardsToDisplay = computed(() => {
  if (!selectedSeries.value && !selectedArtist.value) return [];
  let filtered = cards.value;

  if (selectedSeries.value) filtered = filtered.filter(card => card.series == selectedSeries.value);
  if (selectedSet.value) filtered = filtered.filter(card => card.setname == selectedSet.value);
  if (selectedArtist.value) filtered = filtered.filter(card => card.artist == selectedArtist.value);
  if (showOwned.value) filtered = filtered.filter(card => ownedCards.value.has(card.id));
  if (showFaved.value) filtered = filtered.filter(card => favedCards.value.has(card.id));
  if (search.value) filtered = filtered.filter(card => JSON.stringify(card).toLowerCase().includes(search.value.toLowerCase()));

  if (nameSearch.value) {
    const values = nameSearch.value.toLowerCase().split(',');
    let newFiltered = [];
    for (const value of values) {
      if (!value) continue;
      const result = filtered.filter(card => card.name.toLowerCase().includes(value));
      newFiltered.push(...result);
    }
    filtered = newFiltered;
  }
  if (pokedexSearch.value) {
    const values = pokedexSearch.value.toLowerCase().split(',');
    filtered = filtered.filter(card => values.includes(card.pokedexnr?.toString()?.toLowerCase()));
  }

  filtered.sort((a, b) => a.number - b.number);
  console.log(filtered.length)


  return filtered;
})

/**
 * 
 * @param {String} serie 
 */
function loadSerie(serie) {
  if (!serie) return;
  pokemonTCGStore.loadCardsForSeries(serie);
}

/**
 * 
 * @param {String} artist
 */
function loadArtist(artist) {
  if (!artist) return;
  pokemonTCGStore.loadCardsForArtist(artist);
}

function toggleOwned(card) {
  const owned = collections.value.get('owned');
  if (owned.has(card.id)) owned.delete(card.id);
  else owned.set(card.id, card.name);

  debouncedSaveOwned(Object.fromEntries(owned));
}

function toggleFaved(card) {
  const faved = collections.value.get('faved');
  console.log(faved);
  if (faved.has(card.id)) faved.delete(card.id);
  else faved.set(card.id, card.name);

  debouncedSaveFaved(Object.fromEntries(faved));
}

function showAddDialog(card) {
  console.log('show Add Dialog', card);
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