import { createRouter, createWebHistory } from 'vue-router'
import ProfessionalConfirmation from '../views/ProfessionalConfirmation.vue'
import ClientConfirmation from '../views/ClientConfirmation.vue'
import ProfessionalDashboard from '../views/ProfessionalDashboard.vue'
import Home from '../views/Home.vue'
import Regsitro from '../views/Regsitro.vue'
import Store from '../views/Store.vue'
import StoreDetail from '../views/StoreDetail.vue'


const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/client/:id',
    component: ClientConfirmation
  },
  {
    path: '/professional/:id',
    component: ProfessionalConfirmation
  }
  ,
  {
    path: '/dash-professional/:id',
    component: ProfessionalDashboard
  },
  {
    path: '/registro',
    component: Regsitro
  },
  {
    path: '/store',
    component: Store
  }
  ,
  {
    path: '/store/:id',
    name: 'store-detail',
    component: StoreDetail,
    props: true // Esto permite pasar el id como prop al componente
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})