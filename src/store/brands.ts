// stores/storeStore.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'

interface Store {
 id: number
 empresa: string
 logoWallet: string
 categoria: string
}
 interface Categories {
  name: string
 }

export const useStoreStore = defineStore('store', () => {
 const stores = ref<Store[]>([])
 const categories = ref<Categories[]>([])
 const loading = ref(false)
 const error = ref<string | null>(null)

 async function fetchStores() {
   loading.value = true
   try {
   
    if (categories.value.length <= 0) {
     const response = await fetch("https://lilix.ceramicaitalia.com:3001/clientes/italpuntos/CuponList", {method: "POST", redirect: "follow"})
     let  brands = await response.json();
     stores.value = brands.data.data ;
     // Obtener categorías únicas
     const nombresCategorias = stores.value.map(store => store.categoria);
     const categoriasUnicas = [...new Set(nombresCategorias)].map(nombre => ({ name: nombre }));
     categories.value = categoriasUnicas;
    }
   } catch (e) {
     error.value = 'Error loading stores'
   } finally {
     loading.value = false
   }
 }

 return {
   stores,
   loading, 
   error,
   categories,
   fetchStores
 }
})