<template>
    <div class="bg-red-800 py-1">
      <div class="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm text-white">
        <div>
          ¡Inicia sesión y empieza a ganar!
        </div>
        <div class="flex gap-4">
          <a href="https://api.whatsapp.com/send?phone=573186072850" class="hover:text-gray-600">Soporte</a>
          <span>|</span>
          <button @click="mostrarFormularioLogin" class="hover:text-gray-600"> {{ usuarioLogueado ? 'Cerrar sesión' : 'Iniciar sesión' }} </button>
          <span>|</span>

         </div>
      </div>
    </div>
  </template>
  <script setup lang="tsx">
import { ref, computed } from 'vue';
import { useUserStore } from '../store/user'; // Ajusta la ruta a tu store
import { useRouter } from 'vue-router';

const userStore = useUserStore();
const router = useRouter()

// Puedes usar un computed property para determinar si el usuario está logueado
const usuarioLogueado = computed(() => userStore.token !== null); 

const mostrarFormularioLogin = () => {
  // Emitir un evento para que el componente padre muestre/oculte el formulario
  emit('mostrarLogin'); 

  // Si el usuario está logueado, cerrar sesión
  if (usuarioLogueado.value) {
    userStore.clearToken();
    router.push('/')
  }else{
    router.push('/registro')
  }
};

const emit = defineEmits(['mostrarLogin']);
</script>