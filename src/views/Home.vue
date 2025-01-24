<template>
  
      <TopBar />
        <Header></Header>

      <Slider pathSlider="./src/assets/img/pagina-home.jpg"></Slider>
      <HeroSlider />
      <ExperienceSection />
      <AboutSection/>
      <Brands />
      <LatestCupon />
      <CallToAction />
      <Testimonial></Testimonial>
      <Footer></Footer>
  </template>
  
  <script setup lang="ts">

  import TopBar from '../components/TopBar.vue'
  import Header from '../components/Header.vue'
    // @ts-ignore
  import Slider from '../components/Slider.vue'
  import ExperienceSection from '../components/experience.vue'
  import AboutSection from '../components/about.vue'
  import Brands from '../components/brands.vue'
  import LatestCupon from '../components/LatestCupon.vue'
  import CallToAction from '../components/CallToAction.vue'
    // @ts-ignore
  import Testimonial from '../components/Testimonial.vue'
  import Footer from '../components/Footer.vue'
 </script>
