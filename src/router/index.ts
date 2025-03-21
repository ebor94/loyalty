import { createRouter, createWebHistory } from 'vue-router'
import ProfessionalConfirmation from '../views/ProfessionalConfirmation.vue'
import ClientConfirmation from '../views/ClientConfirmation.vue'
import ProfessionalDashboard from '../views/ProfessionalDashboard.vue'
import Home from '../views/Home.vue'
import Regsitro from '../views/Regsitro.vue'
import Store from '../views/Store.vue'
import StoreDetail from '../views/StoreDetail.vue'
import {useUserStore}  from '../store/user'
import GiftCard from '../components/GiftCard.vue'
import RegistroItalpartners from '../views/RegistroItalpartners.vue'


const routes = [
  {
    path: '/',
    component: Home,
    meta: { requiresAuth: false }, // Ruta pública
  },
  {
    path: '/client/:pedido/:cc',
    component: ClientConfirmation,
    meta: { requiresAuth: false }, // Ruta pública
  },
  {
    path: '/professional/:ped/:ced',
    component: ProfessionalConfirmation,
    meta: { requiresAuth: false }, // Ruta pública
  }
  ,
  {
    path: '/dash-professional/:id',
    component: ProfessionalDashboard,
    meta: { requiresAuth: true}, // Ruta privada
  },
  {
    path: '/registro',
    name: 'registro',
    component: Regsitro,
    meta: { requiresAuth: false }, // Ruta pública
  },
  {
    path: '/store',
    component: Store,
    meta: { requiresAuth: true }, // Ruta privada
  }
  ,
  {
    path: '/store/:id',
    name: 'store-detail',
    component: StoreDetail,
    props: true,
    meta: { requiresAuth: true }, // Ruta privada
  }
  ,
  {
    path: '/resgistro-italparner',
    name: 'resgistro-italparner',
    component: RegistroItalpartners,
    props: true,
    meta: { requiresAuth: false }, // Ruta privada
  }
  ,
  {
    path: '/giftcard/',
    name: 'giftcard',
    component: GiftCard,
    props: true,
    meta: { requiresAuth: true }, // Ruta privada
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Guard global para proteger rutas
router.beforeEach((to, from, next) => {
  const userStore = useUserStore(); // Obtén la instancia del store

  // Verifica si la ruta requiere autenticación
  if (to.meta.requiresAuth && !userStore.isAuthenticated) {
    // Si no está autenticado, redirige al login
    next({ name: 'registro' }); // Cambia 'Home' por la ruta de login si tienes una
  } else {
    // Permite el acceso a la ruta
    next();
  }
});

export default router;