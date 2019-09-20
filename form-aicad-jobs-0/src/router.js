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
// SECTION Nº0 (ACCESS DATA)
import questionPassword from '@/views/profile/help/access-profile/question-password.vue'
import notEmailSent from '@/views/profile/help/access-profile/not-email-sent.vue'
import notAccessProfile from '@/views/profile/help/access-profile/not-access-profile.vue'
import questionEmailPassword from '@/views/profile/help/access-profile/question-email-password.vue'
//SECTION Nº1 (CV MY DATA)
import questionMyCV from '@/views/profile/help/cv-my-data/question-my-cv.vue'
import createUpdateCV from '@/views/profile/help/cv-my-data/create-update-cv.vue'
import createAddPresent from '@/views/profile/help/cv-my-data/create-add-present.vue'
import profileVisible from '@/views/profile/help/cv-my-data/profile-visible.vue'
import protectedAICADJobs from '@/views/profile/help/cv-my-data/protected-aicad-jobs.vue'
// SECTION Nº2 (OFFERS AND RECOMMENDATIONS)
import repeatedOrFraudulent from '@/views/profile/help/offers-and-recommendations/repeated-or-fraudulent.vue'
import offersForYour from '@/views/profile/help/offers-and-recommendations/offers-for-you.vue'
// SECTION Nº3 (REGISTRATIONS AND APPLICATIONS)
import cantSignupOffers from '@/views/profile/help/registrations-and-applications/cant-signup-offers.vue'
import candidateStatesExist from '@/views/profile/help/registrations-and-applications/candidate-states-exist.vue'
import dontCompaniesCallme from '@/views/profile/help/registrations-and-applications/dont-companies-callme.vue'
import canChangemyCV from '@/views/profile/help/registrations-and-applications/can-change-myCV.vue'
import limitOfDailyRegistration from '@/views/profile/help/registrations-and-applications/limit-of-dailyRegistration.vue'
// SECTION Nº4 (EMAIL NOTIFICATIONS ALERTS)
import differenceNotificationsAlerts from '@/views/profile/help/email-notifications-alerts/difference-notificationsAlerts.vue'
import stoppedOffers from '@/views/profile/help/email-notifications-alerts/stopped-offers.vue'
// SECTION Nº5 (CONTACT NETWORK)
import whereAICADJobs from '@/views/profile/help/contact-network/where-aicadjobs.vue'
// SECTION Nº6 (WHO SEES ME)
import receivedVisitors from '@/views/profile/help/who-sees-me/received-visitors.vue'
// SECTION Nº7 (EXECUTIVE ACCOUNT)
import activatedExecutive from '@/views/profile/help/executive-account/activated-executive.vue'
// SECTION Nº8 (UNSUBSCRIBE)
import unsubscribeAICADJobs from '@/views/profile/help/unsubscribe/unsubscribe-aicadjobs.vue'
import unsubscribe from '@/views/profile/help/unsubscribe/unsubscribe.vue'
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
      component: () => import(/* webpackChunkName: "ajustes" */ '@/views/Profile.vue'),
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
        { path: 'help', name: 'ayuda', component: Help },
        //  SECTION Nº0 - ACCESS DATA
        { path: '/help/access-data/question-password', name: 'question-password', component: questionPassword },
        { path: '/help/access-data/not-email-sent', name: 'not-email-sent', component: notEmailSent },
        { path: '/help/access-data/not-access-profile', name: 'not-access-profile', component: notAccessProfile },
        { path: '/help/access-data/question-email-password', name: 'question-email-password', component: questionEmailPassword },
        // SECTION Nº1 - CV my data
        { path: '/help/cv-my-data/question-my-cv', name: 'question-my-cv', component: questionMyCV },
        { path: '/help/cv-my-data/create-update-cv', name: 'create-update-cv', component: createUpdateCV },
        { path: '/help/cv-my-data/create-add-present', name: 'create-add-present', component: createAddPresent },
        { path: '/help/cv-my-data/profile-visible', name: 'profile-visible', component: profileVisible },
        { path: '/help/cv-my-data/protected-aicad-jobs', name: 'protected-aicad-jobs', component: protectedAICADJobs },
        // SECTION Nº2 - (OFFERS AND RECOMMENDATIONS)
        { path: '/help/offers-and-recommendations/repeated-or-fraudulent', name: 'repeated-or-fraudulent', component: repeatedOrFraudulent },
        { path: '/help/offers-and-recommendations/offers-for-you', name: 'offers-for-you', component: offersForYour },
        // SECTION Nº3 - (REGISTRATIONS AND APPLICATIONS)
        { path: '/help/registrations-and-applications/cant-signup-offers', name: 'cant-signup-offers', component: cantSignupOffers },
        { path: '/help/registrations-and-applications/candidate-states-exist', name: 'candidate-states-exist', component: candidateStatesExist },
        { path: '/help/registrations-and-applications/dont-companies-callme', name: 'dont-companies-callme', component: dontCompaniesCallme },
        { path: '/help/registrations-and-applications/can-change-myCV', name: 'can-change-myCV', component: canChangemyCV },
        { path: '/help/registrations-and-applications/limit-of-dailyRegistration', name: 'limit-of-dailyRegistration', component: limitOfDailyRegistration },
        // SECTION Nº4 - (EMAIL NOTIFICATIONS ALERTS)
        { path: '/help/email-notificatons-alerts/difference-notificationsAlerts', name: 'difference-notificationsAlerts', component: differenceNotificationsAlerts },
        { path: '/help/email-notificatons-alerts/stoped-offers', name: 'stoped-offers', component: stoppedOffers },
        // SECTION Nº5 - (CONTACT NETWORK)
        { path: '/help/contact-network/where-aicadjobs', name: 'where-aicadjobs', component: whereAICADJobs },        
        // SECTION Nº6 - (WHO SEES ME)
        { path: '/help/who-sees-me/received-visitors', name: 'received-visitors', component: receivedVisitors },
        // SECTION Nº7 - (EXECUTIVE ACCOUNT)
        { path: '/help/executive-account/activated-executive', name: 'activated-executive', component: activatedExecutive },
        // SECTION Nº8 - (UNSUBSCRIBE)
        { path: '/help/unsubscribe/unsubscribe-aicadjobs', name: 'unsubscribe-aicadjobs', component: unsubscribeAICADJobs },
        { path: '/help/unsubscribe/unsubscribe', name: 'unsubscribe', component: unsubscribe },

        { path: 'tips', name: 'formacion', component: Formacion },
        { path: 'training', name: 'consejos', component: Consejos },
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
