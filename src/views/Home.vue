<template>
    <div>
      <TopBar />
      <Headers />
      <HeroSlider />
      <ExperienceSection />
      <AboutSection/>
      <Brands />
      <LatestCupon />
    </div>
  </template>
  
  <script setup lang="ts">
  import TopBar from '../components/TopBar.vue'
  import Headers from '../components/Header.vue'
  import HeroSlider from '../components/Slider.vue'
  import ExperienceSection from '../components/experience.vue'
  import AboutSection from '../components/about.vue'
  import Brands from '../components/brands.vue'
  import LatestCupon from '../components/LatestCupon.vue'
 </script>
