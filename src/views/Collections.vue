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
            <button @click="exportCSV">export</button>
            <button @click="getCards">get cards</button>
        </main>
    </div>
</template>

<script setup>
import * as Base from '@/components/basic';
import * as Icon from '@/components/icons';
import * as Utils from '@/components/utils';
import { exportCSV } from '@/modules/pokemonTCGApi';
import { queryCards, getDistinctColumns } from '@/modules/firefunctions';

function getCards() {
    const limit = 1000;
    const setname = ['Plasma Storm', 'Majestic Dawn'];
    // queryCards({ limit, setname })
    // queryCards();
    getDistinctColumns()
}
</script>

<style scoped></style>