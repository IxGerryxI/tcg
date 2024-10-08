import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores';
import * as Icon from '@/components/icons';

import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Cards from '@/views/Cards.vue'
import Collections from '@/views/Collections.vue'
import Collection from '@/views/Collection.vue';
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
        inNav: true,
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        icon: Icon.User,
        inNav: true,
      }
    },
    {
      path: '/cards',
      name: 'Cards',
      component: Cards,
      meta: {
        icon: Icon.Cards,
        inNav: true,
      }
    },
    {
      path: '/pokedex',
      name: 'Pokedex',
      component: Pokedex,
      meta: {
        icon: Icon.Pokeball,
        inNav: true,
      }
    },
    {
      path: '/collections',
      name: 'Collections',
      component: Collections,
      meta: {
        icon: Icon.Book,
        inNav: true,
      }
    },
    {
      path: '/collections/:collectionId',
      name: 'Collection',
      component: Collection,
      meta: {
        icon: Icon.Book,
      }
    }
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