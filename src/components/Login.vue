//RegistrationForm.vue
<template>
    <div class="flex justify-center items-center min-h-screen bg-gray-50 py-12 px-4">
        <div class="max-w-4xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
            <div class="flex flex-col md:flex-row">
                <div class="w-full md:w-1/2 p-8">
                    <h2 class="text-2xl font-bold mb-2">Registrate ahora</h2>
                    <p class="mb-6">O inicia sesión <a href="#" class="text-blue-600 hover:underline">aquí</a></p>

                    <form @submit.prevent="handleSubmit" class="space-y-4">
                        <div class="flex space-x-2">
                            <input v-model="formData.cedula" type="text" placeholder="Numero de cedula"
                                class="flex-1 p-3 border rounded-md" />
                            <button @click.prevent="verificarCedula"
                                class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                                :disabled="isLoading">
                                {{ isLoading ? 'Verificando...' : 'Verificar' }}
                            </button>
                        </div>

                        <template v-if="showForm">
                            <input v-model="formData.telefono" type="tel" placeholder="Teléfono"
                                class="w-full p-3 border rounded-md" />
                            <input v-model="formData.token" type="text" placeholder="token"
                            class="w-full p-3 border rounded-md" />     

                        </template>
                    </form>
                </div>

                <div class="w-full md:w-1/2">
                    <img src="/src/assets/img/imagen-registro.jpg" alt="Registration"
                        class="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { cliente } from '../service/clientes'
import { Message } from '../service/mensajeria'

interface FormData {
    cedula: string   
    telefono: string
    token : string
}

const showForm = ref(false)
const isLoading = ref(false)
const isExistingUser = ref(false)

const formData = reactive<FormData>({
    cedula: '',    
    telefono: '',  
    token: '' 

})

const verificarCedula = async () => {
    if (!formData.cedula) return

    try {
        isLoading.value = true
        const infoCliente = await cliente.getCliente(formData.cedula)
        console.log(infoCliente.data)
        if (infoCliente.data[0].stcd1 == formData.cedula) {            
            formData.telefono = infoCliente.data[0].telf1           
            isExistingUser.value = true
            console.log(infoCliente.data)
            showForm.value = true
        } else {
            isLoading.value = false
            isExistingUser.value = false
        }


    } catch (error) {
        console.error('Error al verificar cédula:', error)
    } finally {
        isLoading.value = false
    }
}

const sendMessage = async () => {
        try {
            isLoading.value = true
           // const response = await Message.SendSms(formData.telefono, `Hola ${formData.nombre}, bienvenido a Italpuntos de ceramica italia`)
            return 
        } catch (error) {
           return (error)
        } finally {
            isLoading.value = false
        }
    }

const handleSubmit = async () => {

    try {
        const resultsms  = await sendMessage()           
        isLoading.value = true;
        let typeMessage =  false;
      //  resultsms.resultCode == "0" ? typeMessage = true  : typeMessage =  false
        const response = await Message.sendNotificationGoogle(formData, typeMessage);
        console.log(response)
        response.statusCode == 200 ? isLoading.value = false : isLoading.value = true
    } catch (error) {
        console.error('Error al registrar cliente:', error)

    } finally {
        isLoading.value = false
    }


}
</script>