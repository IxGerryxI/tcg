<template>
    <div class="page collection-page">
        <header>
            <a class="button" href="/">
                <Icon.Home style="width: 32px"></Icon.Home>
            </a>
            <h1>Collections</h1>
        </header>
        <div class="sidebar">

        </div>
        <main>
            <button @click="PokemonTCG.exportCSV">export Cards</button>
            <button @click="PokeAPI.exportCSV">export Pokemon</button>
            <button @click="getPokemon">test BigQuery</button>
        </main>
    </div>
</template>

<script setup>
import * as Base from '@/components/basic';
import * as Icon from '@/components/icons';
import * as Utils from '@/components/utils';
import * as PokemonTCG from '@/modules/pokemonTCGApi';
import * as PokeAPI from '@/modules/pokeAPI';
import * as FireFunctions from '@/modules/fireFunctions';

async function getPokemon() {
    const result = await FireFunctions.call('getPokemon');
    console.log(result);
}
</script>

<style scoped></style>