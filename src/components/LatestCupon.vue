<template>
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Latest Coupon Codes & Deals</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="coupon in coupons" :key="coupon.id" 
               class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all">
            <img :src="coupon.image" :alt="coupon.title" class="w-full h-48 object-cover" />
            
            <div class="p-6">
              <h3 class="text-lg font-semibold mb-4">{{ coupon.title }}</h3>
              
              <div class="flex items-center gap-4 mb-4">
                <div class="flex items-center text-sm text-green-600">
                  <svg class="w-4 h-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  Verified
                </div>
                <div class="flex items-center text-sm text-gray-600">
                  <svg class="w-4 h-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                  </svg>
                  {{ coupon.usedCount }} Used
                </div>
              </div>
              
              <p class="text-sm text-red-500 text-center mt-4">
                Expires On: {{ formatDate(coupon.expiresOn) }}
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
      title: 'Up To 50% Off On Home Appliances',
      image: 'https://htmlbeans.com/html/coupon/images/img05.jpg',
      usedCount: 324,
      expiresOn: new Date('2024-03-25')
    },
    {
      id: 2,
      title: 'Up To 20% Off On Men Style Spa Saloon',
      image: 'https://htmlbeans.com/html/coupon/images/img05.jpg',
      usedCount: 145,
      expiresOn: new Date('2024-03-21')
    },
    {
      id: 3,
      title: 'Up To 20% Off On Paris Honeymoon Trip',
      image: 'https://htmlbeans.com/html/coupon/images/img05.jpg',
      usedCount: 278,
      expiresOn: new Date('2024-03-22')
    },
    {
      id: 4,
      title: 'Up To 20% Off On Women Accessories',
      image: 'https://htmlbeans.com/html/coupon/images/img05.jpg',
      usedCount: 432,
      expiresOn: new Date('2024-03-20')
    }
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