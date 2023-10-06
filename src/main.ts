
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify';
import store from '../src/store/store'
import webSocketModule from './webSocketModule/webSocketModule'; 
import './assets/main.css'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaFlag, RiZhihuFill, MdDashboard, IoExitOutline, BiPeopleFill } from "oh-vue-icons/icons";

addIcons(
    FaFlag,
    RiZhihuFill,
    MdDashboard,
    IoExitOutline,
    BiPeopleFill
);
const app = createApp(App)
app.component("v-icon", OhVueIcon);
app.use(store)
store.registerModule('websocket', webSocketModule);
store.dispatch('websocket/initializeWebSocket');
app.use(Vue3Toastify, {
    autoClose: 3000,
    position: 'top-right'
} as ToastContainerOptions)

app.use(router)

app.mount('#app')
