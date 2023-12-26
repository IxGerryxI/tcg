import { getDocument } from '@/modules/firestore';
let API_KEY;

async function loadApiKey() {
    const doc = await getDocument('Settings', "POKEMON_TCG_API_KEY", { cache: false });
    API_KEY = doc.value;
    return API_KEY;
}

const BASE_URL = 'https://api.pokemontcg.io/v2';


export {
    getSets, getCardsForSerie, getCardsForSet
}

async function getSets() {
    let sets = []
    let page = 1;
    let result;
    const select = ['id', 'name', 'total', 'series', 'printedTotal', 'releaseDate'].join(',');

    do {
        const url = 'https://api.pokemontcg.io/v2/sets?page=' + page + '&select=' + select + '&orderBy=releaseDate';
        result = await get(url)
        sets = sets.concat(result.data);
        page++;
    } while (result.count > 0);

    return sets;
}

async function getCardsForSerie(name) {
    const query = 'set.series:' + name;
    const cards = getCards(query);

    return cards;
}

async function getCardsForSet(id) {
    const query = 'set.id:' + id;
    const cards = getCards(query);

    return cards;
}

async function getCards(query) {
    const endpoint = '/cards'
    let base = BASE_URL + endpoint + '?';
    if (query) base += 'q=' + query + '&';

    let cards = [];
    let page = 1;
    let result;
    const select = ['id', 'name', 'set', 'number', 'rarity', 'nationalPokedexNumbers', 'images', 'artist'].join(',');

    do {
        let url = base + 'page=' + page + '&select=' + select;
        result = await get(url)
        cards = cards.concat(result.data);
        page++;
    } while (result.count > 0);

    return cards
}

async function get(url) {
    if (!API_KEY) await loadApiKey();

    const headers = new Headers();
    headers.append("X-Api-Key", API_KEY);

    const response = await fetch(url, { headers });
    const result = await response.json();

    return result;
}