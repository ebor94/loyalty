<template>
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold">
            ¡Estas son algunas de las <span class="text-red-500">experiencias</span> disponibles para ti!
          </h2>
        </div>
  
        <div v-if="loading" class="text-center">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
        </div>
  
        <div v-else-if="error" class="text-center text-red-500">
          {{ error }}
        </div>
  
        <div v-else class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <div v-for="store in stores" :key="store.id" 
               class="bg-white border rounded-lg p-6 flex items-center justify-center hover:shadow-lg transition-shadow">
            <img :src="store.image" :alt="store.name" class="max-h-16" />
          </div>
        </div>

      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { onMounted } from 'vue'
  import { storeToRefs } from 'pinia'
  import { useStoreStore } from '../store/brands'
  
  const storeStore = useStoreStore()
  const { stores, loading, error } = storeToRefs(storeStore)
  
  onMounted(() => {
    storeStore.fetchStores()
  })
  
  </script>

<script lang="ts">
export default {
  name: 'Brands'
}
</script>
  
  <style scoped>
  .grid {
    grid-template-rows: repeat(2, 1fr);
  }
  </style>