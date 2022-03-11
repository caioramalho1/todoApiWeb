import { createApp } from 'vue';
import App from './App.vue';


import Dialog from 'primevue/dialog'
import router from '@/router';
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import ConfirmationService  from 'primevue/confirmationservice'

import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons

createApp(App)
.use(router)
.use(PrimeVue)
.use(ToastService)
.use(ConfirmationService)
.component('Dialog', Dialog)
.mount('#app')


