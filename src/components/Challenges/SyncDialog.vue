<template>
    <Base.Dialog>
        <template #activator>
            <Icon.Sync style="width: 32px"></Icon.Sync>
        </template>
        <template #title>Sync</template>
        <div class="content">
            <div class="series">
                <div class="serie" v-for="(serie, index) of series" :key="'syncSerie_' + index"
                    :class="[{ syncing: syncing[serie.name] }]">
                    <Base.Details>
                        <template #title>
                            <h2>
                                {{ serie.name }}
                                <button @click="syncSerie(serie)" :disabled="syncing[serie.name]">
                                    <Icon.Sync></Icon.Sync>
                                </button>
                            </h2>
                        </template>
                        <div class="sets">
                            <div v-for="(set, index) of serie.sets" :key="'syncSet_' + index"
                                :class="['set', { syncing: syncing[set.name] }]">
                                <span>{{ set.name }} {{ set.id }}</span>
                                <div>
                                    <Base.Date :value="new Date(dbSets[serie.name]?.[set.id]?.lastUpdated?.seconds * 1000)"
                                        datetime>
                                    </Base.Date>
                                    <button @click="syncSet(set)" :disabled="syncing[set.name] || syncing[serie.name]">
                                        <Icon.Sync></Icon.Sync>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </Base.Details>
                </div>
            </div>
        </div>
    </Base.Dialog>
</template>

<script setup>
import * as Base from '@/components/basic';
import * as Icon from '@/components/icons';

import { ref, computed, onMounted } from 'vue';

import { remove } from '@/modules/cache'
import { getSets, getCardsForSerie, getCardsForSet } from '@/modules/pokemonTCGApi';
import { setDocument } from '@/modules/firestore';

import { usePokemonTCGStore } from '@/stores';
import { storeToRefs } from 'pinia';


const pokemonTCGStore = usePokemonTCGStore();
const { series: dbSeries } = storeToRefs(pokemonTCGStore);

const dbSets = computed(() => {
    console.log(dbSeries.value);
    const sets = Object.values(dbSeries.value).reduce((acc, serie) => {
        acc[serie.name] = serie.sets.reduce((acc, set) => ({ ...acc, [set.id]: set }), {});
        return acc
    }, {})

    console.log(sets)
    return sets;
})

const series = ref(null);
const syncing = ref({});
onMounted(async () => {
    const sets = await getSets();
    series.value = mapSets(sets);
})

function mapSets(sets) {
    const map = {};
    for (const set of sets) {
        map[set.series] = map[set.series] || { name: set.series, sets: [] };
        map[set.series].sets.push(set);
    }

    return Object.values(map).reverse();
}

async function syncSerie(serie) {
    syncing.value[serie.name] = true;
    remove('Pokemoncards');
    console.log('syncSeries ', serie);
    // update the serie
    serie.sets.forEach(set => set.lastUpdated = new Date());
    setDocument('Pokemoncards', serie.name, serie);
    // update the cards
    const cards = await getCardsForSerie(serie.name);
    // console.log(cards);
    for (let card of cards) {
        card = preapreCard(card);

        // console.log('update card ', card.id, card);
        setDocument(`Pokemoncards/${serie.name}/cards`, card.id, card);
    }
    syncing.value[serie.name] = false;
}

async function syncSet(set) {
    syncing.value[set.name] = true;
    remove('Pokemoncards');
    console.log('syncSet ', set);
    const cards = await getCardsForSet(set.id);
    for (let card of cards) {
        card = preapreCard(card);

        // console.log('update card ', card.id, card);
        setDocument(`Pokemoncards/${set.series}/cards`, card.id, card);
    }

    //update serie
    set.lastUpdated = new Date();
    const serie = series.value.find(serie => serie.name == set.series);
    setDocument('Pokemoncards', serie.name, serie);

    syncing.value[set.name] = false;
}

function preapreCard(card) {
    const set = card.set;
    card.set = {
        id: set.id,
        name: set.name,
        series: set.series,
    };
    card.pokedexNr = card.nationalPokedexNumbers?.[0] || "";
    delete card.nationalPokedexNumbers;

    return card;
}

</script>

<style scoped>
.content {
    width: 800px;
}

.serie {
    margin-bottom: 25px;
}

.details {
    border: none;
}

.title {
    width: 100%;
}

h2 {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(100, 100, 100, 0.5);
    text-align: left;
}

.sets {
    padding: 15px;
}

.set {
    display: flex;
    justify-content: space-between;
    align-items: center;
}


.syncing button svg {
    animation: spin 1s linear 0s infinite;
}

@keyframes spin {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}
</style>