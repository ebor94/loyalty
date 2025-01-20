<template>
    <section class="relative py-16 bg-black">
      <div class="absolute inset-0">
        <img
          src="/src/assets/img/homept2.jpg"
          alt="Background"
          class="w-full h-full object-cover opacity-40"
        />
      </div>
      <div class="relative max-w-7xl mx-auto px-4 flex items-center">
        <!-- Texto a la izquierda -->
        <div class="w-1/3">
          <h2 class="text-5xl font-bold text-white leading-tight">
            Una experiencia
            <br />
            <span class="text-red-500">pensada para</span>
          </h2>
        </div>
  
        <!-- Iconos en línea -->
        <div class="w-2/3 flex justify-around">
          <div class="text-center">
            <div class="bg-white/10 rounded-full p-1 w-24 h-24 mb-4">
              <img src="/src/assets/img/aliados-estrategicos.png" alt="Tienda" class="w-full h-full" />
            </div>
           
          </div>
          <div class="text-center">
            <div class="bg-white/10 rounded-full p-1 w-24 h-24 mb-4">
              <img src="/src/assets/img/maestros-icono.png" alt="Maestro" class="w-full h-full" />
            </div>
           
          </div>
          <div class="text-center">
            <div class="bg-white/10 rounded-full p-1 w-24 h-24 mb-4">
              <img src="/src/assets/img/vendedores.png" alt="Vendedor" class="w-full h-full" />
            </div>
        </div>
          <div class="text-center">
            <div class="bg-white/10 rounded-full p-1 w-24 h-24 mb-4">
              <img src="/src/assets/img/arquitectos.png" alt="Arquitecto" class="w-full h-full" />
            </div>
          
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script lang="ts">
  export default {
    name: 'ExperienceSection'
  }
  </script>