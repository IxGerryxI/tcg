import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores';
import * as Icon from '@/components/icons';

import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Cards from '@/views/Cards.vue'
import Collections from '@/views/Collections.vue'
import Pokedex from '@/views/Pokedex.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        icon: Icon.Home,
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        icon: Icon.User,
      }
    },
    {
      path: '/cards',
      name: 'Cards',
      component: Cards,
      meta: {
        icon: Icon.Cards,
      }
    },
    {
      path: '/pokedex',
      name: 'Pokedex',
      component: Pokedex,
      meta: {
        icon: Icon.Pokeball,
      }
    },
    {
      path: '/collections',
      name: 'Collections',
      component: Collections,
      meta: {
        icon: Icon.Book,
      }
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