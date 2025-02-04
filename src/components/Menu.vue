// Navbar.vue
<template>
    <nav class="relative bg-black">
        <!-- Desktop Navigation -->
        <div class="container mx-auto px-4">
            <div class="flex items-center justify-between h-16">

                <!-- Desktop Menu -->
                <div class="hidden md:flex items-center space-x-1">
                    <router-link 
                        v-for="item in menuItems" 
                        :key="item.path"
                        :to="item.path"
                        :class="[
                            'px-4 py-2 text-sm font-medium transition-colors duration-200',
                            isActive(item.path) 
                                ? 'bg-red-800 text-white' 
                                : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                        ]"
                    >
                        {{ item.name }}
                    </router-link>
                </div>

                <!-- Action Buttons -->
                <div class="hidden md:flex items-center space-x-4">
                    <!-- Search (Optional) -->


                    <!-- Register Button -->
                    <router-link 
                        to="/register"
                        class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                    >
                        REGISTRARME
                    </router-link>
                </div>

                <!-- Mobile menu button -->
                <div class="md:hidden flex items-center">
                    <button 
                        @click="isOpen = !isOpen"
                        class="text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white"
                    >
                        <svg 
                            class="h-6 w-6" 
                            :class="{ 'hidden': isOpen, 'block': !isOpen }"
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        <svg 
                            class="h-6 w-6" 
                            :class="{ 'block': isOpen, 'hidden': !isOpen }"
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Menu -->
        <div 
            class="md:hidden"
            :class="{ 'block': isOpen, 'hidden': !isOpen }"
        >
            <div class="px-2 pt-2 pb-3 space-y-1 bg-black">
                <router-link 
                    v-for="item in menuItems" 
                    :key="item.path"
                    :to="item.path"
                    :class="[
                        'block px-3 py-2 text-base font-medium transition-colors duration-200',
                        isActive(item.path)
                            ? 'bg-red-800 text-white'
                            : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                    ]"
                    @click="isOpen = false"
                >
                    {{ item.name }}
                </router-link>

                <!-- Mobile Register Button -->
                <router-link 
                    to="/register"
                    class="block w-full text-center bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 mt-4"
                    @click="isOpen = false"
                >
                    REGISTRARME
                </router-link>
            </div>
        </div>

        <!-- Search Modal (Optional) -->
        <div 
            v-if="showSearch"
            class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            @click="showSearch = false"
        >
            <div 
                class="bg-white w-full max-w-md rounded-lg shadow-xl p-6"
                @click.stop
            >
                <div class="flex items-center border-b border-gray-200 pb-4">
                    <input 
                        type="text"
                        placeholder="Buscar..."
                        class="flex-1 border-0 focus:ring-0 focus:outline-none text-lg"
                        v-model="searchQuery"
                        @keyup.enter="handleSearch"
                    >
                    <button 
                        class="ml-4 text-gray-400 hover:text-gray-600"
                        @click="showSearch = false"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </nav>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

// Estado
const isOpen = ref(false);
const showSearch = ref(false);
const searchQuery = ref('');

// Items del menú
const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Cupones', path: '/cupones' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contacto', path: '/contacto' }
];

// Métodos
const isActive = (path: string): boolean => {
    return route.path === path;
};


const handleSearch = (): void => {
    if (searchQuery.value.trim()) {
        router.push({
            name: 'search',
            query: { q: searchQuery.value }
        });
        showSearch.value = false;
        searchQuery.value = '';
    }
};
</script>

<style scoped>
/* Opcional: Añadir estilos personalizados aquí si es necesario */
.router-link-active {
    @apply bg-red-800 text-white;
}
</style>