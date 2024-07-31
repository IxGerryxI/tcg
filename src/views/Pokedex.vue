<template>
    <div class="page cards-page">
        <main>
            <div></div>
            <div v-if="loadingPokemon" class="loader_container">
            <Base.Loader></Base.Loader>
            </div>
            <div v-else class="pokemon_container">
                <div v-for="pokemon of pokemons" :key="pokemon.pokedexnr">
                    <Utils.Pokemon :pokemon="pokemon"></Utils.Pokemon>
                </div>
            </div>
        </main>
    </div>
</template>
  
<script setup>
import * as Base from '@/components/basic';
import * as Utils from '@/components/utils'

import { usePokemonStore, storeToRefs } from '@/stores';
import { onMounted } from 'vue';
const pokemonTCGStore = usePokemonStore()
const { pokemons, loadingPokemon } = storeToRefs(pokemonTCGStore);

onMounted(() => {
    pokemonTCGStore.loadPokemon();
})

</script>
  
<style scoped>
main {
    max-width: 1200px;
    margin: 0 auto;
}

.loader_container {
  display: flex;
  justify-content: center;
  flex-grow: 1;
}

.pokemon_container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
}
</style>