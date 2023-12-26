<template>
    <span class="date">{{ formatted }}</span>
</template>

<script setup>
import { toRefs, computed } from 'vue';
const props = defineProps({
    value: {
        type: [Date, String],
        default: null,
    },
    time: {
        type: Boolean,
        default: false,
    },
    datetime: {
        type: Boolean,
        default: false,
    },
    includeseconds: {
        type: Boolean,
        default: false,
    }
})

const { value, time, datetime, includeseconds } = toRefs(props);

/**
 * checks if a date is a valid date
 * @param {*} d - the supposed date object
 * @returns {boolean} - true if valid date
 */
function isValidDate(d) {
    return d instanceof Date && !isNaN(d);
}

const formatted = computed(() => {
    const date = new Date(value.value);
    let formattedDate = '';
    if (!value.value || !isValidDate(date)) return formattedDate

    if (time.value) formattedDate = formatTime(date);
    else if (datetime.value) formattedDate = formatDate(date) + ' ' + formatTime(date);
    else formattedDate = formatDate(date)

    return formattedDate;
})

/**
 * formats a Date into a String dd.MM.yyyy
 * @returns {String}
 */
function formatDate(date) {
    const y = date.getFullYear().toString();
    const m = (date.getMonth() + 1).toString().padStart(2, '0');
    const d = date.getDate().toString().padStart(2, '0');

    return `${d}.${m}.${y}`;
}

/**
 * formats a Date into a String HH:mm[:ss]
 * @returns {String}
 */
function formatTime(date) {
    const h = date.getHours().toString().padStart(2, '0');
    const min = date.getMinutes().toString().padStart(2, '0');

    if (includeseconds.value) {
        let s = date.getSeconds().toString().padStart(2, '0');
        return `${h}:${min}:${s}`;
    }

    return `${h}:${min}`;
}
</script>