import { getDocument } from '@/modules/firestore';
let API_KEY;

async function loadApiKey() {
    const doc = await getDocument('Settings', "POKEMON_TCG_API_KEY", { cache: false });
    API_KEY = doc.value;
    return API_KEY;
}

const BASE_URL = 'https://api.pokemontcg.io/v2';


export {
    getSets, getCardsForSerie, getCardsForSet, exportCSV
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
        console.log('get Page: ' + page + ' - ' + cards.length);
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

async function exportCSV() {
    console.log('exporting CSV');
    console.time();
    const cards = await getCards();
    console.log(cards);


    let csv = "id,image_small,image_large,name,pokedexnr,number,artist,rarity,setId,setname,setsymbol,setlogo,series,printed_cards,total_cards,releasedate";
    for (const card of cards) {
        const content = [
            card?.id,
            card?.images?.small,
            card?.images?.large,
            card?.name,
            card?.nationalPokedexNumbers?.[0] || null,
            card?.number || null,
            card?.artist?.replace(',', '') || null,
            card?.rarity?.replace(',', '') || null,
            card?.set?.id || null,
            card?.set?.name || null,
            card?.set?.images?.symbol || null,
            card?.set?.images?.logo || null,
            card?.set?.series || null,
            card?.set?.printedTotal || null,
            card?.set?.total || null,
            card?.set?.releaseDate || null,
        ]
        csv += '\n' + content.join(',');

    }
    const file = new File([csv], 'popkemoncards.csv', {
        type: 'text/plain',
    })
    const link = document.createElement('a');
    const url = URL.createObjectURL(file);

    link.href = url
    link.download = file.name
    document.body.appendChild(link)
    link.click()

    document.body.removeChild(link)
    window.URL.revokeObjectURL(url)
    console.timeEnd();
}