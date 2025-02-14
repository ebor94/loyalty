<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
       <!-- Gift Card Container -->
       <div ref="giftCardRef" class="w-96 h-56 bg-white rounded-xl shadow-2xl overflow-hidden relative">
           <!-- Diseño superior decorativo -->
           <div class="absolute top-0 right-0 w-32 h-32 bg-red-200 rounded-bl-full opacity-50"></div>
           <div class="absolute top-0 right-0 w-24 h-24 bg-red-300 rounded-bl-full opacity-50"></div>

           <!-- Contenido principal -->
           <div class="p-6 relative">
               <div class="flex justify-between items-start">
                   <div>
                       <h2 class="text-2xl font-bold text-gray-800">{{ giftCardData.nombreEmpresa }}</h2>
                       <p class="text-sm text-gray-600 mt-1">Gift Card</p>
                   </div>
                   <div class="text-right">
                       <p class="text-xl font-bold text-red-600">${{ giftCardData.valor }}</p>
                   </div>
               </div>

               <!-- Código de la tarjeta -->
               <div class="mt-6">
                   <p class="text-sm text-gray-500">Código:</p>
                   <p class="font-mono text-lg font-semibold">{{ giftCardData.codigo }}</p>
               </div>

               <!-- Información adicional -->
               <div class="mt-4 flex justify-between text-sm">
                   <div>
                       <p class="text-gray-500">Clave:</p>
                       <p class="font-semibold">{{ giftCardData.clave }}</p>
                   </div>
                   <div class="text-right">
                       <p class="text-gray-500">Válido hasta:</p>
                       <p class="font-semibold">{{ formatDate(giftCardData.fechaExpiracionTicket) }}</p>
                   </div>
               </div>
           </div>                    
       </div>
       
       <!-- Botón de descarga (ahora debajo de la tarjeta) -->
       <button @click="downloadCard(giftCardData.url)"
           class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg flex items-center gap-2 mt-4">
           <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
               stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                   d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
           </svg>
           Descargar Gift Card
       </button>
       <Loader :isLoading="isLoading" />
   </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useStoreGiftcard } from '../store/gifCard';

import router from '../router';
//@ts-ignore
import Loader from './Loader.vue';

const isLoading = ref(false);
const giftCardData = useStoreGiftcard();
const giftCardRef = ref<HTMLElement | null>(null);

const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString();
};

const downloadCard = async(urlGif : string)=>{
        if (!giftCardRef.value) return;  
try {
    isLoading.value = true; // Mostrar el loader
      // Hacer una solicitud GET a la URL
      const response = await fetch(urlGif);

      if (!response.ok) {
        throw new Error('Error al descargar el archivo');
      }

      // Convertir la respuesta a un Blob
      const blob = await response.blob();

      // Crear un enlace temporal para la descarga
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'GifCard.pdf'; // Nombre del archivo descargado
      document.body.appendChild(a);
      a.click();

      // Limpiar y liberar el objeto URL
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      router.push('/store')
    } catch (error) {
      console.error('Error al descargar el archivo:', error);
      alert('Hubo un error al descargar el archivo. Inténtalo de nuevo.');
    }finally{
        isLoading.value = false;
    }

}    

</script>