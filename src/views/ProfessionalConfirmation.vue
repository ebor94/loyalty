
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
            <p class="text-gray-600 mb-2">{{ professionalTitle }}</p>
            <h2 class="text-xl font-semibold text-gray-800 mb-4">
              {{ professionalName }}
            </h2>            
            <p class="text-gray-600">{{ professionalId }}</p>
          </div>
          <div v-if="estadoAprobacion" class="flex flex-col sm:flex-row gap-4 justify-center mt-8">  
              <span class="text-green-600">✓ Confirmado</span>  
            </div>

          <div v-else class="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <p class="text-gray-700 text-center">
            ¿Confirmas que conoces a este cliente, quien te refirio en italpuntos?
          </p>
         
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
import { computed, onMounted, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { cliente } from '../service/clientes';

interface Professional {
  id: string
  name: string
  title: string
}

const professional = ref<Professional>({
  id: '',
  name: '',
  title: ''
})

interface Referido {
  consecutivo: string;
  documento: string;
  destinatario: string;
}

const referido = ref<Referido>({
  consecutivo: '',
  documento: '',
  destinatario: ''
})
const cedulaCliente  = ref<String>('');
const numeroPedido = ref<String>('');
const estadoAprobacion = ref<boolean>(false)

const route = useRoute()

const professionalName = computed(()  =>   professional.value.name  )
const professionalTitle = computed(() =>   professional.value.title )
const professionalId = computed(()    =>   professional.value.id    )

const confirmProfessional = async () => {
  try {
    const aprobacionCte = await cliente.getDataloyalty(cedulaCliente.value as string, numeroPedido.value as string, '02', '',0)
    console.log(aprobacionCte)
    //referido.value = aprobacionCte[0];
    if(aprobacionCte[0].aprobgte == '1'){
     
      const puntos  = await cliente.registraAprobacion( aprobacionCte[0].consecutivo as string ,aprobacionCte[0].documento as string,  aprobacionCte[0].destinatario as string);
      if(puntos.quote.length){        
        //console.log(puntos.quote.length);
        referido.value = puntos.quote[0]
        estadoAprobacion.value = true;
      }
     
      }
    // Redireccionar o mostrar mensaje de éxito
  } catch (error) {
    alert('Error al confirmar al cliente')
  }
}

const rejectProfessional = () => {
  // Lógica para manejar el rechazo
}

onMounted(async()=>{
 // console.log(route.params)
cedulaCliente.value = route.params.ced as string
numeroPedido.value = route.params.ped as string


try {
 const data = await cliente.getDataloyalty(numeroPedido.value  as string, numeroPedido.value as string, '99', '',0)
 // console.log(data)
  referido.value = data[0];

  if(data[0].identificacion === cedulaCliente.value){
     const  infocte = await cliente.getCliente(data[0].identificacion);
    //console.log(infoProfessional.data)

    professional.value.name  = infocte.data[0].name1
    professional.value.title = infocte.data[0].anred
    professional.value.id    = infocte.data[0].kunnr

    if(data[0].aprobgte == '1'){
      estadoAprobacion.value = true;
    }

  }
} catch (error) {
  console.log(error)
}finally{

  try {
    
    const puntos  = await cliente.registraAprobacion( referido.value.consecutivo as string ,referido.value.documento as string,  referido.value.destinatario as string);
    const aperturaCte = await cliente.getDataloyalty(cedulaCliente.value as string, numeroPedido.value as string, '05', '',puntos.comision)
    //console.log()
    //referido.value = aperturaCte[0];
  } catch (error) {
    console.log(error)
  }
}

})
</script>