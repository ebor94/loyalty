<template>
    <section class="bg-red-800 py-8">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center justify-center gap-8">
          <h2 class="text-2xl md:text-3xl font-bold text-white text-center">
            ¿Qué esperas para 
            <br class="hidden md:block" />
            empezar a ganar?
          </h2>
          
          <img
            src="/src/assets/img/logo-italpuntos-blanco.png"
            alt="Italpuntos"
            class="h-16"
          />
          
          <button
           @click="handleRegistro"
           class="bg-white hover:bg-gray-100 text-red-800 px-8 py-3 rounded-lg font-semibold transition-colors">
            ¡Iniciar sesion!
          </button>
        </div>
      </div>
    </section>
   </template>
  <script lang="ts" setup>
  import { Ref } from 'vue';
  import router from '../router';
  const handleRegistro = () => {
    router.push('/registro');    
  };


  </script>