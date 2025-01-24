// components/HeroSlider.vue
<template>
  <div class="relative h-[500px] bg-gray-900">
    <!-- Imagen de fondo con overlay -->
    <div class="absolute inset-0">
      <img 
       :src="pathSlider"
        alt="Hero background" 
        class="w-full h-full object-cover opacity-50"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/40"></div>
    </div>

    <!-- Contenido -->
    <div class="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
      <div class="max-w-2xl">
        <!-- Logo -->
        <img 
          src="/src/assets/img/logo-italpuntos-header.png" 
          alt="Italpuntos" 
          class="w-64 mb-8"
        />

        <!-- Textos -->
        <h1 class="text-4xl font-bold text-white mb-4">
          Descubre una nueva
          <br />
          forma de ganar mientras
          <br />
          construyes <span class="text-red-500">los sueños de</span>
          <br />
          <span class="text-red-500">tus clientes.</span>
        </h1>
      </div>
    </div>

    <!-- Indicadores de slide (opcional) -->
    <div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
      <button 
        v-for="i in 3" 
        :key="i"
        class="w-2 h-2 rounded-full bg-white/50 hover:bg-white/80"
        :class="{ 'bg-white': i === 1 }"
      ></button>
    </div>
  </div>
</template>

<script lang="ts" setup>

interface Props {
  pathSlider: string
}

withDefaults(defineProps<Props>(), {
  pathSlider: ''
})

</script>


<style scoped>
/* Estilos adicionales si son necesarios */
</style>