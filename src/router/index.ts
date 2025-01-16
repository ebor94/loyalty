import { createRouter, createWebHistory } from 'vue-router'
import ProfessionalConfirmation from '../views/ProfessionalConfirmation.vue'
import ClientConfirmation from '../views/ClientConfirmation.vue'
import ProfessionalDashboard from '../views/ProfessionalDashboard.vue'
import Home from '../views/Home.vue'

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
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})