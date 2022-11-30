import { createApp } from 'vue'
import '@/reset.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from "@/routes/router";
import {LoadingPlugin} from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

const pinia = createPinia()
const app = createApp(App)

app.use(pinia).use(router).use(LoadingPlugin).mount('#app')
