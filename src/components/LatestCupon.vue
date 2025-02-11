<template>
    <section class="py-16">
      <div class="max-w-5xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Multiplica tus experiencias junto a los que más amas</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="coupon in coupons" :key="coupon.id" 
               class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all">
            <img :src="coupon.image" class="w-full h-48 object-cover" />
            
            <div class="p-6">
                           
              <div class="flex items-center gap-4 mb-4">
                <div class="text-sm text-red-500 text-center mt-4">
                  {{ coupon.title }}
                </div>
                <div class="flex items-center text-sm text-gray-600">
                
                <!--   {{ coupon.usedCount }}  -->
                </div>
              </div>
              
              <p class="text-sm text-red-500 text-center mt-4">
                <!-- Expires On: {{ formatDate(coupon.expiresOn) }} -->
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  interface Coupon {
    id: number
    title: string
    image: string
    usedCount: number
    expiresOn: Date
  }
  
  const coupons: Coupon[] = [
    {
      id: 1,
      title: 'Descubre Nuevos Lugares',
      image: 'https://web.ceramicaitalia.com/temporada/italpuntos/img3.png',
      usedCount: 324,
      expiresOn: new Date('2024-03-25')
    },
    {
      id: 2,
      title: 'Crea recuerdos y deleita tu paladar',
      image: 'https://web.ceramicaitalia.com/temporada/italpuntos/img2.png',
      usedCount: 145,
      expiresOn: new Date('2024-03-21')
    },
    {
      id: 3,
      title: 'Vistete Siempre para las mejores ocasiones',
      image: 'https://web.ceramicaitalia.com/temporada/italpuntos/img1.png',
      usedCount: 278,
      expiresOn: new Date('2024-03-22')
    },
  ]
  
  const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    })
  }
  </script>
  <script lang="ts">
  export default {
    name: 'LatestCupon'
  }
  </script>