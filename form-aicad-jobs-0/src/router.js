import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/profile/:id',
      name: 'profile',
      // route level code-splitting
      // this generates a separate chunk (ajustes.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "ajustes" */ './views/Profile.vue'),
      children: [
        { path: 'ajustes', name:'ajustes', component: () => import(/* webpackChunkName: "ajustes" */ '@/views/profile/ajustes/ajustes.vue') },
        { path: 'ayuda', name:'ayuda' },
        { path: 'formacion', name:'formacion' },
        { path: 'consejos', name:'consejos' },
      ]
    }
  ]
})
