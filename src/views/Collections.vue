<template>
    <div class="page collection-page">
        <div class="sidebar">
        </div>
        <main>
            <!-- <button @click="PokemonTCG.exportCSV">export Cards</button>
            <button @click="PokeAPI.exportCSV">export Pokemon</button> -->
            <div class="action_buttons">
                <button>
                    <Icon.Plus style="width: 24px;"></Icon.Plus>
                </button>
            </div>
            <div class="collections">
                <div v-for="[name, collection] of collections" :key="'collection_' + name" class="collection">
                    <div class="image" @click="showCollection(collection)">
                        <Icon.Heart></Icon.Heart>
                    </div>
                    <div class="info">
                        <div class="name">{{ name }}</div>
                        <div class="size"> {{ collection.size - 1 }} Cards </div>
                        <button @click="showCollection(collection)">view list</button>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import * as Base from '@/components/basic';
import * as Icon from '@/components/icons';
import * as Utils from '@/components/utils';
// import * as PokemonTCG from '@/modules/pokemonTCGApi';
// import * as PokeAPI from '@/modules/pokeAPI';
import router from '@/router'

import { usePokemonStore } from '@/stores'
const pokemonStore = usePokemonStore();
const { collections } = pokemonStore;

onMounted(() => {
    if (collections.values.length === 0) pokemonStore.loadCollections();
})

function showCollection(collection) {
    const collectionId = collection.get('docid');
    router.push({ name: 'Collection', params: { collectionId } })
}
</script>

<style scoped>
main {
    width: 80%;
    max-width: 1200px;
    margin: 0 auto;
}

.action_buttons {
    display: flex;
    justify-content: flex-end;
    margin: 0 0 25px 0;
    padding: 15px 25px;
    border-bottom: 1px solid;
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