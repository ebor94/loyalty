<template>
  <div>
    <TopBar @mostrarLogin="toggleMostrarLogin" />
    <Header></Header>

    <main class="max-w-7xl mx-auto px-4 py-8">
      <!-- Métricas principales -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div class="bg-white rounded-lg shadow p-6">
          <h3 class="text-gray-500 text-sm mb-1">Puntos Disponibles</h3>
          <p class="text-2xl font-bold text-green-600">{{ stats.availableBalance < 0 ? 0 :
          stats.availableBalance }}</p>
        </div>
        <div class="bg-white rounded-lg shadow p-6">
          <h3 class="text-gray-500 text-sm mb-1">Total Acumulado</h3>
          <p class="text-2xl font-bold text-blue-600">{{ stats.totalEarned }}</p>
        </div>
        <div class="bg-white rounded-lg shadow p-6">
          <h3 class="text-gray-500 text-sm mb-1">Total Redimido</h3>
          <p class="text-2xl font-bold text-gray-600">{{ stats.totalRedeemed }}</p>
        </div>
      </div>

      <!-- Formulario de Redención -->
      <!--       <div class="bg-white rounded-lg shadow p-6 mb-8">
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
      </div> -->

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
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Solicitud</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Puntos</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Estado</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200" v-if="typeUser !== 'italpartner'">
              <tr v-for="sale in sales" :key="sale.consecutivo">
                <td class="px-6 py-4">{{ sale.fecharegistro }}</td>
                <td class="px-6 py-4">{{ sale.nombre }}</td>
                <td class="px-6 py-4">{{ sale.documento }}</td>

                <td class="px-6 py-4">{{ sale.margenaliado}}</td>
                <td class="px-6 py-4">
                  <span :class="getStatusClass(sale.aprobcte)">
                    {{ sale.aprobcte == "1" ? "Aprobado" : 'Pendiente' }}
                  </span>
                </td>
              </tr>
            </tbody>
            <tbody class="divide-y divide-gray-200" v-else> 
              <tr v-for="sale in salesItalparner" :key="sale.NumeroFlujo">
                <td class="px-6 py-4">{{ sale.FechaFlujo }}</td>
                <td class="px-6 py-4">{{ sale.Nombre }}</td>
                <td class="px-6 py-4">{{ sale.NumeroFlujo }}</td>

                <td class="px-6 py-4">{{ sale.PuntosObtenidos }}</td>
                <td class="px-6 py-4">
                  <div  v-if="sale.PuntosObtenidos === 0 && sale.Estado == 'Aprobado'" >
                    <span :class="getStatusClass('Rechazado')" >
                    <span>{{ getStatusIcon("Rechazado") }}</span>
                    {{ getStatusText("Rechazado") }}
                  </span>
                  </div>
                  <span :class="getStatusClass(sale.Estado)" v-else>
                    <span>{{ getStatusIcon(sale.Estado) }}</span>
                    {{ getStatusText(sale.Estado) }}
                  </span>
                  <div  v-if="sale.PuntosObtenidos === 0 && sale.Estado == 'Aprobado'" class="text-xs text-gray-500 px-2 py-2 ml-4">
                    <button @click="ObservacionFlujo(sale.Observacion)"
                      class="bg-red-600 text-white px-3 py-1.5 rounded-md hover:bg-red-700 transition-colors duration-200 flex items-center justify-center group"
                      title="Ver detalles">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                  </div>
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
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Fecha De Redencion</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Fecha De Vencimiento</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Marca Adquirida</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">codigo de Tarjeta</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Monto Solcitado</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Estado</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Descargar</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200" >
              <tr v-for="redemption in redemptions" :key="redemption.idGiftcard" >
                <td class="px-6 py-4">{{ formatDate(redemption.fechaRegistro) }}</td>
                <td class="px-6 py-4">{{ formatDate(redemption.fechaExpiracionTicket) }}</td>
                <td class="px-6 py-4">{{ redemption.empresa }}</td>
                <td class="px-6 py-4">{{ redemption.codTarjeta }}</td>
                <td class="px-6 py-4">{{ redemption.valor }}</td>
                <td class="px-6 py-4">
                  <span :class="getRedemptionStatusClass(redemption.status)">
                    {{ redemption.status == 'success' ? 'activo' : redemption.status }}
                  </span>
                </td>
                <td class="px-6 py-4">
                  <button @click="downloadCard(redemption.url)">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>

                  </button>
                </td>
              </tr>
              
            </tbody>
            
          </table>
        </div>
      </div>
      <div class="p-6" v-if="typeUser == 'italpartner'">       
        <button @click="cargarFacturas"
          class="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-all duration-300 flex items-center space-x-2">
          <span>Cargar Facturas</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </button>
      </div>
    </main>
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useUserStore } from '../store/user';
import axios from 'axios';
// @ts-ignore
import TopBar from '../components/TopBar.vue';
// @ts-ignore
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2';
const router = useRouter()
const UserStore = useUserStore();
const typeUser = ref(UserStore.typeUser)

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
  consecutivo: string
  fecharegistro: string
  nombre: string
  documento: string
  margenaliado: number
  aprobcte: '1' | '0' | ''
}

interface SaleItalparner {
  NumeroFlujo: number
  FechaFlujo: string
  Nombre: string
  Cedula: string
  PuntosObtenidos: number
  Estado: string
  Observacion: string
}

interface Redemption {
  idGiftcard: string
  fechaRegistro: string
  fechaExpiracionTicket: string
  codTarjeta: string
  nombreEmpresa: string
  empresa: string
  status: string
  valor: number
  url: string
}

const professional = ref<Professional>({
  id: 'PRO123',
  name: 'Carlos Rodriguez'
})

const stats = ref<Stats>({
  availableBalance: UserStore.puntosDisponibles,
  totalEarned: UserStore.puntosAcumulados,
  totalRedeemed: UserStore.PuntosRedimidos
})


const sales = ref<Sale[]>(UserStore.Acumulaciones)
const salesItalparner = ref<SaleItalparner[]>(UserStore.Acumulaciones)

const redemptions = ref<Redemption[]>()

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

const ObservacionFlujo = (observacion : string) => {
  Swal.fire({
        title: 'Tu solicitud ',
        text: `${observacion}`,
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
}

const cargarFacturas = () => {  
  localStorage.setItem('userCode', UserStore.userCode as string)
  localStorage.setItem('userName', UserStore.userName as string)  
  localStorage.setItem('email', UserStore.email as string)
  localStorage.setItem('telefono', UserStore.telefono as string)
  localStorage.setItem('ciudad', UserStore.ciudad as string)
  
  const url = `https://synergy.ceramicaitalia.com:444/Web/docs/WflRequest_Web.aspx?BCAction=0&Type=752&FreeTextField_14=Italparnerts&FreeTextField_01=${UserStore.userName}&FreeTextField_02=${UserStore.userCode}&FreeTextField_03=${UserStore.email}&FreeTextField_04=${UserStore.telefono}&FreeTextField_06=${UserStore.ciudad}&ReturnTo=https://italpuntos.ceramicaitalia.com/thanks-italparner`
   //`https://synergy.ceramicaitalia.com:444/Web/docs/WflRequest_Web.aspx?BCAction=0&Type=752&FreeTextField_14=Italparnerts&FreeIntField_02=${UserStore.userCode}&ReturnTo=https://italpuntos.ceramicaitalia.com/thanks-italparner` 
  //          'https://synergy.ceramicaitalia.com:444/Web/docs/WflRequest_Web.aspx?BCAction=0&Type=752&FreeTextField_14=Italparnerts&ReturnTo=https://italpuntos.ceramicaitalia.com/thanks-italparner';  
  window.location.href = url;  
}
const getStatusClass = (status: string): string => {
  const baseClasses = 'px-3 py-1.5 rounded-full text-xs font-semibold inline-flex items-center gap-1.5 shadow-sm'
  
  switch (status) {
    case '':
    case 'Pendiente':
      return `${baseClasses} bg-yellow-50 text-yellow-700 border border-yellow-200`
    case '1':
    case 'Aprobado':
      return `${baseClasses} bg-green-50 text-green-700 border border-green-200`
    case '0':
    case 'Rechazado':
      return `${baseClasses} bg-red-50 text-red-700 border border-red-200`
    default:
      return `${baseClasses} bg-gray-50 text-gray-600 border border-gray-200`
  }
}

const getStatusText = (status: string): string => {
  switch (status) {
    case '':
    case 'Pendiente':
      return 'Pendiente'
    case '1':
    case 'Aprobado':
      return 'Aprobado'
    case '0':
      return 'Rechazado'
    default:
      return status
  }
}

const getStatusIcon = (status: string): string => {
  switch (status) {
    case '':
    case 'Pendiente':
      return '⏳'
    case '1':
    case 'Aprobado':
      return '✅'
    case '0':
      return '❌'
    case 'Rechazado':
      return '❌'
    default:
      return '❓'
  }
}

const getRedemptionStatusClass = (status: Redemption['status']): string => {
  const baseClasses = 'px-2 py-1 rounded-full text-xs font-medium'
  switch (status) {
    case 'Pendiente':
      return `${baseClasses} bg-yellow-100 text-yellow-800`
    case 'Aprobada':
      return `${baseClasses} bg-blue-100 text-blue-800`
    case 'activo':
      return `${baseClasses} bg-green-100 text-green-800`
    case 'success':
      return `${baseClasses} bg-green-100 text-green-800`
    case 'Rechazada':
      return `${baseClasses} bg-red-100 text-red-800`
    default:
      return baseClasses
  }
}

const downloadCard = async (urlGif: string) => {

  try {
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
  } catch (error) {
    console.error('Error al descargar el archivo:', error);
    alert('Hubo un error al descargar el archivo. Inténtalo de nuevo.');
  }

}



function formatDate(dateString: string) {
  const date = new Date(dateString);
  const options = {
    year: 'numeric' as const,
    month: 'long' as const,
    day: 'numeric' as const,
    hour: '2-digit' as const,
    minute: '2-digit' as const,
    second: '2-digit' as const,
    timeZone: 'UTC' // Asegúrate de que la fecha se muestre en UTC
  };
  return new Intl.DateTimeFormat('es-ES', options).format(date);
}
const mostrarLogin = ref(false);
const mostrarRegistro = ref(false);
const toggleMostrarLogin = () => {
  mostrarLogin.value = !mostrarLogin.value;
  mostrarRegistro.value = false; // Ocultar registro si se muestra login

};

onMounted(async () => {
  UserStore.typeUser === 'italpartner' ? await UserStore.getDataUserItalparner(UserStore.userCode as string, "2") : await UserStore.getDataUser(UserStore.userCode as string, UserStore.bpCode as string)
  
 typeUser.value = UserStore.typeUser

  redemptions.value = UserStore.Redenciones

})
</script>