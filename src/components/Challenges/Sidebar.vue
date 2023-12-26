<template>
    <aside class="sidebar list series">
        <Base.Details v-for="(serie, index) of series" :key="'serie_' + index"
            :class="['list-item', 'serie', { 'selected': serie == selectedSerie }]">
            <template #title>
                <span role="button" @click="selectSerie(serie)" class="text">{{ serie.name }}</span>
            </template>
            <div class="list sets">
                <button v-for="(set, index) of serie.sets" :key="'set_' + index" @click="selectSet(set)"
                    :class="['text', 'set', { 'selected': set == selectedSet }]">
                    {{ set.name }}
                </button>
            </div>
        </Base.Details>
    </aside>
</template>

<script setup>
import * as Base from '@/components/basic'
import { ref } from 'vue';

import { usePokemonTCGStore } from '@/stores/pokemonTCG';
const pokemonTCGStore = usePokemonTCGStore()
const { loadCardsForSeries } = pokemonTCGStore;

const props = defineProps({
    selectedSerie: {
        type: Object
    },
    selectedSet: {
        type: Object
    },
    series: {
        type: Array,
        default: () => []
    }
})
const emit = defineEmits(['update:selectedSerie', 'update:selectedSet']);

function selectSerie(item) {
    console.log('selectSerie ', item);
    emit('update:selectedSerie', item);

    loadCardsForSeries(item.name);
    selectSet(null);
}

function selectSet(item) {
    console.log('selectSet ', item);
    emit('update:selectedSet', item);
}

</script>

<style scoped>
.list {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
}

.list-item {
    padding: 8px 12px;
    border: 2px solid #64646464;
    border-radius: 8px;
    cursor: pointer;
}

.series {
    width: 200px;
    gap: 10px;

    & .serie {
        --highlight: #245b47;

        &.selected {
            color: var(--highlight);
            border: 2px solid var(--highlight)
        }
    }
}

.sets {
    padding: 3px 0 0 16px;
    --highlight: #972121;

    & button {
        text-align: left;
        color: #aaaa;

        &.selected {
            color: var(--highlight);
        }
    }
}
</style>