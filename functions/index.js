const {onCall} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const { BigQuery } = require('@google-cloud/bigquery');

const ONCALL_OPTIONS = {
    // enforceAppCheck: true,
    cors: ["http://localhost:5173", "pokemontcg.web.app"],
}
/**
 * this functions is for querying the store with definite attribute
 * you can use any of the attributes to query or use multiple in an array which will be concatenated in and OR - Query
 * you can also use the limit and the orderBy parameter 
 */
exports.queryCards = onCall(ONCALL_OPTIONS, async (request) => {
    if(!isUserValid(request.auth.token.email)) return { message: 'You\'re a twat' };
    const { limit, orderBy, ...attributes } = request.data || {}
    let query = `SELECT * FROM \`whales-in-space.poemon_tcg.cards\``;

    const params = {}; // this is for the params to replace in the prepare statement
    if (Object.keys(attributes).length > 0) query += ' WHERE ';
    for (const [name, value] of Object.entries(attributes)) {
        const values = Array.isArray(value) ? value : [value];
        const queries = [];
        for (const index in values) {
            const key = name + index;
            params[key] = values[index]
            queries.push(`${name} = @${key}`);
        }
        query += queries.join(' OR ');
    }

    if (orderBy) {
        query += ' ORDER BY @orderBy ';
        params.orderBy = orderBy;
    }

    if (limit) {
        query += ' LIMIT @limit ';
        params.limit = limit;
    }
    // For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query
    const options = {
        query: query,
        location: 'europe-west3',
        params
    };

    // Wait for the query to finish
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
        location: 'EU',
      };
      const [rows] = await bigqueryClient.query(options);
      return { message: 'You\'re not a twat', result: rows };
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
 * @param {Object} options - For all options, see https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query
 * @returns 
 */
async function query(options) {
    const bigquery = new BigQuery();
    const [job] = await bigquery.createQueryJob(options);
    const [rows] = await job.getQueryResults();

    const size = Buffer.byteLength(JSON.stringify(rows))
    console.log('Queried ', rows.length + ' rows - ', size / 1000 + 'kb');

    return rows;
}

function isUserValid(email) {
    return email === 'xgerrymobil@gmail.com';
}