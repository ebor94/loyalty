<template>
    <div v-if="isLoading" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"></div>
    </div>
  </template>
  
  <script setup>
  // Define las props que recibe el componente
  defineProps({
    isLoading: {
      type: Boolean,
      required: true,
    },
  });
  </script>
  
  <style scoped>
  /* Estilos adicionales si es necesario */
  </style>