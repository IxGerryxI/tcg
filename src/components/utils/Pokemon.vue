<template>
    <div class="pokemon">
        <img :src="pokemon.image" alt="" width="65%">
        <div class="info">
            <span class="pokedexnr">#{{ pokemon.pokedexnr }}</span>
            <span class="name">{{ capitalize(pokemon.name) }}</span>
        </div>
        <div class="icon_container">
            <button class="icon_button"><Icon.Plus class="icon"></Icon.Plus></button>
        </div>
    </div>
</template>

<script setup>
import * as Icon from '@/components/icons';

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
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
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

.icon_container {
    display: flex;
    position: absolute;
    inset: 0 0 auto auto;
}
.icon_button  {
    border-radius: 50%;
    background-color: rgba(75, 75, 75, 0.4);
    padding: 3px;
    aspect-ratio: 1;

    &:hover {
        background-color: rgba(125, 125, 125, 0.4);
    }
    & .icon {
        fill: #fff;
        width: 1rem;
    }
}

</style>