<template>
  <section class="relative py-8 md:py-16 bg-black">
    <div class="absolute inset-0">
      <img
        src="/src/assets/img/homept2.jpg"
        alt="Background"
        class="w-full h-full object-cover opacity-40"
      />
    </div>
    <div class="relative max-w-7xl mx-auto px-4">
      <div class="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        <!-- Texto -->
        <div class="w-full lg:w-1/3 text-center lg:text-left">
          <h2 class="text-3xl md:text-5xl font-bold text-white leading-tight">
            Una experiencia
            <br />
            <span class="text-red-500">pensada para</span>
          </h2>
        </div>

        <!-- Iconos -->
        <div class="w-full lg:w-2/3 grid grid-cols-2 lg:flex lg:justify-around gap-6">
          <div class="text-center">
            <div class="bg-white/10 rounded-full p-4 md:p-6 w-16 h-16 md:w-24 md:h-24 mx-auto mb-2 md:mb-4">
              <img src="/src/assets/img/aliados-estrategicos.png" alt="Tienda" class="w-full h-full" />
            </div>
            <h3 class="text-white text-sm md:text-lg">Aliados estratégicos</h3>
          </div>
          
          <div class="text-center">
            <div class="bg-white/10 rounded-full p-4 md:p-6 w-16 h-16 md:w-24 md:h-24 mx-auto mb-2 md:mb-4">
              <img src="/src/assets/img/maestros-icono.png" alt="Maestro" class="w-full h-full" />
            </div>
            <h3 class="text-white text-sm md:text-lg">Maestros</h3>
          </div>
          
          <div class="text-center">
            <div class="bg-white/10 rounded-full p-4 md:p-6 w-16 h-16 md:w-24 md:h-24 mx-auto mb-2 md:mb-4">
              <img src="/src/assets/img/vendedores.png" alt="Vendedor" class="w-full h-full" />
            </div>
            <h3 class="text-white text-sm md:text-lg">Vendedores</h3>
          </div>
          
          <div class="text-center">
            <div class="bg-white/10 rounded-full p-4 md:p-6 w-16 h-16 md:w-24 md:h-24 mx-auto mb-2 md:mb-4">
              <img src="/src/assets/img/arquitectos.png" alt="Arquitecto" class="w-full h-full" />
            </div>
            <h3 class="text-white text-sm md:text-lg">Arquitectos</h3>
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