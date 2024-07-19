<template>
    <div class="card">
        <div>
            <img :src="card.image_small" alt="">
            <div class="name">#{{ card?.pokedexnr }} {{ card.name }}</div>
        </div>
        <div class="set">
            <span>{{ card.number }}/{{ card.total_cards }}</span>
            <span>{{ card.setname }}</span>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    card: {
        type: Object,
        default: () => ({})
    },
})
</script>

<style scoped>
.card {
    display: flex;
    flex: 1 0 210px;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding: 5px;
    text-align: center;
    border: 3px solid rgba(100, 100, 100, 0.5);
    border-radius: 7px;
    max-height: 330px;
    max-width: 210px;

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