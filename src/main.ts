import { createApp } from 'vue'
import '@/reset.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import axios from "axios";
import router from "@/routes/router";

const pinia = createPinia()
const app = createApp(App)

app.config.globalProperties.axios = axios

app.use(pinia).use(router).mount('#app')
