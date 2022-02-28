import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import router from '@/router';
import PrimeVue from 'primevue/config'
import Dialog from 'primevue/dialog'
import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons

createApp(App)
.use(router)
.use(PrimeVue)
.component('Dialog', Dialog)
.mount('#app')


