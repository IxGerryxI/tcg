<template>
    <main class="login">
        <button @click="toggleLogin">
            <span v-if="!user">Login</span>
            <span v-else>Logout</span>
        </button>
    </main>
</template>

<script setup>
import { logInWithPopup, logOut } from '@/modules/fireAuth';
import { useUserStore, storeToRefs } from '@/stores';
const { user } = storeToRefs(useUserStore());

function toggleLogin() {
    if (user.value) logOut();
    else logInWithPopup();
}
</script>

<style scoped>
button {
    background-color: transparent;
    color: #fff;
    border: none;
    cursor: pointer;
    padding: 12px 16px;
    font-size: 1.2rem;
    border-radius: 12px;

    &:hover {
        background-color: rgba(100, 100, 100, 0.3);
    }
}

.login {
    display: flex;
    justify-content: center;
    padding: 50px;
    margin: 0 150px;
    border-bottom: 1px solid rgba(100, 100, 100, 0.7);
}
</style>