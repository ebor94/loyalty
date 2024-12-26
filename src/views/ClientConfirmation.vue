// ClientConfirmation.vue
<template>
  <div class="min-h-screen bg-gray-50">
    <nav class="bg-white shadow-md">
      <div class="max-w-7xl mx-auto px-4 py-3">
        <img src="../assets/logo.png" alt="Cerámica Italia" class="h-12" />
      </div>
    </nav>

    <main class="max-w-2xl mx-auto px-4 py-16">
      <div class="bg-white rounded-lg shadow-xl p-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-8 text-center">
          Confirma tu Profesional
        </h1>

        <div class="space-y-6">
          <div class="bg-gray-50 p-6 rounded-lg">
            <h2 class="text-xl font-semibold text-gray-800 mb-4">
              {{ professionalName }}
            </h2>
            <p class="text-gray-600 mb-2">{{ professionalTitle }}</p>
            <p class="text-gray-600">{{ professionalId }}</p>
          </div>

          <p class="text-gray-700 text-center">
            ¿Confirmas que este profesional te recomendó nuestros productos?
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <button
              @click="confirmProfessional"
              class="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Sí, confirmar
            </button>
            <button
              @click="rejectProfessional"
              class="bg-gray-200 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-300 transition-colors"
            >
              No, cancelar
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { computed, ref } from 'vue'

interface Professional {
  id: string
  name: string
  title: string
}

const professional = ref<Professional>({
  id: 'ARQ123456',
  name: 'Carlos Rodriguez',
  title: 'Arquitecto'
})

const professionalName = computed(() => professional.value.name)
const professionalTitle = computed(() => professional.value.title)
const professionalId = computed(() => professional.value.id)

const confirmProfessional = async () => {
  try {
    // Aquí iría la lógica para registrar la confirmación
    await axios.post('/api/confirm-professional', {
      professionalId: professional.value.id
    })
    // Redireccionar o mostrar mensaje de éxito
  } catch (error) {
    console.error('Error al confirmar profesional:', error)
  }
}

const rejectProfessional = () => {
  // Lógica para manejar el rechazo
}
</script>