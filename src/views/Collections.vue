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
        </main>
    </div>
</template>

<script setup>
import * as Base from '@/components/basic';
import * as Icon from '@/components/icons';
import * as Utils from '@/components/utils';
import { exportCSV } from '@/modules/pokemonTCGApi';

</script>

<style scoped></style>