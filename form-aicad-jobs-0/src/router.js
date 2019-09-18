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
        { path: '', name:'ajustes', component: () => import(/* webpackChunkName: "ajustes" */ '@/views/profile/main/ajustes.vue') },
        { path: '/ajustes/datos-acceso/change-email', name:'change-email', component: () => import(/* webpackChunkName: "change-email" */ '@/views/profile/ajustes/datos-acceso/change-email.vue') },
        { path: '/ajustes/datos-acceso/change-password', name:'change-password', component: () => import(/* webpackChunkName: "change-password" */ '@/views/profile/ajustes/datos-acceso/change-password.vue') },
        { path: '/ajustes/notificaciones-y-consejos/alertas-de-empleo-por-email', name:'alertas-de-empleo-por-email', component: () => import(/* webpackChunkName: "alertas-de-empleo-por-email" */ '@/views/profile/ajustes/notificaciones-y-consejos/alertas-de-empleo-por-email.vue') },
        { path: '/ajustes/notificaciones-y-consejos/settings-comunications', name:'settings-comunications', component: () => import(/* webpackChunkName: "settings-comunications" */ '@/views/profile/ajustes/notificaciones-y-consejos/settings-comunications.vue') },
        { path: '', name:'ayuda' },
        { path: '', name:'formacion' },
        { path: '', name:'consejos' },
      ]
    },
    
  ]
})
