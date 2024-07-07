const {onCall} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

exports.getPokemon = onCall(async (request, context) => {
    if(!isUserValid(request.auth.token.email)) return [];

    const bigqueryClient = new BigQuery();
    const sqlQuery = `Select * FROM \`whales-in-space.poemon_tcg.pokemon\``
    const options = {
        query: sqlQuery,
        // Location must match that of the dataset(s) referenced in the query.
        location: 'EU',
      };
      const [rows] = await bigqueryClient.query(options);
      return {
        pokemon: rows
      }
})


function isUserValid(email) {
    return email === 'xgerrymobil@gmail.com';
}