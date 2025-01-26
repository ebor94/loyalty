<template>
    <div>
      <TopBar />
      <Header></Header>
      <Slider pathSlider="./src/assets/img/pagina-home.jpg"></Slider>
      <HeroSlider />
      <ExperienceSection />
      <about/>
      <Brands />
      <LatestCupon />
      <CallToAction />
      <Testimonial></Testimonial>
      <Footer></Footer>
    </div>
  </template>
  
  <script setup lang="ts">
// @ts-ignore
  import TopBar from '../components/TopBar.vue'
  // @ts-ignore
  import Header from '../components/Header.vue'
    // @ts-ignore
  import Slider from '../components/Slider.vue'
  import ExperienceSection from '../components/experience.vue'
  // @ts-ignore
  import about from '../components/about.vue'
  import Brands from '../components/brands.vue'
  import LatestCupon from '../components/LatestCupon.vue'
  // @ts-ignore
  import CallToAction from '../components/CallToAction.vue'
    // @ts-ignore
  import Testimonial from '../components/Testimonial.vue'
  import Footer from '../components/Footer.vue'
 </script>
