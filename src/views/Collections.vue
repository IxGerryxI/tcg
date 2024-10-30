<template>
    <div class="page collection-page">
        <div class="sidebar">
        </div>
        <main>
            <!-- <button @click="PokemonTCG.exportCSV">export Cards</button>
            <button @click="PokeAPI.exportCSV">export Pokemon</button> -->
            <!-- <button @click="updateEvoChain">update Evolution Chains</button> -->
            <!-- <div>{{ STATEMENTS }}</div> -->
            <div class="action_buttons">
                <Page.CreateDialog></Page.CreateDialog>
            </div>
            <div v-if="loadingCollections" class="loader_container">
                <Base.Loader></Base.Loader>
            </div>
            <div v-else class="collections">
                <div v-for="[name, collection] of collections" :key="'collection_' + name" class="collection">
                    <div class="image" @click="showCollection(collection)">
                        <Icon.Heart></Icon.Heart>
                    </div>
                    <div class="info">
                        <div class="name">{{ name }}</div>
                        <div class="size"> {{ collection.size - 2 }} Cards </div>
                        <button @click="showCollection(collection)">view list</button>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import * as Base from '@/components/basic';
import * as Icon from '@/components/icons';
import * as Utils from '@/components/utils';
import * as Page from '@/components/Collections';
// import * as PokeAPI from '@/modules/pokeAPI';
import router from '@/router'

import { storeToRefs, usePokemonStore } from '@/stores'
const pokemonStore = usePokemonStore();
const { collections, loadingCollections } = storeToRefs(pokemonStore);

onMounted(() => {
    console.log(collections.value)
    if (collections.value.size === 0) pokemonStore.loadCollections();
})


function showCollection(collection) {
    const collectionId = collection.get('docid');
    router.push({ name: 'Collection', params: { collectionId } })
}

// const STATEMENTS = ref("");
// async function updateEvoChain() {
//     const statements = await PokeAPI.createEvolutionUpdateStatement();
//     console.log(statements)
//     STATEMENTS.value = statements.join("\n")
// }
</script>

<style scoped>
main {
    width: 80%;
    max-width: 1200px;
    margin: 0 auto;
}

.loader_container {
    display: flex;
    justify-content: center;
    flex-grow: 1;
}

.action_buttons {
    display: flex;
    justify-content: flex-end;
    margin: 0 0 25px 0;
    padding: 15px 25px;
    border-bottom: 1px solid;
}

.loader_container {
    display: flex;
    justify-content: center;
    flex-grow: 1;
}

.collections {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
}

.collection {
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid var(--highlight);
    border-radius: 12px;
    gap: 5px;
    color: var(--highlight);


    & .image {
        height: 200px;
        width: 100%;
        padding: 20px 30px;
        fill: white;
        text-align: center;
        cursor: pointer;

        & * {
            max-width: 100%;
            max-height: 100%;
        }
    }

    & .info {
        width: 100%;
        padding: 15px 35px;
        text-align: center;
    }

    & .name {
        font-size: 1.3rem;
        font-weight: 700;
        padding: 5px 25px;
        margin-bottom: 10px;
        border-bottom: 1px solid white;
    }

    & .size {
        font-size: 0.9rem;
    }

    & button {
        width: 100%;
        margin-top: 10px;
    }
}
</style>