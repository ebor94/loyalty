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
              Si eres supermaestro o Especialista de Es Club y quieres registrarte, dirígete a tu sala de ventas más cercana  <a href="https://www.ceramicaitalia.com/nuestras-tiendas"><b>Aqui</b></a>
           
            </p>
            <p class="text-gray-600 mb-8">
              Si eres Asesor de nuestra red de aliados estratégicos haz click  <a href="/resgistro-italparner"><b>Aqui</b></a> y registrate.
            </p>
            <button @click="handleRegistro" class="bg-gray-900 hover:bg-red-800 text-white px-8 py-3 rounded-lg transition-colors">
              Iniciar Sesion!
            </button>

          
          </div>
        </div>
  
        <!-- Características -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div class="text-center">
            <div class="flex justify-center items-center mb-4">
              <img src="https://web.ceramicaitalia.com/temporada/italpuntos/registro.png">
            </div>
            <h3 class="text-xl font-bold mb-3">Regístrate</h3>
            <p class="text-gray-600">
              Si eres supermaestro o Especialista de Es Club y quieres registrarte, dirígete a nuestro punto de fábrica más cercano</p>
            <p class="text-gray-600">Si eres Asesor de nuestra red de aliados estratégicos haz click en registro Italpartner 
            </p>
          </div>
  
          <div class="text-center">
            <div class="flex justify-center items-center mb-4">
              <img src="https://web.ceramicaitalia.com/temporada/italpuntos/Acumula.png">
            </div>
            <h3 class="text-xl font-bold mb-3">Acumula</h3>
            <p class="text-gray-600">
              A partir de la aprobación de tu
              registro, todas las compras
              que realices en nuestros
              puntos de fábrica y/o canales
              digitales de Cerámica Italia te
              ayudarán a acumular puntos.
              <br> <br>
              Las reglas de acumulación
              dependen de tu plan*
              ¡Revísala con tu asesor de
              confianza!
            </p>
          </div>
  
          <div class="text-center">
            <div class="flex justify-center items-center mb-4">
              <img src="https://web.ceramicaitalia.com/temporada/italpuntos/redime.png">
            </div>
            <h3 class="text-xl font-bold mb-3">Redime</h3>
            <p class="text-gray-600">
              Luego de que tus puntos
              estén cargados en el sistema
              ¡Redimir es muy fácil!
              <br> <br>
              Ingresa a nuestro sitio web
              italpuntos, revisa el catálogo
              de beneficios que tenemos
              disponible para ti, selecciona
              el que más te guste y listo!
              <br> <br>
              ¡Recuerda, cada compra
              suma!
            </p>
           </div>
        </div>
      </div>
    </section>
  </template>
  
  <script lang="ts" setup>
    import router from '../router';
  const handleRegistro = () => {
    router.push('/registro');    
  };

  </script>