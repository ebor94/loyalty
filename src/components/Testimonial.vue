<template>
    <section class="relative py-16">
      <!-- Background Image with Overlay -->
      <div class="absolute inset-0">
        <img
          src="https://htmlbeans.com/html/coupon/images/img28.jpg"
          alt="Background"
          class="w-full h-full object-cover opacity-40"
        />
        <div class="absolute inset-0 bg-black/50"></div>
      </div>
   
      <!-- Content -->
      <div class="relative">
        <h2 class="text-3xl text-center font-bold mb-12 text-white">
          Words From Our Customers
        </h2>
        
        <div class="max-w-7xl mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div v-for="testimonial in testimonials" 
                 :key="testimonial.id" 
                 class="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-md">
              <p class="text-gray-600 italic mb-6">
                "{{ testimonial.text }}"
              </p>
              
              <div class="flex items-center gap-4">
                <img 
                  :src="testimonial.image"
                  :alt="testimonial.name"
                  class="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 class="font-semibold">{{ testimonial.name }}</h3>
                  <span class="text-red-500">Happy Customer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
   </template>
   <script lang="ts" setup>
   interface Testimonial {
    id: number;
    text: string;
    name: string;
    image: string;
   }
   
   const testimonials: Testimonial[] = [
    {
      id: 1,
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      name: "Micheal Doe",
      image: "/src/assets/img/customers/customer1.jpg"
    },
    {
      id: 2,
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      name: "Johnson Doe", 
      image: "/src/assets/img/customers/customer2.jpg"
    },
    {
      id: 3,
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      name: "Whity Doe",
      image: "/src/assets/img/customers/customer3.jpg"
    }
   ]
   </script>
