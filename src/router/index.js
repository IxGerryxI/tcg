import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores';

import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Cards from '@/views/Cards.vue'
import Collections from '@/views/Collections.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/cards',
      name: 'Cards',
      component: Cards
    },
    {
      path: '/collections',
      name: 'Collections',
      component: Collections
    },
  ]
})

export default router

router.beforeEach(async (to) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);
  const { user } = useUserStore();
  await user;

  if (authRequired && !user) {
    // auth.returnUrl = to.fullPath;
    return '/login';
  }
});