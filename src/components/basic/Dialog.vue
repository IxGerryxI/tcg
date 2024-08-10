<template>
    <button @click="openModal">
        <slot name="activator"></slot>
    </button>
    <dialog ref="dialog">
        <header>
            <div class="title">
                <slot name="title"></slot>
            </div>
            <form method="dialog">
                <button>
                    <Icon.Close width="24px"></Icon.Close>
                </button>
            </form>
        </header>
        <main>
            <slot></slot>
        </main>
        <footer>
            <slot name="footer"></slot>
        </footer>
    </dialog>
</template>

<script setup>
import { ref } from 'vue';
import * as Icon from '@/components/icons';

const dialog = ref(null);

const emit = defineEmits(['open', 'close'])

function openModal() {
    emit('open')
    dialog.value.showModal()
}

function closeModal() {
    emit('close')
    dialog.value.close()
}

defineExpose({ closeModal })

</script>

<style scoped>
dialog {
    position: absolute;
    inset: 0;
    margin: auto;
    padding: 0;
    background-color: #191919;
    color: #eee;
    min-width: 400px;
    border: 2px solid rgba(100, 100, 100, 0.5);
    border-radius: 8px;

    & header {
        display: flex;
        border-bottom: 1px solid rgba(100, 100, 100, 0.5);
        padding: 6px 12px;

        & .title {
            display: flex;
            align-items: center;
            flex-grow: 1;
        }

        & button {
            padding: 0;
            display: flex;
            align-items: center;
        }
    }

    & main {
        padding: 8px;
    }
}

::backdrop {
    background-color: rgba(100, 100, 100, 0.4)
}
</style>