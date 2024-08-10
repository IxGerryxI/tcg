<template>
  <header>
    <div v-if="user">
      <RouterLink v-for="route of routesForNav" :key="route.name" class="button icon" :to="route.path"
        :class="[{ 'selected': route.name == routeName }]">
        <component :is="route.meta.icon" style="width: 28px"></component>
        {{ route.name }}
      </RouterLink>
    </div>
    <div>
      <h1>{{ routeName }}</h1>
    </div>
    <div></div>
  </header>
  <RouterView />
</template>

<script setup>
import { useRoute, RouterLink, RouterView, useRouter } from 'vue-router'
import { computed } from 'vue';
import { useUserStore, storeToRefs } from '@/stores';
const { user } = storeToRefs(useUserStore());

const route = useRoute();
const router = useRouter();
const routesForNav = computed(() => router.getRoutes().filter(route => route.meta.inNav));
const routeName = computed(() => route.name);
</script>

<style scoped>
.selected {
  fill: var(--highlight);
  color: var(--highlight);
}
</style>
