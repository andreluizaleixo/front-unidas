import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Planos from  '../views/Planos/Plans.vue'
import Locale from '../views/Localização/Locale.vue'
import ResumoSimulacao from '../views/Resumo da Simulação/ResumoSimulacao.vue'
import Identificacao from '../views/Identificação/Identificacao.vue'
import FinalizarReserva from "@/components/FinalizarReserva";




const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/planos',
    name: 'Plans',
    component:Planos
  },
  {
    path: '/locale',
    name: 'Locale',
    component:Locale
  },
  {
    path: '/resume',
    name: 'ResumoSimulacao',
    component:ResumoSimulacao
  },
  {
    path:'/identify',
    name: 'Identificacaco',
    component:Identificacao
  },
  {
    path: '/finalizar_reserva',
    name: 'FinalizarReserva',
    component:FinalizarReserva
  }

  ]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
















