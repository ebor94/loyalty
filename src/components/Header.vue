<template>
    <header class="bg-white py-4 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <!-- Logo -->
         <div class="w-40">
          <img src="/src/assets/img/italpuntos-color.png" alt="Italpuntos" class="full" />
        </div>
  
        <!-- Búsqueda -->
        <div class="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div class="flex">
            <input
              type="text"
              placeholder="ENTER KEYWORD..."
              class="flex-1 border  border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button class="bg-green-500 hover:bg-green-600 text-white px-6 rounded-r-lg">
              <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
  
        <!-- Carrito -->
        <div class="relative">
          <button class="p-2 hover:bg-gray-100 rounded-full">
            <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span class="absolute -top-1 -right-1 bg-yellow-400 text-xs w-5 h-5 flex items-center justify-center rounded-full">
              2
            </span>
          </button>
        </div>
      </div>
    </header>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  const searchType = ref('tipo1')

 </script>

<script lang="ts">
export default {
  name: 'Header'
}
</script>
