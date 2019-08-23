import Vue from 'vue'
import Router from 'vue-router'
import inicio from './views/inicio.vue'
import becasayudas from '@/views/grado/becas-ayudas/index-n-0.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: inicio
    },
    {
      path: '/institucion',
      name: 'institucion',
    },
    {
      path: '/grado/carreras',
      name: 'carreras',
    },
    {
      path: '/grado/becas-ayudas',
      name: 'becas-ayudas',
      component: becasayudas
      //component: () => import(/* webpackChunkName: "about" */ '@/views/grado/becas-ayuda/index-n-0.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
