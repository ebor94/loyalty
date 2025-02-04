<template>
    <div>
        <TopBar @mostrarLogin="toggleMostrarLogin" />
        <Header />
        <SlideRegistro Titulo="Nuestras Categorias" />

        <div class="bg-gray-50 py-12">
            <div class="container mx-auto px-4">
                

                <div v-if="loading" class="space-y-4">
                    <div v-for="i in 3" :key="i" class="animate-pulse">
                        <div class="h-8 bg-gray-200 rounded w-48 mb-4"></div>
                        <div class="flex space-x-4">
                            <div v-for="j in 4" :key="j" class="w-48 h-48 bg-gray-200 rounded-xl"></div>
                        </div>
                    </div>
                </div>

                <div v-if="error" class="text-red-500 text-center p-4 bg-red-50 rounded-lg">
                    {{ error }}
                </div>

                <div v-for="categoria in categories" :key="categoria.name" class="mb-12">
                    <div class="flex items-center justify-between mb-6">
                        <h3 class="text-2xl font-semibold text-gray-800">{{ categoria.name }}</h3>
                        <div class="flex items-center gap-2">
                            <button 
                                class="p-2 rounded-full hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                                @click="scroll('left', categoria.name)"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-6 w-6 text-gray-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M15 19l-7-7 7-7"
                                    />
                                </svg>
                            </button>
                            <button 
                                class="p-2 rounded-full hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                                @click="scroll('right', categoria.name)"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-6 w-6 text-gray-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div class="relative">
                        <div 
                            class="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scroll-smooth"
                            :data-categoria="categoria.name"
                        >
                            <div 
                                v-for="store in storesByCategory(categoria.name)" 
                                :key="store.id"
                                class="flex-none snap-start"
                            >
                                <div @click="navigateToStore(store.id)" class="w-48 h-48 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"                              >
                                    <div class="relative h-full group">
                                        <img 
                                            :src="store.logoWallet" 
                                            :alt="store.empresa"
                                            @error="handleImageError"
                                            class="w-md h-md object-cover mt-3"
                                        />
                                        <button class="absolute bottom-5 left-1/2 transform -translate-x-1/2 px-2 py-1 rounded-md bg-red-500 text-white text-xs whitespace-nowrap"> 
                                             Ver cupones
                                        </button>

                                        <div 
                                            class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        >
                                            <!-- <div class="absolute bottom-0 left-0 right-0 p-4">
                                                <p class="text-white font-medium">{{ store.empresa }}</p>
                                                
                                            </div> -->
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div 
                    v-if="!loading && !error && categories.length === 0"
                    class="text-center p-8 bg-gray-100 rounded-lg text-gray-600"
                >
                    No hay categorías disponibles.
                </div>
            </div>
        </div>

        <Footer />
    </div>
</template>

<script lang="ts" setup>
import { onMounted, computed, ref } from 'vue';
import Footer from '../components/Footer.vue';
// @ts-ignore
import Header from '../components/Header.vue';
// @ts-ignore
import TopBar from '../components/TopBar.vue';
import { storeToRefs } from 'pinia';
import { useStoreStore } from '../store/brands';
// @ts-ignore
import SlideRegistro from '../components/SlideRegistro.vue';
import { useRouter } from 'vue-router'; // Importamos useRouter
const router = useRouter(); // Inicializamos el router


const storeStore = useStoreStore();
const { stores, loading, error, categories } = storeToRefs(storeStore);

const mostrarLogin = ref(false);
const mostrarRegistro = ref(false);

const toggleMostrarLogin = () => {
    mostrarLogin.value = !mostrarLogin.value;
    mostrarRegistro.value = false;
};

// Función para navegar al detalle de la tienda
const navigateToStore = (storeId: string | number) => {
    router.push({
        name: 'store-detail', // Asegúrate de que este nombre coincida con tu configuración de rutas
        params: { id: storeId }
    });
};

const storesByCategory = (categoria: string) => {
    return stores.value.filter((store) => store.categoria === categoria);
};

const handleImageError = (event: Event) => {
    const img = event.target as HTMLImageElement;
    img.src = '/path-to-fallback-image.jpg'; // Reemplaza con tu imagen de fallback
};

const scroll = (direction: 'left' | 'right', categoria: string) => {
    const slider = document.querySelector(`[data-categoria="${categoria}"]`) as HTMLElement;
    if (slider) {
        const scrollAmount = direction === 'left' ? -slider.offsetWidth : slider.offsetWidth;
        slider.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
};

onMounted(() => {
    storeStore.fetchStores();
});
</script>

<style scoped>
.scroll-smooth {
    scroll-behavior: smooth;
}

/* Ocultar scrollbar pero mantener funcionalidad */
.overflow-x-auto::-webkit-scrollbar {
    display: none;
}

.overflow-x-auto {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

/* Asegurar transiciones suaves */
.transition-all {
    transition: all 0.3s ease-in-out;
}
</style>