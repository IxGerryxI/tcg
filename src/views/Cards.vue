<template>
  <div class="page cards-page">
    <header>
      <a class="button" href="/">
        <Icon.Home style="width: 32px"></Icon.Home>
      </a>
      <!-- <Page.SyncDialog></Page.SyncDialog> -->
      <h1>Cards</h1>
    </header>

    <main>
      <div class="search">
        <input v-model="search" type="text" style="width: 100%;" placeholder="search">
        <div class="text-right small-text clickable" @click="toggleAdvancedSearch">advanced search</div>
        <div v-if="isAdvancedSearchExpanded"
          style="padding: 5px 10px; margin-top: 5px; border-top: 1px solid rgba(100,100,100,0.5)">
          <input v-model="nameSearch" type="text" style="width: 250px; margin-right: 10px" placeholder="Name">
          <input v-model="pokedexSearch" type="text" style="width: 110px;" placeholder="PokedexNr">
        </div>
      </div>

    </main>
  </div>
</template>

<script setup>
import * as Base from '@/components/basic';
import * as Icon from '@/components/icons';
import * as Page from '@/components/Cards';
import * as Utils from '@/components/utils'

import { ref, onMounted, computed } from 'vue'

import { usePokemonTCGStore } from '@/stores';
import { storeToRefs } from 'pinia';

const pokemonTCGStore = usePokemonTCGStore()
const { loadSeries } = pokemonTCGStore;
const { series, cards } = storeToRefs(pokemonTCGStore)

const search = ref("");
const nameSearch = ref("");
const pokedexSearch = ref("");

const isAdvancedSearchExpanded = ref(false);
function toggleAdvancedSearch() {
  isAdvancedSearchExpanded.value = !isAdvancedSearchExpanded.value;
}
</script>

<style scoped>
main {
  margin: 0 10%;
}
</style>
