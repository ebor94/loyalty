// ProfessionalDashboard.vue
<template>
  <div class="min-h-screen bg-gray-50">
    <nav class="bg-white shadow-md">
      <div class="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <img src="../assets/logo.png" alt="Cerámica Italia" class="h-12" />
        <div class="flex items-center gap-4">
          <span class="text-gray-600">{{ professional.name }}</span>
          <button class="text-gray-500 hover:text-gray-700">
            <span class="material-icons text-md">person</span>
          </button>
        </div>
      </div>
    </nav>

    <main class="max-w-7xl mx-auto px-4 py-8">
      <!-- Métricas principales -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div class="bg-white rounded-lg shadow p-6">
          <h3 class="text-gray-500 text-sm mb-1">Saldo Disponible</h3>
          <p class="text-2xl font-bold text-green-600">{{ formatCurrency(stats.availableBalance) }}</p>
        </div>
        <div class="bg-white rounded-lg shadow p-6">
          <h3 class="text-gray-500 text-sm mb-1">Total Acumulado</h3>
          <p class="text-2xl font-bold text-blue-600">{{ formatCurrency(stats.totalEarned) }}</p>
        </div>
        <div class="bg-white rounded-lg shadow p-6">
          <h3 class="text-gray-500 text-sm mb-1">Total Redimido</h3>
          <p class="text-2xl font-bold text-gray-600">{{ formatCurrency(stats.totalRedeemed) }}</p>
        </div>
      </div>

      <!-- Formulario de Redención -->
      <div class="bg-white rounded-lg shadow p-6 mb-8">
        <h2 class="text-xl font-semibold mb-6">Solicitar Redención</h2>
        <div class="flex flex-col md:flex-row gap-4 items-end">
          <div class="flex-1">
            <label class="block text-sm text-gray-600 mb-2">Monto a redimir</label>
            <input 
              v-model="redemptionAmount"
              type="number"
              class="w-full p-2 border rounded-lg"
              :max="stats.availableBalance"
            />
          </div>
          <button 
            @click="requestRedemption"
            class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            :disabled="!isValidRedemption"
          >
            Solicitar
          </button>
        </div>
      </div>

      <!-- Historial de Ventas -->
      <div class="bg-white rounded-lg shadow overflow-hidden">
        <div class="p-6 border-b">
          <h2 class="text-xl font-semibold">Historial de Ventas</h2>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Fecha</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Cliente</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Venta</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Comisión</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Estado</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr v-for="sale in sales" :key="sale.id">
                <td class="px-6 py-4">{{ formatDate(sale.date) }}</td>
                <td class="px-6 py-4">{{ sale.clientName }}</td>
                <td class="px-6 py-4">{{ formatCurrency(sale.amount) }}</td>
                <td class="px-6 py-4">{{ formatCurrency(sale.commission) }}</td>
                <td class="px-6 py-4">
                  <span :class="getStatusClass(sale.status)">
                    {{ sale.status }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Historial de Redenciones -->
      <div class="bg-white rounded-lg shadow overflow-hidden mt-8">
        <div class="p-6 border-b">
          <h2 class="text-xl font-semibold">Historial de Redenciones</h2>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Fecha</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Monto</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Estado</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr v-for="redemption in redemptions" :key="redemption.id">
                <td class="px-6 py-4">{{ formatDate(redemption.date) }}</td>
                <td class="px-6 py-4">{{ formatCurrency(redemption.amount) }}</td>
                <td class="px-6 py-4">
                  <span :class="getRedemptionStatusClass(redemption.status)">
                    {{ redemption.status }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import axios from 'axios';

interface Professional {
  id: string
  name: string
}

interface Stats {
  availableBalance: number
  totalEarned: number
  totalRedeemed: number
}

interface Sale {
  id: string
  date: Date
  clientName: string
  amount: number
  commission: number
  status: 'Pendiente' | 'Confirmada' | 'Rechazada'
}

interface Redemption {
  id: string
  date: Date
  amount: number
  status: 'Pendiente' | 'Aprobada' | 'Rechazada' | 'Pagada'
}

const professional = ref<Professional>({
  id: 'PRO123',
  name: 'Carlos Rodriguez'
})

const stats = ref<Stats>({
  availableBalance: 2500000,
  totalEarned: 3500000,
  totalRedeemed: 1000000
})

const sales = ref<Sale[]>([
  {
    id: 'S1',
    date: new Date(),
    clientName: 'Juan Pérez',
    amount: 1500000,
    commission: 75000,
    status: 'Confirmada'
  }
])

const redemptions = ref<Redemption[]>([
  {
    id: 'R1',
    date: new Date(),
    amount: 1000000,
    status: 'Pagada'
  }
])

const redemptionAmount = ref<number>(0)

const isValidRedemption = computed(() => {
  return redemptionAmount.value > 0 && redemptionAmount.value <= stats.value.availableBalance
})

const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP'
  }).format(value)
}

const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('es-CO').format(date)
}

const getStatusClass = (status: Sale['status']): string => {
  const baseClasses = 'px-2 py-1 rounded-full text-xs font-medium'
  switch (status) {
    case 'Pendiente':
      return `${baseClasses} bg-yellow-100 text-yellow-800`
    case 'Confirmada':
      return `${baseClasses} bg-green-100 text-green-800`
    case 'Rechazada':
      return `${baseClasses} bg-red-100 text-red-800`
    default:
      return baseClasses
  }
}

const getRedemptionStatusClass = (status: Redemption['status']): string => {
  const baseClasses = 'px-2 py-1 rounded-full text-xs font-medium'
  switch (status) {
    case 'Pendiente':
      return `${baseClasses} bg-yellow-100 text-yellow-800`
    case 'Aprobada':
      return `${baseClasses} bg-blue-100 text-blue-800`
    case 'Pagada':
      return `${baseClasses} bg-green-100 text-green-800`
    case 'Rechazada':
      return `${baseClasses} bg-red-100 text-red-800`
    default:
      return baseClasses
  }
}

const requestRedemption = async () => {
  if (!isValidRedemption.value) return
  
  try {
    // Aquí iría la llamada a la API
    await axios.post('/api/redemptions', {
      amount: redemptionAmount.value
    })
    // Actualizar el estado
    redemptionAmount.value = 0
  } catch (error) {
    console.error('Error al solicitar redención:', error)
  }
}
</script>