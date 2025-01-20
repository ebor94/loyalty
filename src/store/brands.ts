// stores/storeStore.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'

interface Store {
 id: number
 name: string
 logo: string
}

export const useStoreStore = defineStore('store', () => {
 const stores = ref<Store[]>([])
 const loading = ref(false)
 const error = ref<string | null>(null)

 async function fetchStores() {
   loading.value = true
   try {
     const response = await fetch('https://www.freetestapi.com/api/v1/animals?limit=10')
     stores.value = await response.json()
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