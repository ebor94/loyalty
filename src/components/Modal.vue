<template>
  <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div class="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full mx-4">
      <slot name="header">
        <h3 class="text-2xl font-bold mb-6 text-center">{{ title }}</h3> 
      </slot>

      <!-- Imagen opcional -->
      <div v-if="image" class="mb-6 flex justify-center">
        <img 
          :src="image" 
          :alt="imageAlt || 'Modal image'" 
          class="w-auto h-80 object-cover rounded"
        />
      </div>

      <p class="text-center mb-6 text-gray-700">{{ message }}</p> <slot /> 

      <div class="flex justify-center space-x-4 mt-6">
        <button @click="$emit('cancel')" class="px-6 py-3 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium min-w-[100px]">Cancelar</button>
        <button @click="$emit('confirm')" class="px-6 py-3 rounded-lg bg-red-500 hover:bg-red-600 text-white font-medium min-w-[100px]">Aceptar</button> 
      </div>
    </div>
    
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, withDefaults } from 'vue';

interface Props {
  showModal: boolean;
  title?: string;
  message?: string;
  image?: string;
  imageAlt?: string;
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Confirmación',
  message: '',
  image: '',
  imageAlt: '',
});

const emit = defineEmits<{
  (e: 'confirm'): void;
  (e: 'cancel'): void;
}>();
</script>