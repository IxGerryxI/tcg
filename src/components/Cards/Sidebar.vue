<template>
    <aside class="sidebar list series">
        <Base.Details class="section">
            <template #title>
                    <span role="button">Series & Sets</span>
                </template>
            <Base.Details v-for="[serie, sets] of Object.entries(series)" :key="'serie_' + serie"
                :class="['list-item', 'serie', { 'selected': serie == selectedSerie }]">
                <template #title>
                    <span role="button" @click="selectSerie(serie)" class="text">{{ serie }}</span>
                </template>
                <div class="list sets">
                    <button v-for="(set, index) of sets" :key="'set_' + index" @click="selectSet(set)"
                        :class="['text', 'set', { 'selected': set.setname == selectedSet }]">
                        {{ set.setname }} ({{ set.number_cards || 0 }})
                    </button>
                </div>
            </Base.Details>
        </Base.Details>
        <Base.Details class="section">
            <template #title>
                <span role="button">Artists</span>
            </template>
            <div class="list sets">
                <button v-for="(artist, index) of filteredArtists" :key="'aritst_' + index" @click="selectArtist(artist.artist)"
                    :class="['text', 'artist', { 'selected': selectedArtist == artist.artist }]">
                    {{ artist.artist || "unknown" }} ({{ artist.number_cards || 0 }})
                </button>
            </div>
        </Base.Details>
    </aside>
</template>

<script setup>
import * as Base from '@/components/basic'
import { computed, toRefs } from 'vue';

const props = defineProps({
    selectedSerie: {
        type: String
    },
    selectedSet: {
        type: String
    },
    series: {
        type: Object,
        default: () => ({})
    },
    artists: {
        type: Array,
        default: () => []
    },
    selectedArtist: {
        type: String,
        default: "",
    }
})
const { artists } = toRefs(props);
const emit = defineEmits(['update:selectedSerie', 'update:selectedSet', 'update:selectedArtist']);

const filteredArtists = computed(() => {
    const filtered = artists.value.sort((a,b) => a.artist > b.artist ? 1 : -1); 
    return filtered;
})

function selectSerie(item) {
    // console.log('selectSerie ', item);
    emit('update:selectedSerie', item);
    emit('update:selectedSet', null);
    emit('update:selectedArtist', null);
}

function selectSet(item) {
    // console.log('selectSet ', item);
    emit('update:selectedSerie', item.series);
    emit('update:selectedSet', item.setname);
    emit('update:selectedArtist', null);
}

function selectArtist(item) {
    // console.log('selectArtist ', item);
    emit('update:selectedSerie', null);
    emit('update:selectedSet', null);
    emit('update:selectedArtist', item);
}

</script>

<style scoped>
aside {
    min-width: 230px;
}

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
    margin-bottom: 6px;
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

.section:deep(>.title) {
    border: none;
    border-bottom: 1px solid;
    font-size: 1.5rem;
    margin-bottom: 8px;
    padding: 0 8px;
}
</style>