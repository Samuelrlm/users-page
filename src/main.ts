
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify';

import './assets/main.css'

const app = createApp(App)
app.use(Vue3Toastify, {
    autoClose: 3000,
    position: 'top-right'
} as ToastContainerOptions)

app.use(router)

app.mount('#app')
