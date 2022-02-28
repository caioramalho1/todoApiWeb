import Home from '@/views/Home-page.vue';
import CadastroPage from '@/views/Cadastro-page-view.vue';
import ListaPage from '@/views/Lista-page-view.vue'

import {createRouter, createWebHistory} from 'vue-router';

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/cadastro', name: 'About', component: CadastroPage},
    {path: '/list', name: 'List', component: ListaPage}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router