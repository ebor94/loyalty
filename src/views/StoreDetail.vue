<template>
    <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <!-- TopBar y Header -->
        <TopBar @mostrarLogin="toggleMostrarLogin" />
        <Header />

        <!-- Loading State -->
        <div v-if="loading" class="container mx-auto px-4 py-8">
            <div class="animate-pulse space-y-8">
                <!-- Skeleton para el header de la tienda -->
                <div class="flex flex-col md:flex-row items-center gap-6 bg-white p-8 rounded-xl shadow-sm">
                    <div class="w-32 h-32 md:w-40 md:h-40 bg-gray-200 rounded-xl"></div>
                    <div class="flex-1 space-y-4">
                        <div class="h-8 bg-gray-200 rounded w-3/4"></div>
                        <div class="h-4 bg-gray-200 rounded w-full"></div>
                        <div class="h-6 bg-gray-200 rounded w-1/4"></div>
                    </div>
                </div>
                <!-- Skeleton para los productos -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div v-for="i in 3" :key="i" class="h-48 bg-gray-200 rounded-xl shadow-sm"></div>
                </div>
            </div>
        </div>

        <!-- Error State -->
        <div v-else-if="error" class="container mx-auto px-4 py-8">
            <div class="bg-red-50 border border-red-200 text-red-600 p-4 rounded-lg text-center">
                {{ error }}
            </div>
        </div>

        <!-- Content -->
        <template v-else-if="storeData">
            <!-- Header de la tienda -->
            <div class="bg-white shadow-sm">
                <div class="container mx-auto px-4 py-8">
                    <div class="flex flex-col md:flex-row items-center gap-6">
                        <div class="w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden shadow-lg">
                            <img :src="storeData.info.logoWallet" :alt="storeData.info.empresa"
                                class="w-full h-full object-cover bg-white" @error="handleImageError" />
                        </div>
                        <div class="flex-1 text-center md:text-left">
                            <h1 class="text-4xl font-bold text-gray-900 mb-2">
                                {{ storeData.info.empresa }}
                            </h1>
                            <p class="text-gray-600 mb-4">{{ storeData.info.descripcion }}</p>
                            <span
                                class="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                                {{ storeData.info.categoria }}

                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Contenido principal -->
            <div class="container mx-auto px-4 py-12">
                <!-- Grid de productos -->
                <div v-if="availableStocks.length > 0">
                    <h2 class="text-3xl font-semibold text-gray-900 mb-8">Gift Cards Disponibles</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div v-for="stock in availableStocks" :key="stock.valor"
                            class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                            <div class="relative">
                                <!-- Imagen de fondo -->
                                <img :src="stock.randomImage" :alt="`Gift Card ${formatCurrency(stock.valor)}`"
                                    class="w-full h-48 object-cover rounded-t-xl" @error="handleImageError" />
                                <!-- Overlay con gradiente -->
                                <div
                                    class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-t-xl">
                                </div>
                            </div>
                            <div class="p-6">
                                <div class="flex items-center justify-between mb-4">
                                    <div>
                                        <h3 class="text-2xl font-bold text-gray-900">
                                            {{ formatCurrency(stock.valor) }}
                                        </h3>
                                        <p class="text-sm text-gray-500">Gift Card</p>
                                    </div>
                                   <!--  <span
                                        class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded-full">
                                        Disponible
                                    </span> -->
                                </div>
                                <button
                                    class="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                                    @click="handlePurchase(stock)">
                                    Redimir
                                </button> 
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Empty State para stocks -->
                <div v-else class="text-center py-8">
                    <p class="text-gray-600">No hay gift cards disponibles en este momento.</p>
                </div>

                <!-- Términos y condiciones -->
                <div class="mt-16">
                    <h2 class="text-3xl font-semibold text-gray-900 mb-6">Términos y Condiciones</h2>
                    <div class="bg-white rounded-xl shadow p-6 prose max-w-none"
                        v-html="storeData.info.condicionesHTML"></div>
                </div>
            </div>
        </template>

        <!-- Footer -->
        <Footer />
        <Modal v-if="showModal" :showModal="showModal" @confirm="confirmar2" @cancel="cancelar2" :title="titleModal"
            :message="messageModal"></Modal>
        <Loader :isLoading="isLoading" />
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { Cupon } from '../service/cupon';
import { useUserStore } from '../store/user';
import { useStoreGiftcard } from '../store/gifCard';
//@ts-ignore
import Header from '../components/Header.vue';
//@ts-ignore
import TopBar from '../components/TopBar.vue';
import Footer from '../components/Footer.vue';
//@ts-ignore
import Modal from '../components/Modal.vue';
//@ts-ignore
import Loader from '../components/Loader.vue';


const isLoading = ref(false);
const mostrarLogin = ref(false);
const mostrarRegistro = ref(false);
const userData = useUserStore();
const giftCard = useStoreGiftcard();
const contador = ref(0);

const toggleMostrarLogin = () => {
    mostrarLogin.value = !mostrarLogin.value;
    mostrarRegistro.value = false;
};
const route = useRoute();
const router = useRouter();
interface Stock {
    valor: number;
    stock: boolean;
    randomImage?: string;
}

interface StoreInfo {
    id: string;
    empresa: string;
    giftcard: string;
    condicionesHTML: string;
    condicionesPlana: string;
    imagenGiftcardPNG: string;
    imagenGiftcardJPG: string;
    descripcion: string;
    logoWallet: string;
    categoria: string;
    activo: number;
}

interface StoreResponse {
    status: string;
    code: string;
    info: StoreInfo;
    stocks: Stock[];
}


// Estado
const storeData = ref<StoreResponse | null>(null);
const loading = ref<boolean>(true);
const error = ref<string | null>(null);

//modal
const showModal = ref(false);
const messageModal = ref('mensaje');
const titleModal = ref('titulo');

// Computed properties
const availableStocks = computed<Stock[]>(() => {
    return storeData.value?.stocks.filter(stock => stock.stock) || [];
});
const confirmar2 = () => {
    showModal.value = false;
    console.log('confirmar2')
}
const cancelar2 = () => {
    showModal.value = false;
    console.log('cancelar2')
}
// Utilidades
const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(value);
};

const handleImageError = (event: Event): void => {
    const img = event.target as HTMLImageElement;
    img.src = '/path-to-fallback-image.jpg';
};

const handlePurchase = async (stock: Stock): Promise<void> => {
    isLoading.value = true; // Mostrar el loader
    try {
        contador.value++;
        if (contador.value > 1) {
            showModal.value = !showModal.value;
            messageModal.value = 'Ya has solicitado una redención, por favor espera a que se procese.';
            titleModal.value = 'Validación';
            return;
        }

        if(userData.puntosDisponibles <= 0) {
               showModal.value = !showModal.value;
            messageModal.value = 'Saldo insuficiente para redimir'
            titleModal.value = 'Validacion'
            return
        }

      
        // validar puntos disponibles antes de solicitar redencion 
        if (userData.puntosDisponibles >= stock.valor) {
            if (!storeData.value) return;

            let buyGif = null;
            if(userData.typeUser === 'italpartner'){        
                 buyGif = await Cupon.buyGifcard(`${storeData.value.info.id}`, userData.userCode, userData.typeUser, userData.userName, stock.valor);
           
            }else{
                 buyGif = await Cupon.buyGifcard(`${storeData.value.info.id}`, userData.userCode, userData.bpCode, userData.userName, stock.valor);
           
            }


            console.log(buyGif)

          if (!buyGif.success || buyGif === null || buyGif === undefined) {
                showModal.value = !showModal.value;
                messageModal.value = '!Presentamos problemas De Redencion, intenta luego'
                titleModal.value = 'Error'
                return
            };

            if (buyGif.data === null || buyGif.data === undefined) {
                showModal.value = !showModal.value;
                messageModal.value = '!Presentamos problemas De Redencion, intenta luego'
                titleModal.value = 'Error'
                return
            };

            if (buyGif.message !== 'Gift card adquirida exitosamente') {
                showModal.value = !showModal.value;
                messageModal.value = buyGif.message  || 'Error al procesar la redención';
                titleModal.value = 'Error';
                return;
            }

            // Guardar la gift card en el store
            const savegifsy = giftCard.saveGiftcard(
                buyGif.data.clave,
                buyGif.data.codigo,
                buyGif.data.empresa,
                buyGif.data.fechaExpiracionTicket,
                buyGif.data.hashPdf,
                buyGif.data.idGiftcard,
                buyGif.data.nombreEmpresa,
                buyGif.data.status,
                buyGif.data.url,
                buyGif.data.userCode,
                buyGif.data.valor
            );

            
            if(userData.typeUser === 'italpartner'){    
                let nuevoSaldo = 0;
                if ( buyGif.balanceNumberAfter === undefined || buyGif.balanceNumberAfter === null  ) {                    
                    nuevoSaldo = userData.puntosDisponibles - stock.valor;
                } else {
                    nuevoSaldo = buyGif.balanceNumberAfter;
                }
                userData.updateDataUserItalparner(userData.userCode as string, nuevoSaldo)
           
            }else{
                userData.updateDataUser(userData.userCode as string, userData.bpCode as string, stock.valor)
             }   


    
            //ir al componente gifcard
            router.push('/giftcard')
        } else {
            showModal.value = !showModal.value;
            messageModal.value = 'Saldo insuficiente para redimir'
            titleModal.value = 'Validacion'
        }
    } catch (err) {
        showModal.value = !showModal.value;
        messageModal.value = '!Presentamos problemas para tus compras, intenta luego'
        titleModal.value = 'Error De Comunicacion'
    } finally {
        isLoading.value = false; // Ocultar el loader
        contador.value = 0; // Reiniciar contador
    }
};

const fetchStoreData = async (): Promise<void> => {
    try {
        loading.value = true;
        error.value = null;

        const response = await Cupon.getGifCard(route.params.id as string);

        if (!response) {
            throw new Error('No se pudo obtener la información de la tienda');
        }
        console.log(response)

        if (response.success) {
            // Asignar imágenes aleatorias a cada stock
            if (response.data.stocks) {
                // Usamos Promise.all para manejar todas las promesas de imágenes
                const stocksWithImages = await Promise.all(
                    response.data.stocks.map(async (stock: any) => {
                        const randomImage = await getImagesForCategory(response.data.info.categoria);
                        return {
                            ...stock,
                            randomImage
                        };
                    })
                );

                response.data.stocks = stocksWithImages;
            }
            storeData.value = response.data;
        } else {
            throw new Error(response.message || 'Error al cargar los datos');
        }
    } catch (err) {
        error.value = err instanceof Error
            ? err.message
            : 'Error al cargar los datos de la tienda';

    } finally {
        loading.value = false;
    }
};

const getImagesForCategory = async (category: string): Promise<string> => {
    const ImagenRandom = Math.floor(Math.random() * 6) + 1;
    let imgcupon = await Cupon.getImg(ImagenRandom, category);

    return imgcupon === 500
        ? `https://web.ceramicaitalia.com/temporada/italpuntos/${category}/1.jpg`
        : `https://web.ceramicaitalia.com/temporada/italpuntos/${category}/${ImagenRandom}.jpg`;
}



// Lifecycle
onMounted(() => {
    fetchStoreData();
});
</script>

<style scoped>
.transition-all {
    transition: all 0.3s ease-in-out;
}

:deep(.prose) {
    @apply text-gray-600;
}

:deep(.prose p) {
    @apply mb-4;
}
</style>