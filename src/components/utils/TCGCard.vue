<template>
    <div class="card">
        <div class="icon_container">
            <button class="icon_button" @click="onOwnedClick">
                <Icon.Diamond_Filled v-if="owned" class="icon"></Icon.Diamond_Filled>
                <Icon.Diamond_Outline v-else class="icon"></Icon.Diamond_Outline>
            </button>
            <button class="icon_button" @click="onFavedClick">
                <Icon.Heart v-if="faved" class="icon"></Icon.Heart>
                <Icon.Heart_Outline v-else class="icon"></Icon.Heart_Outline>
            </button>
            <!-- <button class="icon_button" @click="onAddClick">
                <Icon.Plus class="icon"></Icon.Plus>
            </button> -->
        </div>
        <div>
            <img :src="card.image_small" alt="" @click="toggleImageFullscreen">
            <div v-if="imageFullscreen" class="fullscreen" @click="toggleImageFullscreen">
                <img :src="card.image_large" alt="">
            </div>
            <div class="name">#{{ card?.pokedexnr }} {{ card.name }}</div>
        </div>
        <div class="set">
            <span>{{ card.number }}/{{ card.total_cards }}</span>
            <span>{{ card.setname }}</span>
        </div>
    </div>
</template>

<script setup>
import * as Icon from '@/components/icons';
import { ref } from 'vue';

const props = defineProps({
    card: {
        type: Object,
        default: () => ({})
    },
    owned: {
        type: Boolean,
        default: false,
    },
    faved: {
        type: Boolean,
        default: false,
    }
})

const emit = defineEmits(['click:owned', 'click:add', 'click:faved']);

function onOwnedClick() {
    emit('click:owned', props.card);
}

function onFavedClick() {
    emit('click:faved', props.card);
}

function onAddClick() {
    emit('click:add', props.card);
}

const imageFullscreen = ref(false);
function toggleImageFullscreen() {
    imageFullscreen.value = !imageFullscreen.value;
}
</script>

<style scoped>
.card {
    position: relative;
    display: flex;
    flex: 1 0 210px;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding: 5px;
    text-align: center;
    /* border: 3px solid rgba(100, 100, 100, 0.5); */
    border-radius: 7px;
    max-height: 330px;
    max-width: 210px;

    & img {
        width: 170px;
        padding-top: 20px;
        cursor: pointer;
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

.fullscreen {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 100;

    & img {
        width: auto;
        max-height: 85vh;
        cursor: pointers;
    }
}

.icon_container {
    position: absolute;
    display: flex;
    justify-content: flex-end;
    width: 100%;
    gap: 3px;
}

.icon_button {
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