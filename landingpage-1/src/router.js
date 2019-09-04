import Vue from 'vue'
import Router from 'vue-router'
import inicio from './views/inicio.vue'
import becasayudas from '@/views/grado/becas-ayudas/index-n-0.vue'
import convalidaciones from '@/views/grado/convalidaciones/index-n-0.vue'
import internacionalidiomas from '@/views/grado/internacional-idiomas/index-n-0.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: inicio,
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
      component: becasayudas,
      //component: () => import(/* webpackChunkName: "about" */ '@/views/grado/becas-ayuda/index-n-0.vue')
      props: true 
    },
    {
      path: '/grado/convalidaciones',
      name: 'convalidaciones',
      component: convalidaciones
    },
    {
      path: '/grado/internacional-idiomas',
      name: 'internacional-idiomas',
      component: internacionalidiomas
    },
    
  ]
})
