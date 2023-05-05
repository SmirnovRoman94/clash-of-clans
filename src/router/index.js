import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import items from '@/seeders/items';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
  },
  {
    path: '/vacancy',
    name: 'vacancy',
    component: () => import('../views/VacancyView.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('../views/NotFoundView.vue'),
  },
  {
    path: '/:itemAlias',
    name: 'itemAlias',
    component: () => import('../views/_ItemAlias.vue'),
    // проверка на существование alias
    beforeEnter(to){
      console.log(to.params.itemAlias);
      const aliasItem = to.params.itemAlias;
      const item = items.find(el=> el.alias === aliasItem);
      if(!item) return {name: '404'}
    }
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
