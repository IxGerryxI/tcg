<template>
    <Base.Dialog ref="dialog" @open="onOpen">
        <template #activator>
            <Icon.Plus style="width: 32px"></Icon.Plus>
        </template>
        <template #title>Create new collection</template>
        <div class="content" v-if="collection">
            <div v-if="error" v-html="error" class="error"></div>
            <div class="name">
                <div>Name</div>
                <input v-model="collection.docid" type="text" placeholder="Name">
            </div>
            <div class="type_selection">
                <div>Type</div>
                <div class="types">
                    <label for="list_radio" class="type">
                        <input v-model="collection.meta.type" value="list" type="radio" name="type" id="list_radio"
                            class="hidden">
                        <Icon.Bookmark_Outline class="icon"></Icon.Bookmark_Outline>
                        List
                    </label>
                    <label for="wants_radio" class="type">
                        <input v-model="collection.meta.type" value="wants" type="radio" name="type" id="wants_radio"
                            class="hidden">
                        <Icon.Bookmark_Check_Outline class="icon"></Icon.Bookmark_Check_Outline>
                        Wants
                    </label>
                </div>
            </div>
            <button @click="onCreateClick">Create</button>
        </div>
    </Base.Dialog>
</template>

<script setup>
import * as Base from '@/components/basic';
import * as Icon from '@/components/icons';
import { onMounted, ref } from 'vue';
import router from '@/router'
import { usePokemonStore } from '@/stores';
const pokemonStore = usePokemonStore();

const dialog = ref(null);
const collection = ref(null);

onMounted(() => {
    reset();
})

function onOpen() {
    reset();
}

function reset() {
    error.value = '';
    collection.value = {
        docid: '',
        meta: {
            type: ''
        }
    }
}
const error = ref("");

async function onCreateClick() {
    console.log('onCreateClick');
    error.value = '';
    if (!collection.value.docid) error.value += 'enter a name for the collection<br>';
    if (pokemonStore.collections.has(collection.value.docid)) error.value += 'the collectionname has already been used<br>';

    if (!collection.value.meta.type) error.value += 'select a type for the collection<br>'

    if (error.value) return;

    await pokemonStore.saveCollection(collection.value);
    dialog.value.closeModal();
    router.push({ name: 'Collection', params: { collectionId: collectionName.value } })
}
</script>

<style scoped>
.content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 25px;
    padding: 0 15px 15px;

    & .name {
        width: 100%;

        & input {
            width: 100%;
        }
    }

    & button {
        margin: 0 auto;
        border: 1px solid;
        border-radius: 12px;
        padding: 10px 25px;
    }

    & .error {
        color: red;
        background-color: rgba(255, 0, 0, 0.1);
        border: 1px solid;
        border-radius: 12px;
        text-align: center;
        width: 100%;
        padding: 10px;
    }

    & .type_selection {
        width: 100%;

        & .types {
            display: flex;
            justify-content: center;
            gap: 60px;

            & .type {
                display: flex;
                flex-direction: column;
                align-items: center;
                min-width: 0;
                text-align: center;
                border: 1px solid transparent;
                border-radius: 12px;

                & .icon {
                    fill: white;
                    width: 100px;
                }

                &:has(input[type="radio"]:checked) {
                    color: var(--highlight);
                    border-color: var(--highlight);

                    & .icon {
                        fill: var(--highlight);
                    }
                }
            }
        }
    }
}
</style>