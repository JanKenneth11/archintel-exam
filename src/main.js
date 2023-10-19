import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap-icons/font/bootstrap-icons.css'
import "bootstrap"
import BaseLayout from '@/layouts/BaseLayout.vue'
const app = createApp(App)
  .use(createPinia())
  .use(router)
  .component('base-layout', BaseLayout)
app.mount('#app')
