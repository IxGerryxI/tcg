<template>
    <details class="details">
        <summary class="title">
            <div v-if="slots.title" class="title-wrapper">
                <slot name="title"></slot>
            </div>
            <span v-else>{{ title }}</span>
        </summary>
        <slot></slot>
    </details>
</template>

<script setup>
import { useSlots } from 'vue';
const slots = useSlots();

const props = defineProps({
    title: {
        type: String,
        default: '',
    }
})
</script>

<style scoped>
.details {
    border: 2px solid rgba(100, 100, 100, 0.1)
}

.title {
    display: flex;
    cursor: pointer;
}

.title-wrapper {
    width: 100%;
}
</style>