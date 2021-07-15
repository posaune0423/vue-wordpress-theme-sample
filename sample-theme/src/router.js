import Vue from 'vue';
import Router from 'vue-router';
import Top from '@/pages/Top';
import About from '@/pages/About';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      component: Top
    },
    {
      path: '/about',
      component: About
    },
  ]
});
