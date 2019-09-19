import Vue from 'vue'
import Router from 'vue-router'
import notFoundComponent from '@/views/error/404.vue'
import Home from '@/views/Home.vue'
// A - AJUSTES (SETTING'S OPTION'S)
import Settings from '@/views/profile/main/ajustes.vue'
// 00 - ACCESS DATE
import changeEmail from '@/views/profile/ajustes/datos-acceso/change-email.vue'
import changePassword from '@/views/profile/ajustes/datos-acceso/change-password.vue'
// 01- NOTIFACTIONS && CONSEJOS
import alertEmployeEmail from '@/views/profile/ajustes/notificaciones-y-consejos/alertas-de-empleo-por-email.vue'
import settingsComunications from '@/views/profile/ajustes/notificaciones-y-consejos/settings-comunications.vue'
// 02 - SETTINGS PRIVACY
import settingsPrivacy from '@/views/profile/ajustes/privacy/settings-privacy.vue'

// B - AYUDA (HELP) 
import Help from '@/views/profile/main/help.vue'
import questionPassword from '@/views/profile/help/access-profile/question-password.vue'
import notEmailSent from '@/views/profile/help/access-profile/not-email-sent.vue'
import notAccessProfile from '@/views/profile/help/access-profile/not-access-profile.vue'
import questionEmailPassword from '@/views/profile/help/access-profile/question-email-password.vue'
// C - FORMACION
import Formacion from '@/views/profile/main/formacion.vue'

// D - CONSEJOS 
import Consejos from '@/views/profile/main/consejos.vue'


Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '*',
      name: '404',
      component: notFoundComponent
    },
    {
      path: '/profile/:id',
      name: 'profile',
      // route level code-splitting
      // this generates a separate chunk (ajustes.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "ajustes" */ './views/Profile.vue'),
      children: [
        //  -o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o- //
        // A - SETTINGS OPTION'S
        //{ path: '', name:'ajustes', component: () => import(/* webpackChunkName: "ajustes" */ '@/views/profile/main/ajustes.vue') },
        { path: '', name: 'ajustes', component: Settings },
        //  -o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o- //
        // 00 - ACCESS DATE
        //{ path: '/ajustes/datos-acceso/change-email', name:'change-email', component: () => import(/* webpackChunkName: "change-email" */ '@/views/profile/ajustes/datos-acceso/change-email.vue') },
        { path: '/ajustes/datos-acceso/change-email', name: 'change-email', component: changeEmail },
        //{ path: '/ajustes/datos-acceso/change-password', name:'change-password', component: () => import(/* webpackChunkName: "change-password" */ '@/views/profile/ajustes/datos-acceso/change-password.vue') },
        { path: '/ajustes/datos-acceso/change-password', name: 'change-password', component: changePassword },
        //  -o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o- //
        // 01- NOTIFACTIONS && CONSEJOS
        //{ path: '/ajustes/notificaciones-y-consejos/alertas-de-empleo-por-email', name:'alertas-de-empleo-por-email', component: () => import(/* webpackChunkName: "alertas-de-empleo-por-email" */ '@/views/profile/ajustes/notificaciones-y-consejos/alertas-de-empleo-por-email.vue') },
        { path: '/ajustes/notificaciones-y-consejos/alertas-de-empleo-por-email', name: 'alertas-de-empleo-por-email', component: alertEmployeEmail },
        //{ path: '/ajustes/notificaciones-y-consejos/settings-comunications', name:'settings-comunications', component: () => import(/* webpackChunkName: "settings-comunications" */ '@/views/profile/ajustes/notificaciones-y-consejos/settings-comunications.vue') },
        { path: '/ajustes/notificaciones-y-consejos/settings-comunications', name: 'settings-comunications', component: settingsComunications },
        //  -o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o- //
        //{ path: '/ajustes/privacy/settings-privacy', name:'settings-privacy', component: () => import(/* webpackChunkName: "settings-privacy" */ '@/views/profile/ajustes/privacy/settings-privacy.vue') },
        { path: '/ajustes/privacy/settings-privacy', name: 'settings-privacy', component: settingsPrivacy },
        //  -o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o-o- // 
        // B - AYUDA (HELP)
        { path: 'index', name: 'ayuda', component: Help },
        { path: '/help/access-data/question-password', name: 'question-password', component: questionPassword },
        { path: '/help/access-data/not-email-sent', name: 'not-email-sent', component: notEmailSent },
        { path: '/help/access-data/not-access-profile', name: 'not-access-profile', component: notAccessProfile },
        { path: '/help/access-data/question-email-password', name: 'question-email-password', component: questionEmailPassword },
        { path: 'index-2', name: 'formacion', component: Formacion },
        { path: 'index-3', name: 'consejos', component: Consejos },
      ],
    },
  ]
})
/**
 * Es para mostrar el error de forma especifica, cuando halla fallas 
 * en el momento de que al hacer 'Build' al proyecto, identificar el error
 */
router.onError(error => {
  if (/loading chunk \d* failed./i.test(error.message)) {
    window.location.reload()
  }
});
export default router;
