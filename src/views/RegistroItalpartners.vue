<template>
  <TopBar />
  <Header></Header>
  <SlideRegistro Titulo="Registro ItalParner"></SlideRegistro>

  <div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      <!-- Header -->
      <div class="bg-gradient-to-r from-red-600 to-red-700 py-6 px-8">
        <p class="text-purple-100 mt-1">Complete el formulario y conviertete en un italparner !! obten muchos beneficios
        </p>
      </div>

      <!-- Form Content -->
      <div class="p-8">
        <!-- Identificación Section -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div class="space-y-2">
            <label for="cedula" class="block text-sm font-medium text-gray-700">
              Identificación <span class="text-xs text-gray-500">(NIT sin dígito de verificación)</span>
            </label>
            <div class="flex space-x-2">
              <input type="number" id="cedula" v-model="cedula" placeholder="Ingrese número de identificación"
                class="flex-1 shadow-sm focus:ring-red-600 focus:border-red-600 block w-full sm:text-sm border-gray-300 rounded-md"
                required />
              <button @click="btnValidaCliente"
                class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#D51B19] hover:bg-[#c01815] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                Verificar
              </button>
            </div>
            <span v-if="msg.cedula" class="text-sm text-red-600">{{ msg.cedula }}</span>
          </div>

          <div class="space-y-2">
            <label for="tipoid" class="block text-sm font-medium text-gray-700">Tipo de Identificación</label>
            <select id="tipoid" v-model="tipoid"
              class="shadow-sm focus:ring-red-600 focus:border-red-600 block w-full sm:text-sm border-gray-300 rounded-md">
              <option value="" disabled selected>Seleccione</option>
              <option value="TI">Tarjeta de Identidad</option>
              <option value="CC">Cédula de Ciudadanía</option>
              <option value="TE">Tarjeta de Extranjería</option>
              <option value="CE">Cédula de Extranjería</option>
              <option value="NIT">NIT</option>
              <option value="PTE">Pasaporte</option>
              <option value="DID">Documento de Identidad Extranjero</option>
            </select>
          </div>
        </div>

        <!-- Nombre Section -->
        <div class="bg-red-50 p-4 rounded-lg mb-6">
          <h2 class="text-lg font-medium text-purple-800 mb-4">Información Personal</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div class="space-y-2">
              <label for="tratamiento" class="block text-sm font-medium text-gray-700">Tratamiento</label>
              <select id="tratamiento" v-model="tratamiento"
                class="shadow-sm focus:ring-red-600 focus:border-red-600 block w-full sm:text-sm border-gray-300 rounded-md">
                <option value="" disabled selected>Seleccione</option>
                <option value="0002">SEÑOR</option>
                <option value="0001">SEÑORA</option>
              </select>
            </div>
            <div class="space-y-2">
              <label for="primer-nombre" class="block text-sm font-medium text-gray-700">Nombre</label>
              <input type="text" id="primer-nombre" v-model="pnombre"
                class="shadow-sm focus:ring-red-600 focus:border-red-600 block w-full sm:text-sm border-gray-300 rounded-md"
                required />
            </div>
            <div class="space-y-2">
              <label for="primer-apellido" class="block text-sm font-medium text-gray-700">Apellido</label>
              <input type="text" id="primer-apellido" v-model="papellido"
                class="shadow-sm focus:ring-red-600 focus:border-red-600 block w-full sm:text-sm border-gray-300 rounded-md"
                required />
            </div>

          </div>
        </div>

        <!-- Contacto Section -->
        <div class="bg-blue-50 p-4 rounded-lg mb-6">
          <h2 class="text-lg font-medium text-blue-800 mb-4">Información de Contacto</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div class="space-y-2">
              <label for="telefono" class="block text-sm font-medium text-gray-700">Teléfono</label>
              <input type="number" id="telefono" v-model="telefono"
                class="shadow-sm focus:ring-red-600 focus:border-red-600 block w-full sm:text-sm border-gray-300 rounded-md"
                required />
            </div>

            <div class="space-y-2">
              <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" v-model="email"
                class="shadow-sm focus:ring-red-600 focus:border-red-600 block w-full sm:text-sm border-gray-300 rounded-md"
                required />
              <span v-if="msg.email" class="text-sm text-red-600">{{ msg.email }}</span>
            </div>

            <div class="space-y-2">
              <label for="fechanacimiento" class="block text-sm font-medium text-gray-700">Fecha de Nacimiento</label>
              <input type="date" id="fechanacimiento" v-model="fechanacimiento"
                class="shadow-sm focus:ring-red-600 focus:border-red-600 block w-full sm:text-sm border-gray-300 rounded-md"
                required />
            </div>

            <div class="space-y-2">
              <label for="direccion" class="block text-sm font-medium text-gray-700">Dirección</label>
              <input type="text" id="direccion" v-model="direccion" maxlength="60"
                class="shadow-sm focus:ring-red-600 focus:border-red-600 block w-full sm:text-sm border-gray-300 rounded-md"
                required />
            </div>


          </div>
        </div>

        <!-- Dirección Section -->
        <div class="mb-6">


          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="space-y-2">
              <label for="dptos" class="block text-sm font-medium text-gray-700">
                Departamento <span v-if="depa" class="text-xs text-purple-600">{{ depa }}</span>
              </label>
              <select id="dptos" v-model="dptos" @change="getcity"
                class="shadow-sm focus:ring-red-600 focus:border-red-600 block w-full sm:text-sm border-gray-300 rounded-md">
                <option v-for="dptos in dpto" :key="dptos.BLAND" :value="dptos.BLAND">{{ dptos.BEZEI }}</option>
              </select>
            </div>

            <div class="space-y-2">
              <label for="ciudad" class="block text-sm font-medium text-gray-700">
                Ciudad <span v-if="ciudad" class="text-xs text-purple-600">{{ ciudad }}</span>
              </label>
              <select id="ciudad" v-model="ciudad"
                class="shadow-sm focus:ring-red-600 focus:border-red-600 block w-full sm:text-sm border-gray-300 rounded-md">
                <!-- <template v-if="dptos == '11'">
                  <option :value="municipio.BEZEI">{{ municipio.BEZEI }}</option>
                </template> -->
                <option value="">Seleccione una ciudad</option>
                <option v-for="muni in municipio" :key="muni.BEZEI" :value="muni.BEZEI">
                  {{ muni.BEZEI }}
                </option>
              </select>
            </div>
          </div>
        </div>

        <!-- Error Display -->
        <div v-if="errors.length" class="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg mb-6">
          <p class="font-medium">Por favor, complete los siguientes campos requeridos:</p>
          <ul class="list-disc pl-5 mt-2 space-y-1 text-sm">
            <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
          </ul>
        </div>

        <!-- Action Buttons -->
        <div class="flex flex-wrap gap-4 justify-center mt-8">
          <button @click="Registrar"
            class="flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#D51B19] hover:bg-[#c01815] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 w-full sm:w-auto">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path
                d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 00-6 6v1h12v-1a6 6 0 00-6-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
            </svg>
            Registrarme
          </button>

        </div>
      </div>
    </div>
    <Loader :isLoading="isLoading" />
  </div>

</template>
<script setup lang="ts">
import TopBar from '../components/TopBar.vue';
//@ts-ignore
import Header from '../components/Header.vue';
import SlideRegistro from '../components/SlideRegistro.vue';
import { italparner } from '../service/clientes';

// ClienteRegistro.ts
import { ref, reactive, computed, onMounted, watch } from 'vue';
import axios from 'axios';
import moment from 'moment';
import Swal from 'sweetalert2';
//@ts-ignore
import Loader from '../components/Loader.vue';

interface Departamento {
  BLAND: string;
  BEZEI: string;
}

interface Municipio {
  BEZEI: string;
  postal?: string;
}

interface Mensajes {
  cedula?: string;
  email?: string;
  tipoid?: string;
}
const url = "https://web.ceramicaitalia.com/carritosap/sala/bd/clienteqas.php";
// Estado con variables reactivas

const tratamiento = ref('');
const cedula = ref('');
const ciudad = ref<string | Municipio>('');
const tipoid = ref('');
const papellido = ref('');
const pnombre = ref('');
const telefono = ref('');
const email = ref('');
const direccion = ref('');
const fechanacimiento = ref('1900-01-01');
const dptos = ref('');
const depa = ref('');
const dpto = ref<Departamento[]>([]);
const errors = ref<string[]>([]);
const municipio = ref<Municipio[]>([]);
const msg = reactive<Mensajes>({});
const isLoading = ref(false)
// Expresión regular para validar email
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;

// Watchers
watch(email, (value) => {
  validateEmail(value);
});

// Métodos
const reset = () => {
  localStorage.clear();
  location.reload();
};

const formatDate = (date: string) => {
  return moment(date);
};

const validateFecha = (fecha: string) => {
  return moment(fecha).format("YYYY-MM-DD");
};

const validateEmail = (value: string) => {
  if (emailRegex.test(value)) {
    msg.email = "";
  } else {
    msg.email = "Correo Inválido";
  }
};
/**
* Valida si un cliente existe consultando por su cédula
*/
const btnValidaCliente = async () => {
  interface ItalpartnerResponse {
    data: {
      data: Array<{
        // Define aquí las propiedades del cliente
        id: number;
        data: object;
        nombre: string;
        cedula: string;
        [key: string]: any; // Si hay propiedades adicionales
      }>;
    }
  };
  try {
    // Validación inicial del campo
    if (cedula.value === '') {
      msg.cedula = 'Cédula es requerida';
      return;
    }
    msg.cedula = '';
    isLoading.value = true;
    const response = await italparner.getInfo(cedula.value) as ItalpartnerResponse;
    if (response?.data?.data && Array.isArray(response.data.data) && response.data.data[0].Cedula == cedula.value) {

      Swal.fire({
        title: 'Cliente ya existe, debes iniciar sesion',
        text: `Nombre: ${response.data.data[0].Nombre}`,
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
    } else {
      console.log('No se encontraron datos para esta cédula');
      Swal.fire({
        title: 'Cliente No encontrado, por favor registrese',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    }
  } catch (error: any) {

    Swal.fire({
      title: 'Cliente No encontrado, por favor registrese',
      text: error.message as string,
      icon: 'error',
      confirmButtonText: 'Aceptar'
    });
  } finally {
    isLoading.value = false;
  }
};

const Registrar = async () => {
  console.log(tratamiento.value
    , cedula.value
    , ciudad.value
    , tipoid.value
    , papellido.value
    , pnombre.value
    , telefono.value
    , email.value
    , direccion.value
    , fechanacimiento.value);

  // Validar campos requeridos
  errors.value = [];
  if (!tratamiento.value) errors.value.push("Tratamiento es requerido");
  if (!cedula.value) errors.value.push("Cédula es requerida");
  if (!tipoid.value) errors.value.push("Tipo de Identificación es requerido");
  if (!papellido.value) errors.value.push("Apellido es requerido");
  if (!pnombre.value) errors.value.push("Nombre es requerido");
  if (!telefono.value) errors.value.push("Teléfono es requerido");
  if (!email.value) errors.value.push("Email es requerido");
  if (!direccion.value) errors.value.push("Dirección es requerida");
  if (!fechanacimiento.value) errors.value.push("Fecha de Nacimiento es requerida");
  if (!dptos.value) errors.value.push("Departamento es requerido");
  if (!ciudad.value) errors.value.push("Ciudad es requerida");

  // Validar email
  if (email.value && !emailRegex.test(email.value)) {
    errors.value.push("Email inválido");
  }
  // Si hay errores, no continuar
  if (errors.value.length) { 
    return;
  }

  // Enviar datos al servidor
  try {
    isLoading.value = true;
    const response = await italparner.register(cedula.value, pnombre.value, papellido.value, email.value, telefono.value, ciudad.value as string, direccion.value, tratamiento.value);
    console.log(response);
    
    if (response.data.data.data[0].Mensaje == "El proceso de creación de la cuenta se ejecutará en los próximos 10 minutos") {
      Swal.fire({
        title: 'Registro exitoso',
        text: 'Gracias por registrarte, en unos minutos recibiras un mensaje de bienvenida y podras disfrutar de los beneficios de ser un ItalPartner',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
    } else {
      Swal.fire({
        title: 'Error al registrar',
        text: 'Hubo un error al registrar tus datos, por favor intenta de nuevo',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    }
  } catch (error) {
   // console.error("Error al registrar:", error);
    Swal.fire({
      title: 'Error al registrar',
      text: 'Hubo un error al registrar tus datos, por favor intenta de nuevo',
      icon: 'error',
      confirmButtonText: 'Aceptar'
    });

  }
  finally {
    isLoading.value = false;
  }
};
const getgeography = async () => {
  await axios.post(url, { opcion: 5 }).then((response) => {
    dpto.value = response.data.DPTOS.item;
  });
};
const getcity = async () => {
  try {
    ciudad.value = "";
    if (!dptos.value) {
      municipio.value = [];
      return;
    }
    const response = await axios.post(url, {
      opcion: 4,
      region: dptos.value, 
      username: "bortega",
    });
    if (response.data && response.data.REGPOSTAL && response.data.REGPOSTAL.item) {
      if (Array.isArray(response.data.REGPOSTAL.item)) {
        municipio.value = response.data.REGPOSTAL.item;
      }
      // Si es un solo objeto, convertirlo en array
      else {
        municipio.value = [response.data.REGPOSTAL.item];
      }
      console.log("Ciudades cargadas:", municipio.value);
    } else {
      municipio.value = [];
      console.warn("No se encontraron ciudades o formato de respuesta incorrecto");
    }
  } catch (error) {
    console.error("Error al cargar ciudades:", error);
    municipio.value = [];
  }
};
onMounted(() => {
  getgeography();
});



</script>