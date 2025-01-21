<template>
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4">
        <!-- Header y Contenido Principal -->
        <div class="flex flex-col lg:flex-row gap-12">
          <div class="lg:w-1/2">
            <img src="/src/assets/img/home2.jpg" alt="About Us" class="rounded-lg shadow-xl w-full h-[400px] object-cover" />
          </div>
          <div class="lg:w-1/2">
            <!-- <span class="text-yellow-500 font-medium mb-2 block">WHO WE ARE</span> -->
            <h2 class="text-4xl font-bold mb-6">Descripción del programa</h2>
            <p class="text-gray-600 mb-4">
              Italpuntos es la plataforma donde podrás acumular y cumplir tus
              sueños personales mientras ayudas a tus clientes Cerámica Italia a
              construir el espacio de tus sueños.
            </p>
            <p class="text-gray-600 mb-8">
              Aquí cada venta suma y éstas te ayudarán a crear experiencias
              memorables para que las puedas disfrutar con tu familia.
            </p>
            <p class="text-gray-600 mb-8">
              Regístrate y empieza a acumular tus puntos hoy mismo
            </p>
            <button class="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg transition-colors">
              CONTACT US
            </button>
          </div>
        </div>
  
        <!-- Características -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div class="text-center">
            <div class="text-yellow-500 mb-4">
              <svg class="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2zM9 16H7v-2h2v2zm0-4H7v-2h2v2zm0-4H7V6h2v2zm8 8h-6v-2h6v2zm0-4h-6v-2h6v2zm0-4h-6V6h6v2z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">Regístrate</h3>
            <p class="text-gray-600">
              ¿Perteneces a Es Club,
              Supermaestros O Italparther
              de Cerámica Italia?
              ¡Regístrate ahora y haz que
              cada una de tus compras
              sume para crear tus
              experiencias memorables!
            </p>
          </div>
  
          <div class="text-center">
            <div class="text-yellow-500 mb-4">
              <svg class="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.88-11.71L10 14.17l-1.88-1.88a.996.996 0 10-1.41 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7a.996.996 0 10-1.41-1.41z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">Acumula</h3>
            <p class="text-gray-600">
              A partir de la aprobación de tu
              registro, todas las compras
              que realices en nuestros
              puntos de fábrica y/o canales
              digitales de Cerámica Italia te
              ayudarán a acumular puntos.
              Las reglas de acumulación
              dependen de tu plan*
              ¡Revísala con tu asesor de
              confianza!
            </p>
          </div>
  
          <div class="text-center">
            <div class="text-yellow-500 mb-4">
              <svg class="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">Redime</h3>
            <p class="text-gray-600">
              Luego de que tus puntos
              estén cargados en el sistema
              ¡Redimir es muy fácil!
              Ingresa a nuestro sitio web
              italpuntos, revisa el catálogo
              de beneficios que tenemos
              disponible para ti, selecciona
              el que más te guste y listo!
              ¡Recuerda, cada compra
              suma!
            </p>
           </div>
        </div>
      </div>
    </section>
  </template>
  
  <script lang="ts">
  export default {
    name: 'AboutSection'
  }
  </script>