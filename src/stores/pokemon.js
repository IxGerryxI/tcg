import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getCollection, setDocument } from '@/modules/firestore';
import * as FireFunctions from '@/modules/fireFunctions';

export const usePokemonStore = defineStore('pokemonTCG', () => {
    const loaded = ref({});//this is a helper object to keep track of what series and artists have already been loaded
    const loadingPokemon = computed(() => Object.values(loaded.value).includes('loading'));

    /******************************************************************************
     ********************************* CATEGORIES *********************************
     *****************************************************************************/
    const sets = ref([]);
    const artists = ref([]);
    /**
     * load the all infos about the different sets
     * @returns {Ref}
     */
    async function loadSets() {
        const result = await FireFunctions.call('getSets');
        sets.value = result.data.result;

        return sets;
    }

    /**
     * load all infos about the diffferent artists
     * @returns {Ref}
     */
    async function loadArtists() {
        const result = await FireFunctions.call('getArtists');
        artists.value = result.data.result;

        return artists;
    }

    /******************************************************************************
     ************************************ CARDS ***********************************
     *****************************************************************************/
    const allCards = ref({});//internal variable to keep loaded cards unique
    const cards = computed(() => Object.values(allCards.value));
    /**
     * loads all cards for the given series
     * @param  {String} series
     * @returns {Ref}
     */
    async function loadCardsForSeries(series) {
        if (loaded.value[series]) return;

        loaded.value[series] = 'loading';
        const orderBy = "number asc";
        const result = await FireFunctions.call('queryCards', { series, orderBy });
        console.log(result.data.result);
        addCards(result.data.result);
        loaded.value[series] = true;

        return cards;
    }

    /**
     * loads all cards for the given artist
     * @param {String} artist 
     * @returns {Ref}
     */
    async function loadCardsForArtist(artist) {
        if (loaded.value[artist]) return;

        loaded.value[artist] = 'loading';
        const orderBy = "number asc";
        const result = await FireFunctions.call('queryCards', { artist, orderBy });
        console.log(result.data.result);
        addCards(result.data.result);
        loaded.value[artist] = true;

        return cards;
    }

    /**
     * inserts the given card objects into the db
     * @param {Array<Object>} cards 
     * @returns {Object}
     */
    async function insertCards(cards) {
        const result = await FireFunctions.call('insertCards', { cards });
        return result;
    }

    /**
     * adds the cards to the allcards object
     * @param {Array<Object>} cards 
     */
    function addCards(cards) {
        for (const card of cards) {
            allCards.value[card.id] = card;
        }
    }

    /******************************************************************************
     *********************************** POKEMON **********************************
     *****************************************************************************/
    const pokemons = ref([]);
    /**
     * loads all infos about all the pokemon that there are
     * @returns {Ref}
    */
    async function loadPokemon() {
        if (loaded.Pokemon) return;
        loaded.value.Pokemon = 'loading';
        const result = await FireFunctions.call('getPokemon');
        pokemons.value = result.data.result;
        console.log(pokemons.value)
        loaded.value.Pokemon = true;

        return pokemons;
    }

    /******************************************************************************
     ********************************* COLLECTIONS ********************************
     *****************************************************************************/
    const collections = ref(new Map());
    const POKEMON_COLLECTION_ID = 'PokemonCollections';
    /**
     * loads all collections from firebase
     * @returns {Ref}
     */
    async function loadCollections() {
        const result = await getCollection(POKEMON_COLLECTION_ID, { cache: false });

        for (const collection of result) {
            collections.value.set(collection.docid, new Map(Object.entries(collection)));
        }
    }

    async function saveCollection(collection) {
        console.log('saveCollection');
        const result = await setDocument(POKEMON_COLLECTION_ID, collection.docid, collection);

        console.log(result);
    }

    return {
        loadingPokemon,
        // CATEGORIES
        sets, artists,
        loadSets, loadArtists,
        // CARDS
        cards,
        loadCardsForSeries, loadCardsForArtist, insertCards,
        //POKEMON
        pokemons,
        loadPokemon,
        // COLLECTION
        collections,
        loadCollections, saveCollection,
    }
})


