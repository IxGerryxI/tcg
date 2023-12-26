<template>
    <div class="card">
        <img :src="card.images.small" alt="">
        <div class="name">#{{ card?.pokedexNr }} {{ card.name }}</div>
        <div class="set">
            <span>{{ card.number }}/{{ set.printedTotal }}</span>
            <span>{{ card.set.name }}</span>
        </div>
    </div>
</template>

<script setup>
import { toRefs, computed } from 'vue';
const props = defineProps({
    card: {
        type: Object,
        default: () => ({})
    },
    series: {
        type: Object,
        default: () => ({}),
    }
})

const { series, card } = toRefs(props);

const set = computed(() => {
    const set = series.value.sets.find(set => set.id == card.value.set.id);
    return set;
});
</script>

<style scoped>
.card {
    display: flex;
    flex: 1 0 210px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 5px;
    margin: 5px;
    text-align: center;
    border: 3px solid rgba(100, 100, 100, 0.5);
    border-radius: 7px;
    flex: 1 0 100px;

    & img {
        width: 170px;
    }

    & .name {
        font-size: 1.1rem;
        text-align: center;
    }

    & .set {
        min-width: 100%;
        display: flex;
        justify-content: space-around;
        font-size: 0.8rem;
        opacity: 0.7;
    }
}
</style>