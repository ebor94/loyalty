<template>
    <div>
      <TopBar />
      <Headers />
      <HeroSlider />
      <ExperienceSection />
      <main>
        <slot></slot>
      </main>
    </div>
  </template>
  
  <script setup lang="ts">
  import TopBar from '../components/TopBar.vue'
  import Headers from '../components/Header.vue'
  import HeroSlider from '../components/Slider.vue'
  import ExperienceSection from '../components/experience.vue'
 </script>
