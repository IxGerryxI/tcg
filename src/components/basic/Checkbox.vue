<template>
    <span class="checkbox" @click="toggle">
        <svg v-if="modelValue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>checkbox-marked</title>
            <path
                d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>checkbox-blank-outline</title>
            <path
                d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z" />
        </svg>
        <span for="checkbox" v-html="label"></span>
    </span>
</template>

<script setup>
const props = defineProps({
    modelValue: {
        type: Boolean,
        default: false,
    },
    label: {
        type: String,
        default: ""
    }
});

const emit = defineEmits(['update:modelValue'])

function toggle() {
    console.log('toggle')
    emit('update:modelValue', !props.modelValue);
}
</script>

<style scoped>
.checkbox {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
}

svg {
    width: 32px;
    fill: #aaa;
}

input {
    display: none;
}
</style>