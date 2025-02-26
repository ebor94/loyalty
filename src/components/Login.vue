//RegistrationForm.vue
<template>
    <div class="flex justify-center items-center min-h-screen bg-gray-50 py-12 px-4">
        <div class="max-w-4xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
            <div class="flex flex-col md:flex-row">
                <div class="w-full md:w-1/2 p-8">
                    <h2 class="text-2xl font-bold mb-2">inicia sesión </h2>
                    <p class="mb-6">O Registrate ahora <button @click="emitirMostrarRegistro"
                            class="text-blue-600 hover:underline">aquí</button></p>

                    <form class="space-y-4">
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
                            <label>Ingresa el token enviado a :</label>
                            <input v-model="formData.telefono" type="tel" placeholder="Teléfono" disabled
                                class="w-full p-3 border rounded-md" />
                            <input v-model="formData.tokenIn" type="text" placeholder="token"
                                class="w-full p-3 border rounded-md" />
                                <button type="button" @click="verificarToken"
                                    class="w-full bg-red-600 text-white py-3 px-4 rounded-md font-bold hover:bg-red-700">
                                    Iniciar Sesion
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
        <Modal v-if="showModal" :showModal="showModal" @confirm="confirmar2" @cancel="cancelar2" :title="titleModal"
            :message="messageModal"></Modal>
            <Loader :isLoading="isLoading" />
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { cliente } from '../service/clientes'
import { Message } from '../service/mensajeria'
import { useUserStore } from '../store/user'
 import { useRouter } from 'vue-router'
// @ts-ignore
import Modal from './Modal.vue'
// @ts-ignore
import Loader from './Loader.vue'
const router = useRouter()
const showModal = ref(false);
const messageModal = ref('mensaje');
const titleModal = ref('titulo');
const UserStore = useUserStore();

interface FormData {
    cedula: string
    telefono: string
    token: string
    telIncryp: string
    tokenIn : string
}

const showForm = ref(false)
const isLoading = ref(false)
const isExistingUser = ref(false)

const formData = reactive<FormData>({
    cedula: '',
    telefono: '',
    token: '',
    telIncryp: '',
    tokenIn: ''

})

const confirmar2 = () => {
    showModal.value = false;
    console.log('confirmar2')
}
const cancelar2 = () => {
    showModal.value = false;
    console.log('cancelar2')
}
const generateToken = () => {
    let token = "";
    for (let i = 0; i < 5; i++) {
        token += Math.floor(Math.random() * 10);
    }
    return token;
}

const verificarToken = async () =>{
    if (!formData.tokenIn) return
    if (formData.tokenIn.length < 5) {
        showModal.value = true;
        messageModal.value = 'El token debe tener 5 digitos';
        titleModal.value = 'Error';
        return
    }
    if (formData.token ==formData.tokenIn) {            
        const sessionToken = await cliente.getTokenSession(UserStore.userCode,UserStore.bpCode);
        UserStore.setToken(formData.token,  sessionToken.tokenSesion)
       router.push('/store')
    } else {
        showModal.value = true;
        messageModal.value = 'El token es incorrecto';
        titleModal.value = 'Error';
    }
}

const sendMessage = async (numero: string, mensaje: string) => {
    try {
        isLoading.value = true
        const response = await Message.SendSms(numero, mensaje);
        return response
    } catch (error) {
        return (error)
    } finally {
        isLoading.value = false
    }
}
const verificarCedula = async () => {
    if (!formData.cedula) return

    try {
        isLoading.value = true
        const infoCliente = await cliente.getCliente(formData.cedula);      
        if (infoCliente.data == null) {
            showModal.value = true;
            messageModal.value = 'El número de cédula no existe en la base de datos';
            titleModal.value = 'Error';
            formData.cedula = '';
            return
        }
    
        if (infoCliente.data[0].stcd1 == formData.cedula || infoCliente.data[0].stcd2 == formData.cedula) {
            formData.telIncryp = infoCliente.data[0].telf1;
            formData.token = generateToken();
            UserStore.saveUser(infoCliente.data[0].name1, infoCliente.data[0].stcd1 , infoCliente.data[0].kunnr );
           
            try {
                const resultsms = await sendMessage(formData.telIncryp, `ingresa este token  ${formData.token}, para el inicio de sesión Italpuntos`);
                formData.telefono = `${formData.telIncryp.substring(0, 3)}.......${formData.telIncryp.substring(formData.telIncryp.length - 3)}`
                isLoading.value = true;
                if (resultsms.resultCode == "0") {
                    showForm.value = true
                } else {
                    showModal.value = true
                    showForm.value = false
                    messageModal.value = 'Error al enviar el SMS Verifica tu numero';
                    titleModal.value = 'Error';
                }
            } catch (error) {
                showModal.value = true;
                messageModal.value = 'Error al enviar el SMS Verifica tu numero';
                titleModal.value = 'Error';
            }

        } else {
            isLoading.value = false
            isExistingUser.value = false
            showModal.value = true;
            messageModal.value = 'El número de cédula no existe en nuestra base de datos';
            titleModal.value = 'Error';
            formData.cedula = '';
        }
    } catch (error) {
        showModal.value = true;
        messageModal.value = 'Error al verificar cédula';
        titleModal.value = 'Error';

    } finally {
        isLoading.value = false
    }
}

const emit = defineEmits<{
    (e: 'mostrarRegistro'): void;
}>();

const emitirMostrarRegistro = () => {
    emit('mostrarRegistro');
};


</script>