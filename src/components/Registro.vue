//RegistrationForm.vue
<template>
    <div class="flex justify-center items-center min-h-screen bg-gray-50 py-12 px-4">
        <div class="max-w-4xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
            <div class="flex flex-col md:flex-row">
                <div class="w-full md:w-1/2 p-8">
                    <h2 class="text-2xl font-bold mb-2">Registrate ahora</h2>
                    <p class="mb-6">Ya perteneces a italpuntos?....inicia sesión  <button @click="emitirMostrarLogin" href="#" class="text-blue-600 hover:underline">aquí</button></p>

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
                            <input v-model="formData.nombre" type="text" placeholder="Nombre"
                                class="w-full p-3 border rounded-md" />
                            <input v-model="formData.email" type="email" placeholder="Email"
                                class="w-full p-3 border rounded-md" />
                            <input v-model="formData.telefono" type="tel" placeholder="Teléfono"
                                class="w-full p-3 border rounded-md" />
                            <input v-model="formData.direccion" type="text" placeholder="Direccion"
                                class="w-full p-3 border rounded-md" />
                            <input v-model="formData.rol" type="text" placeholder="Rol/Cargo/Profesión"
                                class="w-full p-3 border rounded-md" />

                            <div class="flex items-center">
                                <input v-model="formData.acceptTerms" type="checkbox"
                                    class="h-4 w-4 text-red-600 border-gray-300 rounded" />
                                <span class="ml-2">Acepta  <a href="#" class="text-red-600 hover:underline">Terminos y condiciones De Italpuntos? </a></span>
                            </div>

                            <button type="submit"
                                class="w-full bg-red-600 text-white py-3 px-4 rounded-md font-bold hover:bg-red-700">
                                {{ isExistingUser ? 'ACTUALIZAR' : 'REGISTRARSE AHORA' }}
                            </button>
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

const emit = defineEmits<{
  (e: 'mostrarLogin'): void;
}>();

const emitirMostrarLogin = () => {
  emit('mostrarLogin');
};

interface FormData {
    cedula: string
    nombre: string
    email: string
    telefono: string
    rol: string
    acceptTerms: boolean
    direccion: string,
    fechaRegistro: Date
}

const showForm = ref(false)
const isLoading = ref(false)
const isExistingUser = ref(false)

const formData = reactive<FormData>({
    cedula: '',
    nombre: '',
    email: '',
    telefono: '',
    rol: '',
    acceptTerms: false,
    direccion: '',
    fechaRegistro: new Date()

})

const verificarCedula = async () => {
    if (!formData.cedula) return

    try {
        isLoading.value = true
        const infoCliente = await cliente.getCliente(formData.cedula)
        console.log(infoCliente.data)
        if (infoCliente.data[0].stcd1 == formData.cedula) {
            formData.nombre = infoCliente.data[0].mcod1;
            formData.email = infoCliente.data[0].psoo1;
            formData.telefono = infoCliente.data[0].telf1
            formData.direccion = infoCliente.data[0].stras
            formData.rol = infoCliente.data[0].anred
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
            const response = await Message.SendSms(formData.telefono, `Hola ${formData.nombre}, bienvenido a Italpuntos de ceramica italia`)
            return (response)
        } catch (error) {
           return (error)
        } finally {
            isLoading.value = false
        }
    }

const handleSubmit = async () => {
    if (!formData.acceptTerms) {
        alert('Debes aceptar los términos y condiciones')
        return
    }
    try {
        const resultsms  = await sendMessage()           
        isLoading.value = true;
        let typeMessage =  false;
        resultsms.resultCode == "0" ? typeMessage = true  : typeMessage =  false
        const response = await Message.sendNotificationGoogle(formData, typeMessage);
        console.log(response)
        response.statusCode == 200 ? isLoading.value = false : isLoading.value = true
        emitirMostrarLogin();

    } catch (error) {
        console.error('Error al registrar cliente:', error)

    } finally {
        isLoading.value = false
    }


}
</script>