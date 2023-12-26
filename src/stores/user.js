import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
    let resolve;
    const user = ref(new Promise(res => resolve = res));

    watch(user, resolveUser);
    function resolveUser(value) {
        resolve(value);
    }

    return {
        user,
    }
})


