<template>
    <div class="bg-gray-100 py-1">
      <div class="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
        <div>
          ¡Inicia sesión y empieza a ganar!
        </div>
        <div class="flex gap-4">
          <a href="#" class="hover:text-gray-600">Soporte</a>
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

const userStore = useUserStore();

// Puedes usar un computed property para determinar si el usuario está logueado
const usuarioLogueado = computed(() => userStore.token !== null); 

const mostrarFormularioLogin = () => {
  // Emitir un evento para que el componente padre muestre/oculte el formulario
  emit('mostrarLogin'); 

  // Si el usuario está logueado, cerrar sesión
  if (usuarioLogueado.value) {
    userStore.clearToken();
  }
};

const emit = defineEmits(['mostrarLogin']);
</script>