/**
 * 
 * Documentation: https://pokeapi.co/docs/v2
 */
export {
   exportCSV
}

async function exportCSV() {
    const species = await fetch("https://pokeapi.co/api/v2/pokemon-species");
    const count = (await species.json()).count;
    console.log('exporting ', count, ' Pokemon');
    let csv = "pokedexnr,name,color,generation,is_baby,is_legendary,is_mythical";
    for(let i = 1; i <= count; ++i) {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon-species/" + i);
        const pokemon = await response.json();
        
        const nationalPokedex = pokemon.pokedex_numbers.find(pokedex => pokedex.pokedex.name == 'national')
        console.log('handling: ',nationalPokedex.entry_number, ' - ', pokemon.name)
        const content =  [
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