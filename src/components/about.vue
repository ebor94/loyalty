<template>
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4">
        <!-- Header y Contenido Principal -->
        <div class="flex flex-col lg:flex-row gap-12">
          <div class="lg:w-1/2">
            <img src="/src/assets/img/about-image.jpg" alt="About Us" class="rounded-lg shadow-xl w-full h-[400px] object-cover" />
          </div>
          <div class="lg:w-1/2">
            <span class="text-yellow-500 font-medium mb-2 block">WHO WE ARE</span>
            <h2 class="text-4xl font-bold mb-6">About Our Company</h2>
            <p class="text-gray-600 mb-4">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            <p class="text-gray-600 mb-8">
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur
            </p>
            <button class="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg transition-colors">
              CONTACT US
            </button>
          </div>
        </div>
  
        <!-- Características -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div class="text-center">
            <div class="text-yellow-500 mb-4">
              <svg class="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2zM9 16H7v-2h2v2zm0-4H7v-2h2v2zm0-4H7V6h2v2zm8 8h-6v-2h6v2zm0-4h-6v-2h6v2zm0-4h-6V6h6v2z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">Free Mobile App</h3>
            <p class="text-gray-600">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laud.
            </p>
            <a href="#" class="text-green-500 hover:text-green-600 inline-block mt-4">LEARN MORE</a>
          </div>
  
          <div class="text-center">
            <div class="text-yellow-500 mb-4">
              <svg class="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.88-11.71L10 14.17l-1.88-1.88a.996.996 0 10-1.41 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7a.996.996 0 10-1.41-1.41z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">100% Cashback</h3>
            <p class="text-gray-600">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laud.
            </p>
            <a href="#" class="text-green-500 hover:text-green-600 inline-block mt-4">LEARN MORE</a>
          </div>
  
          <div class="text-center">
            <div class="text-yellow-500 mb-4">
              <svg class="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">Excellent Support</h3>
            <p class="text-gray-600">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laud.
            </p>
            <a href="#" class="text-green-500 hover:text-green-600 inline-block mt-4">LEARN MORE</a>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script lang="ts">
  export default {
    name: 'AboutSection'
  }
  </script>