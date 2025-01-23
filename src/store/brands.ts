// stores/storeStore.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'

interface Store {
 id: number
 name: string
 image: string
}

export const useStoreStore = defineStore('store', () => {
 const stores = ref<Store[]>([])
 const loading = ref(false)
 const error = ref<string | null>(null)

 async function fetchStores() {
   loading.value = true
   try {
   
    
     const response = await fetch("https://lilix.ceramicaitalia.com:3001/clientes/italpuntos/CuponList", {method: "POST", redirect: "follow"})
     let  brands = await response.json();
     stores.value = brands.data.data ;
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
   fetchStores
 }
})