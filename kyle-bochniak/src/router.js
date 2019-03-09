import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Nav from './views/Nav.vue';
import Contact from './views/Contact.vue';
import Gallery from './views/Gallery.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',

      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/nav',
      name: 'nav',
      component: Nav
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: Gallery
    }
  ]
});
