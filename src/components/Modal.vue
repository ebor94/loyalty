<template>
    <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div class="bg-white rounded-lg shadow-lg p-6">
        <slot name="header">
          <h3 class="text-xl font-bold mb-4">{{ title }}</h3> 
        </slot>
  
        <p>{{ message }}</p> <slot /> 
  
        <div class="flex justify-end mt-4">
          <button @click="$emit('cancel')" class="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 mr-2">Cancelar</button>
          <button @click="$emit('confirm')" class="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white">Aceptar</button> 
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
  }
  
  const props = withDefaults(defineProps<Props>(), {
    title: 'Confirmación',
    message: '', 
  });
  
  const emit = defineEmits<{
    (e: 'confirm'): void;
    (e: 'cancel'): void;
  }>();
  </script>