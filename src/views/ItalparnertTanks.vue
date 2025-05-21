<template>
  <div class="min-h-screen bg-gray-50 py-16 flex flex-col justify-center">
    <div class="max-w-3xl mx-auto px-4">
      <div class="text-center mb-8">
        <img 
          src="/src/assets/logo.png" 
          alt="Italpuntos" 
          class="h-16 mx-auto mb-8"
        />
        
        <div class="bg-white rounded-lg shadow-xl p-8">
          <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          
          <h1 class="text-3xl font-bold text-gray-900 mb-2">MUCHAS GRACIAS</h1>
          <h2 class="text-xl font-semibold text-red-600 mb-6">VAMOS A VALIDAR ESTA FACTURA</h2>
          
          <p class="text-gray-700 text-lg font-medium mb-8">
            Recuerda validar tus puntos en el próximo corte
          </p>
          
          <div class="bg-gray-50 p-6 rounded-lg mb-8 text-left">
            <h3 class="flex items-center text-lg font-bold text-gray-800 mb-4">
              <span class="mr-2">📅</span> CORTES DE ACUMULACIÓN DE PUNTOS EN ITALPUNTOS
            </h3>
            
            <p class="text-gray-600 mb-4">
              Para garantizar un proceso ordenado y transparente en la acumulación de puntos, el equipo de Cerámica Italia realizará cortes de acumulación en las siguientes fechas:
            </p>
            
            <p class="text-gray-800 font-semibold mb-4">
              <span class="mr-2">📌</span> Los días 15 y 30 de cada mes.
            </p>
            
            <h4 class="flex items-center font-bold text-gray-800 mb-2">
              <span class="mr-2">⏳</span> ¿Qué significa esto para ti?
            </h4>
            
            <ul class="list-disc list-inside mb-4 space-y-2 text-gray-600">
              <li>Todas las facturas aprobadas antes del corte (hasta 4 días antes) se verán reflejadas en tu cuenta en ese mismo corte.</li>
              <li>Si subes una factura dentro de los 4 días previos a un corte, deberás esperar al siguiente corte para visualizar los puntos en tu cuenta.</li>
            </ul>
            
            <h4 class="font-bold text-gray-800 mb-2">
              <span class="mr-2">📌</span> EJEMPLO:
            </h4>
            
            <p class="text-gray-600">
              Si subes una factura el <span class="font-semibold">día 13</span>, no verás reflejado estos puntos en el corte del 15 de ese mes, sino en el corte del 30. ¡Tranquilo! Todos tus puntos se sumarán, podrás verlos reflejados en tu perfil.
            </p>
          </div>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center mt-8">

            <button @click="cargarFacturas"
          class="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2">
          <span>Cargar Mas Facturas</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </button>

            
            <router-link 
              to="/" 
              class="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Volver al inicio
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const cargarFacturas = () => {  
  const url = 'https://synergy.ceramicaitalia.com:444/Web/docs/WflRequest_Web.aspx?BCAction=0&Type=752&FreeTextField_14=Italparnerts&ReturnTo=https://italpuntos.ceramicaitalia.com';  
  window.location.href = url;  
}
</script>