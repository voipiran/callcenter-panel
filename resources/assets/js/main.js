import { createApp } from "vue"
import { createI18n } from 'vue-i18n'
import { createPinia } from 'pinia'
import { createRouter, createWebHashHistory } from 'vue-router'


import App from './app.js'

const app = createApp(App)

/**axios instance */
import axiosInstance from "./axios"
app.config.globalProperties.$axios = axiosInstance

// import pinia
const pinia = createPinia()
app.use(pinia)

// import Notifications
import Notifications from '@kyvg/vue3-notification'
app.use(Notifications)

// import language
import langI18n from './I18_localization/langI18n.js'
const i18n = createI18n(langI18n)
app.use(i18n)

// import router
import { routes } from "./route/route.js"
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`

})
app.use(router)

app.mount('#app')


