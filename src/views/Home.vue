<template>
    <div>
      <TopBar />
      <Headers />
      <main>
        <slot></slot>
      </main>
    </div>
  </template>
  
  <script setup lang="ts">
  import TopBar from '../components/TopBar.vue'
  import Headers from '../components/Header.vue'
 </script>
