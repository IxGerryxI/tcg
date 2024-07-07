import { ref, } from 'vue'
import { defineStore } from 'pinia'
import { getCollection } from '@/modules/firestore';
import { queryCards } from '@/modules/firefunctions';

const SERIES_COLLECTION_NAME = 'Pokemoncards';
export const usePokemonTCGStore = defineStore('pokemonTCG', () => {
    const series = ref(null);
    const cards = ref({});

    async function loadSeries() {
        const order = ['releaseDate', 'desc'];
        series.value = await getCollection(SERIES_COLLECTION_NAME, { order });

        return series;
    }

    async function loadCardsForSeries(seriesname) {
        if (!cards.value[seriesname]) {
            const collectionName = SERIES_COLLECTION_NAME + '/' + seriesname + '/cards';
            cards.value[seriesname] = await getCollection(collectionName);
        }

        return cards.value[seriesname];
    }

    return {
        series, cards,
        loadSeries, loadCardsForSeries,
    }
})


