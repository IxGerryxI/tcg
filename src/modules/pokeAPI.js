/**
 * 
 * Documentation: https://pokeapi.co/docs/v2
 */
export {
    exportCSV,
    createEvolutionUpdateStatement
}

async function exportCSV() {
    const species = await fetch("https://pokeapi.co/api/v2/pokemon-species");
    const count = (await species.json()).count;
    console.log('exporting ', count, ' Pokemon');
    let csv = "pokedexnr,name,color,generation,is_baby,is_legendary,is_mythical";
    for (let i = 1; i <= count; ++i) {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon-species/" + i);
        const pokemon = await response.json();

        const nationalPokedex = pokemon.pokedex_numbers.find(pokedex => pokedex.pokedex.name == 'national')
        console.log('handling: ', nationalPokedex.entry_number, ' - ', pokemon.name)
        const content = [
            nationalPokedex.entry_number,
            pokemon.name,
            pokemon.color.name,
            pokemon.generation.name,
            pokemon.is_baby,
            pokemon.is_legendary,
            pokemon.is_mythical,
        ];

        csv += '\n' + content.join(',');
    }

    const file = new File([csv], 'pokemon.csv', {
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
}

async function createEvolutionUpdateStatement() {
    const speciesResponse = await fetch("https://pokeapi.co/api/v2/pokemon-species");
    const speciesResult = await speciesResponse.json();
    const count = speciesResult.count;
    console.log('updating ', count, ' Pokemon');
    const updated = [];
    const statements = [];

    for (let i = 1; i <= count; ++i) {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon-species/" + i);
        const pokemon = await response.json();
        if (updated.includes(pokemon.name)) {
            console.log('already finished ', pokemon.name)
            continue;
        }

        const evoUrl = pokemon?.evolution_chain?.url;
        const evoResponse = await fetch(evoUrl);
        const evolution = await evoResponse.json();

        const result = getEvoChainStatements(evolution.chain, evolution.id);
        console.log(result);
        updated.push(...result.updated);
        statements.push(...result.statements);
    }

    return statements;
}

function getEvoChainStatements(chain, evoId, evoIndex = 0, result = {}) {
    result.statements ??= [];
    result.updated ??= [];
    evoIndex = chain.is_baby ? -1 : evoIndex;
    const name = chain.species.name;
    let statement = `UPDATE \`whales-in-space.poemon_tcg.pokemon\` 
    SET evolution_id = "${evoId}", 
    SET evolution_index = ${evoIndex}
    WHERE name = ${name};
    `;
    result.statements.push(statement);
    result.updated.push(name);

    for (const species of chain.evolves_to) {
        result = getEvoChainStatements(species, evoId, evoIndex + 1, result);
    }

    return result;
}