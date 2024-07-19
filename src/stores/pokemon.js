import { ref,computed } from 'vue'
import { defineStore } from 'pinia'
// import { getCollection } from '@/modules/firestore';
import * as FireFunctions from '@/modules/fireFunctions';

export const usePokemonStore = defineStore('pokemonTCG', () => {
    const sets = ref([]);
    const artists = ref([]);
    const allCards = ref({});//internal variable to keep loaded cards unique
    const cards = computed(() => Object.values(allCards.value));
    const loaded = ref({});//this is a helper object to keep track of what series and artists have already been loaded
    const loadingPokemon = computed(() => Object.values(loaded.value).includes('loading'));
    const pokemons = ref([]);

    async function loadSets() {
        const result = await FireFunctions.call('getSets');
        sets.value = result.data.result;

        return sets;
    }

    async function loadArtists() {
        const result = await FireFunctions.call('getArtists');
        artists.value = result.data.result;

        return artists;
    }

    async function loadCardsForSeries(series) {
        if (loaded.value[series]) return;
        
        loaded.value[series] = 'loading';
        const orderBy = "number asc";
        const result = await FireFunctions.call('queryCards',{series,orderBy});
        console.log(result.data.result);
        addCards(result.data.result);
        loaded.value[series] = true;
    }

    async function loadCardsForArtist(artist) {
        if (loaded.value[artist]) return;

        loaded.value[artist] = 'loading';
        const orderBy = "number asc";
        const result = await FireFunctions.call('queryCards',{artist,orderBy});
        console.log(result.data.result);
        addCards(result.data.result);
        loaded.value[artist] = true;
    }

    async function insertCards(cards) {
        const result = await FireFunctions.call('insertCards', {cards});
        return result;
    }

    function addCards(cards) {
        for(const card of cards) {
            allCards.value[card.id] = card;
        }
    } 

    async function loadPokemon() {
        if(loaded.Pokemon) return;
        loaded.Pokemon = 'loading';
        const result = await FireFunctions.call('getPokemon');
        pokemons.value = result.data.result;
        console.log(pokemons.value)
        loaded.Pokemon = true;
    }

    return {
        sets, artists, cards,pokemons,
        loadingPokemon,
        loadSets, loadArtists, loadCardsForSeries,loadCardsForArtist, loadPokemon,
        insertCards
    }
})


