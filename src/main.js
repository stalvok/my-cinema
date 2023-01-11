import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router.js";
import MobileLayout from "./layouts/MobileLayout.vue";
import DefaultLayout from "./layouts/DefaultLayout.vue";
import {useStorage} from "@vueuse/core";

const app = createApp(App)
app.component("default-layout", DefaultLayout)
app.component("mobile-layout", MobileLayout)
app.use(router)
app.mount('#app')


