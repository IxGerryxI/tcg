<template>
    <div class="pokemon">
        <img :src="pokemon.image" alt="" width="100%">
        <div class="info">
            <span class="pokedexnr">#{{ pokemon.pokedexnr }}</span>
            <span class="name">{{ capitalize(pokemon.name) }}</span>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    pokemon: {
        type: Object,
        default: () => ({}),
    }
})

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
</script>

<style scoped>
.pokemon {
    display: flex;
    flex-direction: column;
    max-width: 175px;
}

.info {
    display: flex;
    align-items: center;
    justify-content: center;
}

.pokedexnr {
    color: rgb(100, 100, 100);
    font-size: 1.5rem;
}

.name {
    margin-left: 10px;
    font-size: 1.2rem;
}
</style>