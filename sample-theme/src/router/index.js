import Vue from 'vue';
import Router from 'vue-router';
import Top from '@/views/Top';
import About from '@/views/About';
import PostIndex from '@/views/Post/Index';
import PostDetail from '@/views/Post/Detail';

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
    {
      path: '/posts/',
      component: PostIndex
    },
    {
      path: '/posts/:id',
      component: PostDetail
    }
  ]
});
