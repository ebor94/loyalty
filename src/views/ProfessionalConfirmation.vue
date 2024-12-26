// ProfessionalConfirmation.vue
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
          Confirmación de Venta
        </h1>

        <div class="space-y-6">
          <div class="bg-gray-50 p-6 rounded-lg">
            <h2 class="text-lg font-medium text-gray-900 mb-4">
              Detalles de la venta
            </h2>
            
            <div class="space-y-4">
              <div>
                <p class="text-sm text-gray-500">Cliente</p>
                <p class="text-gray-900">{{ sale.clientName }}</p>
              </div>
              
              <div>
                <p class="text-sm text-gray-500">Valor de la compra</p>
                <p class="text-gray-900 text-xl font-semibold">
                  {{ formatCurrency(sale.amount) }}
                </p>
              </div>
              
              <div>
                <p class="text-sm text-gray-500">Tu comisión</p>
                <p class="text-green-600 text-xl font-semibold">
                  {{ formatCurrency(sale.commission) }}
                </p>
              </div>
              
              <div class="pt-4 border-t">
                <p class="text-sm text-gray-500">Acumulado total</p>
                <p class="text-blue-600 text-2xl font-bold">
                  {{ formatCurrency(sale.totalAccumulated) }}
                </p>
              </div>
            </div>
          </div>

          <div class="flex justify-center mt-8">
            <button
              @click="confirmSale"
              class="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Confirmar venta
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue'

interface Sale {
  id: string
  clientName: string
  amount: number
  commission: number
  totalAccumulated: number
}

const sale = ref<Sale>({
  id: 'SALE123',
  clientName: 'Juan Pérez',
  amount: 1500000,
  commission: 75000,
  totalAccumulated: 450000
})

const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP'
  }).format(value)
}

const confirmSale = async () => {
  try {
    await axios.post('/api/confirm-sale', {
      saleId: sale.value.id
    })
    // Mostrar mensaje de éxito
  } catch (error) {
    console.error('Error al confirmar la venta:', error)
  }
}
</script>