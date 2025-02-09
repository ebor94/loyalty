<template>
  <div>
  <header class="bg-white py-4 shadow-sm">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex items-center justify-between">
        <div class="w-10"></div> <!-- Espaciador izquierdo -->
        
        <img 
          src="/src/assets/img/italpuntos-color.png" 
          alt="Italpuntos" 
          class="h-14"
        />
 
        <!-- Carrito -->
        <button class="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
     <!--      <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span class="absolute -top-1 -right-1 bg-yellow-400 text-xs w-5 h-5 flex items-center justify-center rounded-full">
            2
          </span> -->
        </button>
      </div>
    </div>
  </header>
  <Menu ></Menu>
</div>
 </template>
  
  <script  setup>
import Menu from './Menu.vue';



 </script>


