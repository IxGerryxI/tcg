const {onCall} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const { BigQuery } = require('@google-cloud/bigquery');

const ONCALL_OPTIONS = {
    // enforceAppCheck: true,
    cors: ["http://localhost:5173", "pokemontcg.web.app"],
    region: "europe-west3"
}
/**
 * this functions is for querying the store with definite attribute
 * you can use any of the attributes to query or use multiple in an array which will be concatenated in and OR - Query
 * you can also use the limit and the orderBy parameter 
 */
exports.queryCards = onCall(ONCALL_OPTIONS, async (request) => {
    if(!isUserValid(request.auth.token.email)) return { message: 'You\'re a twat' };

    const { limit, orderBy, ...attributes } = request.data || {}
    let sqlQuery = `SELECT * FROM \`whales-in-space.poemon_tcg.cards\``;

    const params = {}; // this is for the params to replace in the prepare statement
    if (Object.keys(attributes).length > 0) sqlQuery += ' WHERE ';
    for (const [name, value] of Object.entries(attributes)) {
        const values = Array.isArray(value) ? value : [value];
        const queries = [];
        for (const index in values) {
            const key = name + index;
            params[key] = values[index]
            queries.push(`${name} = @${key}`);
        }
        sqlQuery += queries.join(' OR ');
    }

    if (orderBy) {
        sqlQuery += ' ORDER BY @orderBy ';
        params.orderBy = orderBy;
    }

    if (limit) {
        sqlQuery += ' LIMIT @limit ';
        params.limit = limit;
    }
    // For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query
    const options = {
        query: sqlQuery,
        location: 'europe-west3',
        params
    };

    // Wait for the query to finish
    console.log(options)
    const rows = await query(options);

    return { message: 'You\'re not a twat', result: rows };
});

/**
 * 
 */
exports.getPokemon = onCall(ONCALL_OPTIONS, async (request) => {
    if(!isUserValid(request.auth.token.email)) return { message: 'You\'re a twat' };

    const bigqueryClient = new BigQuery();
    const sqlQuery = `Select * FROM \`whales-in-space.poemon_tcg.pokemon\``
    const options = {
        query: sqlQuery,
        // Location must match that of the dataset(s) referenced in the query.
        location: 'europe-west3',
      };
      const [rows] = await bigqueryClient.query(options);
      return { message: 'You\'re not a twat', result: rows };
})

/**
 * 
 */
exports.getSets = onCall(ONCALL_OPTIONS, async (request) => {
    if(!isUserValid(request.auth.token.email)) return { message: 'You\'re a twat' };
    const location = 'europe-west3';

    const setQuery = "SELECT setname, setsymbol, series, releasedate, count(number) as number_cards FROM \`whales-in-space.poemon_tcg.cards\` group by setname, setsymbol, series, releasedate ORDER BY releasedate desc;";

    const sets = await query({ query: setQuery, location });

    return { message: 'You\'re not a twat', result: sets };
})

/**
 * 
 */
exports.getArtists = onCall(ONCALL_OPTIONS, async (request) => {
    if(!isUserValid(request.auth.token.email)) return { message: 'You\'re a twat' };
    const location = 'europe-west3';
    // const artistQuery = "SELECT distinct artist FROM \`whales-in-space.poemon_tcg.cards\`;";
    const artistQuery = "SELECT artist, count(number) as number_cards FROM \`whales-in-space.poemon_tcg.cards\` group by artist order by artist;"

    const artists = await query({ query: artistQuery, location });

    return { message: 'You\'re not a twat', result: artists };
})

/**
 * 
 */
exports.getDistinctColumns = onCall(ONCALL_OPTIONS, async (request) => {
    if(!isUserValid(request.auth.token.email)) return { message: 'You\'re a twat' };
    const location = 'europe-west3';

    const setQuery = "SELECT distinct setname, setsymbol, series, releasedate FROM \`whales-in-space.poemon_tcg.cards\`;";
    const seriesQuery = "SELECT distinct series FROM \`whales-in-space.poemon_tcg.cards\`;";
    const artistQuery = "SELECT distinct artist FROM \`whales-in-space.poemon_tcg.cards\`;";

    const promises = [
        query({ query: setQuery, location }),
        query({ query: seriesQuery, location }),
        query({ query: artistQuery, location }),
    ]

    const [sets, series, artists] = await Promise.all(promises);

    return { message: 'You\'re not a twat', result: { sets, series, artists } };
})

/**
 * 
 */
exports.insertCards = onCall(ONCALL_OPTIONS, async (request) => {
    if(!isUserValid(request.auth.token.email)) return { message: 'You\'re a twat' };
    const location = 'europe-west3';
    const fields = ['id','image_small','image_large','name','pokedexnr','number','artist','rarity','setId','setname','setsymbol','setlogo','series','printed_cards','total_cards','releasedate'];
    let statement = `INSERT INTO \`whales-in-space.poemon_tcg.cards\`
    (${fields.join(',')})
VALUES`; 
    const TYPES = {
        id: 'STRING',
        image_small: 'STRING',
        image_large: 'STRING',
        name: 'STRING',
        pokedexnr: 'INT64',
        number: 'STRING',
        artist: 'STRING',
        rarity: 'STRING',
        setId: 'STRING',
        setname:'STRING',
        setsymbol: 'STRING',
        setlogo: 'STRING',
        series: 'STRING',
        printed_cards: 'INT64',
        total_cards: 'INT64',
        releasedate: 'STRING'
    };
    const params = {};
    const types = {};
    const cards = request.data.cards;
    const values = [];
    for(const index in cards) {
        const card = cards[index];
        let q = [];
        for(const field of fields) {
            const key = field + index;
            if(field == 'releasedate') q.push(`PARSE_DATE('%Y/%m/%d', @${key})`)
            else q.push(`@${key}`);
            params[key] = card[field];
            types[key] = TYPES[field];
        }
        values.push('(' + q.join(',') + ')');
    }

    statement += `\n ${values.join(',\n')};`

    const result = await query({ query: statement, location, params, types });

    return { message: 'You\'re not a twat', result };
})

/**
 * 
 */
exports.getPokemon = onCall(ONCALL_OPTIONS, async (request) => {
    if(!isUserValid(request.auth.token.email)) return { message: 'You\'re a twat' };
    const location = 'europe-west3';

    const statement = "SELECT * FROM \`whales-in-space.poemon_tcg.pokemon\` ORDER BY pokedexnr"

    const pokemon = await query({ query: statement, location });

    return { message: 'You\'re not a twat', result: pokemon };
})

/**
 * 
 * @param {Object} options - For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query
 * @returns 
 */
async function query(options) {
    const bigquery = new BigQuery();
    const result = await bigquery.createQueryJob(options);
    console.log(result);
    const [job] = result;
    const [rows] = await job.getQueryResults();

    const size = Buffer.byteLength(JSON.stringify(rows))
    console.log('Queried ', rows.length + ' rows - ', size / 1000 + 'kb');

    return rows;
}

function isUserValid(email) {
    return email === 'xgerrymobil@gmail.com';
}
