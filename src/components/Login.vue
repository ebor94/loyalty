//RegistrationForm.vue
<template>
    <div class="flex justify-center items-center min-h-screen bg-gray-50 py-12 px-4">
        <div class="max-w-4xl w-full bg-white rounded-lg shadow-lg overflow-hidden">
            <div class="flex flex-col md:flex-row">
                <div class="w-full md:w-1/2 p-8">
                    <h2 class="text-2xl font-bold mb-2">Iniciar Sesión</h2>
                    <!-- <p class="mb-6">O Registrate ahora <button @click="emitirMostrarRegistro"
                            class="text-blue-600 hover:underline">aquí</button></p> -->

                    <form class="space-y-4">
                        <div class="flex space-x-3">
                            <input v-model="formData.cedula" type="text" placeholder="Numero de cedula"
                                class="flex-1 p-3 border rounded-md" />
                        </div>
                        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <label
                                class="border rounded-md p-3 flex flex-col items-center hover:border-[#D51B19] cursor-pointer transition-colors">
                                <!-- Radio button centrado en la parte superior -->
                                <div class="mb-2">
                                    <input v-model="formData.checkItalParner" type="radio" value="italpartner"
                                        name="tipo"
                                        class="h-5 w-5 text-[#D51B19] border-gray-300 rounded-full focus:ring-[#D51B19] " />
                                </div>

                                <!-- Texto centrado debajo del radio -->
                                <div class="text-center relative">
                                    <span class="text-gray-700 font-medium text-sm group">
                                        Soy Italpartner
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            class="h-4 w-4 inline-block ml-1 text-gray-400" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
                                        </svg>
                                        <!-- Tooltip -->
                                        <div
                                            class="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-48 p-2 bg-gray-800 text-white text-xs rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                                            Un Italpartner es un ejecutivo comercial que pertenece a nuestra red de
                                            aliados estratégicos.
                                            <div
                                                class="absolute bottom-0 left-1/2 -translate-x-1/2 transform translate-y-1/2 rotate-45 w-2 h-2 bg-gray-800">
                                            </div>
                                        </div>
                                    </span>
                                </div>
                            </label>
                            <label
                                class="border rounded-md p-3 flex flex-col items-center hover:border-[#D51B19] cursor-pointer">
                                <!-- Radio button centrado en la parte superior -->
                                <div class="mb-2">
                                    <input v-model="formData.checkItalParner" type="radio" value="SuperMaestro"
                                        name="tipo"
                                        class="h-5 w-5 text-[#D51B19] border-gray-300 rounded-full focus:ring-[#D51B19]" />
                                </div>

                                <!-- Texto centrado debajo del radio -->
                                <div class="text-center relative">
                                    <span class="text-gray-700 font-medium text-sm group">
                                        Soy Super Maestro
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            class="h-4 w-4 inline-block ml-1 text-gray-400" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
                                        </svg>

                                        <!-- Tooltip -->
                                        <div
                                            class="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-48 p-2 bg-gray-800 text-white text-xs rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-10">
                                            Un Super maestro, es un instalador de ceramica que pertenece a nuestra red
                                            de maestros especializadosq
                                            <div
                                                class="absolute top-0 left-1/2 -translate-x-1/2 transform -translate-y-1/2 rotate-45 w-2 h-2 bg-gray-800">
                                            </div>
                                        </div>
                                    </span>
                                </div>
                            </label>
                            <label
                                class="border rounded-md p-3 flex flex-col items-center hover:border-[#D51B19] cursor-pointer">
                                <!-- Radio button centrado en la parte superior -->
                                <div class="mb-2">
                                    <input v-model="formData.checkItalParner" type="radio" value="Esclub" name="tipo"
                                        class="h-5 w-5 text-[#D51B19] border-gray-300 rounded-full focus:ring-[#D51B19]" />
                                </div>

                                <!-- Texto centrado debajo del radio -->
                                <div class="text-center relative">
                                    <span class="text-gray-700 font-medium text-sm group">
                                        Soy Esclub
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            class="h-4 w-4 inline-block ml-1 text-gray-400" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
                                        </svg>

                                        <!-- Tooltip -->
                                        <div
                                            class="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-48 p-2 bg-gray-800 text-white text-xs rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-10">
                                            Esclub es un programa de fidelización de Italpuntos, para profesionales de
                                            la construcción (ing, arq).
                                            <div
                                                class="absolute top-0 left-1/2 -translate-x-1/2 transform -translate-y-1/2 rotate-45 w-2 h-2 bg-gray-800">
                                            </div>
                                        </div>
                                    </span>
                                </div>
                            </label>
                        </div>

                        <div class="flex space-x-3">
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
                            <!-- Botones de reenvío -->
                            <div class="flex flex-col space-y-2 mb-4">
                                <button @click="reenviarTokenSMS" :disabled="isLoading || smsCountdown > 0"
                                    class="text-blue-600 hover:text-blue-800 text-sm">
                                    {{ smsCountdown > 0 ? `Reenviar token por SMS (${smsCountdown}` : 'Reenviar token por SMS' }}
                                </button>

                                <button @click="enviarTokenEmail" :disabled="isLoading || emailCountdown > 0"
                                    class="text-blue-600 hover:text-blue-800 text-sm">
                                    {{ emailCountdown > 0 ? `Enviar token por email (${emailCountdown}s)` : 'No recibí SMS, enviar por email' }}
                                </button>
                            </div>

                            <div class="flex items-center">
                                <input v-model="formData.acceptTerms" type="checkbox" checked
                                    class="h-4 w-4 text-red-600 border-gray-300 rounded" />
                                <span class="ml-2">Acepta <a href="#" class="text-red-600 hover:underline">Terminos y
                                        condiciones De Italpuntos? </a></span>
                            </div>
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
import { cliente, italparner } from '../service/clientes'
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
const tokenSesion = ref('');

interface FormData {
    cedula: string
    telefono: string
    token: string
    telIncryp: string
    tokenIn: string
    acceptTerms: boolean
    checkItalParner: string
}

const showForm = ref(false)
const isLoading = ref(false)
const isExistingUser = ref(false)

const smsCountdown = ref(0)
const emailCountdown = ref(0)

// Función para iniciar el contador
const startCountdown = (type: 'sms' | 'email') => {
    const countdownRef = type === 'sms' ? smsCountdown : emailCountdown
    countdownRef.value = 60 // 60 segundos de espera

    const interval = setInterval(() => {
        countdownRef.value--
        if (countdownRef.value <= 0) {
            clearInterval(interval)
        }
    }, 1000)
}

// Función para reenviar token por SMS
const reenviarTokenSMS = async () => {
    if (smsCountdown.value > 0) return

    try {
        isLoading.value = true
        formData.token = generateToken() // Generar nuevo token

        const resultsms = await sendMessage(
            formData.telIncryp,
            `ingresa este token  ${formData.token}, para el inicio de sesión Italpuntos`
        )

        if (resultsms.resultCode == "0" || resultsms.code == "0") {
            showModal.value = true
            messageModal.value = 'Token reenviado exitosamente por SMS'
            titleModal.value = 'Éxito'
            startCountdown('sms')
        } else {
            throw new Error('Error al enviar SMS')
        }
    } catch (error) {
        console.log(error)
        showModal.value = true
        messageModal.value = 'Error al reenviar el token por SMS'
        titleModal.value = 'Error'
    } finally {
        isLoading.value = false
    }
}



const formData = reactive<FormData>({
    cedula: '',
    telefono: '',
    token: '',
    telIncryp: '',
    tokenIn: '',
    checkItalParner: '',
    acceptTerms: false

})
interface ItalparnerInfo {
    success: boolean;
    data: {
        data: Array<{
            Telefono: string;
            Nombre: string;
            Cedula: string;
            Email: string;
            Ciudad: string;
            Mensaje?: string; // Added Mensaje property
        }>;
    };
    message?: string;
    token?: string;
}

const confirmar2 = () => {
    showModal.value = false;
    // console.log('confirmar2')
}
const cancelar2 = () => {
    showModal.value = false;
    //console.log('cancelar2')
}
const generateToken = () => {
    let token = "";
    for (let i = 0; i < 5; i++) {
        token += Math.floor(Math.random() * 10);
    }
    return token;
}

const verificarToken = async () => {
    if (!formData.tokenIn) return

    if (!formData.acceptTerms) {
        alert('Debes aceptar los términos y condiciones')
        return
    }


    if (formData.tokenIn.length < 5) {
        showModal.value = true;
        messageModal.value = 'El token debe tener 5 digitos';
        titleModal.value = 'Error';
        return
    }
    if (formData.token == formData.tokenIn) {
        if (formData.checkItalParner == 'italpartner') {
            UserStore.setToken(formData.token, "tokenSesion")
            UserStore.setToken(formData.token, tokenSesion.value)
        } else {
            const sessionToken = await cliente.getTokenSession(UserStore.userCode, UserStore.bpCode);
            UserStore.setToken(formData.token, sessionToken.tokenSesion)
        }

        router.push(`dash-professional/${UserStore.bpCode}`)
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
    if (!formData.cedula || !formData.checkItalParner){
        showModal.value = true;
        messageModal.value = 'debes ingresar el numero de cedula y seleccionar el tipo de afiliado';
        titleModal.value = 'Error';
      return

    }

    try {
        isLoading.value = true
        if (formData.checkItalParner == 'italpartner') {
            const italparnerInfo = await italparner.getInfo(formData.cedula) as ItalparnerInfo;
            //console.log(italparnerInfo);

            if (italparnerInfo.success) {
                if (italparnerInfo.data.data[0].Mensaje == 'Italparner no se encuentra creado') {
                    showModal.value = true;
                    messageModal.value = 'El italparner no se encuentra creado';
                    titleModal.value = 'Error';
                    formData.cedula = '';
                    router.push('/resgistro-italparner')
                    return
                }

                const infoParner = italparnerInfo.data.data;
                formData.telIncryp = infoParner[0].Telefono;
                formData.token = generateToken();
                tokenSesion.value = italparnerInfo.token as string;
                            
                UserStore.saveUserItalparner(infoParner[0].Nombre, infoParner[0].Cedula, infoParner[0].Email, infoParner[0].Telefono, infoParner[0].Ciudad);

                try {
                    const resultsms = await sendMessage(formData.telIncryp, `ingresa este token  ${formData.token}, para el inicio de sesión Italpuntos`);
                    formData.telefono = `${formData.telIncryp.substring(0, 3)}.......${formData.telIncryp.substring(formData.telIncryp.length - 3)}`
                    isLoading.value = true;
                    //console.log(resultsms)
                    if (resultsms.resultCode == "0" || resultsms.code == "0") {
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

            }

        } else {
            const infoCliente = await cliente.getCliente(formData.cedula);
            console.log(infoCliente);

            if (infoCliente.data == null) {
                showModal.value = true;
                messageModal.value = 'El número de cédula no existe en la base de datos, acercate a nuestra sala de ventas mas cercana o contacta a tu a sesor de confianza';
                titleModal.value = 'Error';
                formData.cedula = '';
                return
            }

            // if (infoCliente.data[0].stcd1 == formData.cedula || infoCliente.data[0].stcd2 == formData.cedula) {
            formData.telIncryp = infoCliente.data[0].telf1;
            formData.token = generateToken();
            UserStore.saveUser(infoCliente.data[0].name1, infoCliente.data[0].stcd1 || infoCliente.data[0].stcd2, infoCliente.data[0].kunnr, infoCliente.data[0].psoo1);

            try {
                const resultsms = await sendMessage(formData.telIncryp, `ingresa este token  ${formData.token}, para el inicio de sesión Italpuntos`);
                formData.telefono = `${formData.telIncryp.substring(0, 3)}.......${formData.telIncryp.substring(formData.telIncryp.length - 3)}`
                isLoading.value = true;
                if (resultsms.resultCode == "0") {
                    showForm.value = true
                } else {
                    showModal.value = 
                    showForm.value = false
                    messageModal.value = 'Error al enviar el SMS Verifica tu numero';
                    titleModal.value = 'Error';
                }
            } catch (error) {
                showModal.value = true;
                messageModal.value = 'Error al enviar el SMS Verifica tu numero';
                titleModal.value = 'Error';
            }

            // } else {
            //     isLoading.value = false
            //     isExistingUser.value = false
            //     showModal.value = true;
            //     messageModal.value = 'El número de cédula no existe en nuestra base de datos';
            //     titleModal.value = 'Error';
            //     formData.cedula = '';
            // }
        }
    } catch (error) {
        showModal.value = true;
        messageModal.value = 'Error al verificar cédula';
        titleModal.value = 'Error';

    } finally {
        isLoading.value = false
    }
}

// Función para enviar token por email
const enviarTokenEmail = async () => {
    if (emailCountdown.value > 0) return
    if (!UserStore.email) {
        showModal.value = true;
        messageModal.value = 'Usuario no tiene correo asignado';
        titleModal.value = 'Error';
        console.error('El email no está definido');
        return;
    }
    try {

        isLoading.value = true
        formData.token = generateToken() // Generar nuevo token
        //console.log(UserStore.email as string, `Tu token de acceso a italpuntos es: ${formData.token}`, `Tu token es: ${formData.token}`)
        const resultEmail = await Message.sendEmail(UserStore.email as string, `Tu token de acceso a italpuntos es: ${formData.token}`, `Tu token es: ${formData.token}`);
        if (resultEmail.success) {
            let email = `${UserStore.email.substring(0, 4)}.......${UserStore.email.substring(UserStore.email.length - 10)}`
            showModal.value = true;
            messageModal.value = `ingresa el token enviado a tu correo ${email}`;
            titleModal.value = 'Exitoso';


        }
        console.log(resultEmail);

    } catch (error) {
        console.log(error);
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