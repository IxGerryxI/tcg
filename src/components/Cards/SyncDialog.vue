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
                                <div>
                                    <!-- <Icon.Check v-if="syncedSeries.includes(serie.name)" class="icon"></Icon.Check> -->
                                    <!-- <button @click="syncSerie(serie)" :disabled="syncing[serie.name]">
                                        <Icon.Sync></Icon.Sync>
                                    </button> -->
                                </div>
                            </h2>
                        </template>
                        <div class="sets">
                            <div v-for="(set, index) of serie.sets" :key="'syncSet_' + index"
                                :class="['set', { syncing: syncing[set.name] }]">
                                <span>{{ set.name }} {{ set.id }}</span>
                                <div>
                                    <Icon.Check v-if="syncedSets.includes(set.name)" class="icon"></Icon.Check>
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

import { getSets, getCardsForSerie, getCardsForSet } from '@/modules/pokemonTCGApi';
import { usePokemonStore } from '@/stores';
import { storeToRefs } from 'pinia';
const pokemonTCGStore = usePokemonStore()
const { sets } = storeToRefs(pokemonTCGStore);
const syncedSets = computed(() => {
    const values = sets.value.map(set => set.setname);
    return values
})
const syncedSeries = computed(() => {
    const values = sets.value.map(set => set.series);
    return [...new Set(values)]
});


const series = ref(null);
const syncing = ref({});
onMounted(async () => {
    const allSets = await getSets();
    series.value = mapSets(allSets);
    if(sets.value.length === 0) pokemonTCGStore.loadSets();
    console.log(sets.value)
})

function mapSets(sets) {
    const map = {};
    for (const set of sets) {
        map[set.series] = map[set.series] || { name: set.series, sets: [] };
        map[set.series].sets.push(set);
    }

    return Object.values(map).reverse();
}

// async function syncSerie(serie) {
//     syncing.value[serie.name] = true;
//     console.log('syncSeries ', serie);
//     // update the cards
//     const cards = await getCardsForSerie(serie.name);
//     // console.log(cards);
//     for (let card of cards) {
//         card = preapreCard(card);
//         //save to DB
//     }
//     syncing.value[serie.name] = false;
// }

async function syncSet(set) {
    syncing.value[set.name] = true;
    console.log('syncSet ', set);
    const cards = await getCardsForSet(set.id);
    const preparedCards = cards.map(preapreCard);
    console.log(preparedCards)
    await pokemonTCGStore.insertCards(preparedCards);

    syncing.value[set.name] = false;
}

function preapreCard(card) {
    card = {
        'id': card.id,
        'image_small': card.images.small,
        'image_large': card.images.large,
        'name': card.name,
        'pokedexnr': +card.nationalPokedexNumbers?.[0] || null,
        'number': card.number.toString().padStart(3, '0'),
        'artist': card.artist,
        'rarity': card.rarity,
        'setId': card.set.id,
        'setname': card.set.name,
        'setsymbol': card.set.images.symbol,
        'setlogo': card.set.images.logo,
        'series': card.set.series,
        'printed_cards': +card.set.printedTotal,
        'total_cards': +card.set.total,
        'releasedate': card.set.releaseDate,
    }

    for(const key of Object.keys(card)) {
        const value = card[key];
        if(value == false) console.log(card);
    }

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

.icon {
    fill: #eee;
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