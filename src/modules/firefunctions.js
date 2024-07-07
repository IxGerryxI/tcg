import { getFunctions, httpsCallable, connectFunctionsEmulator } from "firebase/functions";


export {
    queryCards, getDistinctColumns,

}

const functions = getFunctions();
connectFunctionsEmulator(functions, "127.0.0.1", 5001);
const queryCardsFunction = httpsCallable(functions, 'queryCards');
const getDistinctColumnsFunction = httpsCallable(functions, 'getDistinctColumns');

/**
 * 
 * @param {Object} query
 * @param {String} query.where 
 * @param {String || Number} query.limit
 */
async function queryCards(query) {
    console.log('getCards: ', query);
    const cards = await queryCardsFunction(query)

    console.log(cards);
}

async function getDistinctColumns() {
    console.log('getDistinctColumns')
    const result = await getDistinctColumnsFunction();
    console.log(result)
}