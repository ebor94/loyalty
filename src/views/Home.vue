<template>
    <div>
      <TopBar  @mostrarLogin="toggleMostrarLogin" />
      <Header></Header>
      <Slider pathSlider="/src/assets/img/pagina-home.jpg"></Slider>
      <HeroSlider />
      <ExperienceSection />
      <about/>
      <Brands />
      <LatestCupon />
      <CallToAction />
     <!--  <Testimonial></Testimonial> -->
      <Footer></Footer>

       <!-- <Modal 
      :showModal="showModal" 
      title="Comunicado" 
      message="" 
      image="/assets/img/comunicado-italpuntos.jpg" 
      imageAlt="Comunicado Italpuntos" 
      @confirm="handleConfirm" 
      @cancel="handleCancel" 
    /> -->
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
  import {onMounted, ref} from 'vue';
import Modal from '../components/Modal.vue'
const showModal = ref(false);
  const mostrarLogin = ref(false);
const mostrarRegistro = ref(false);
const toggleMostrarLogin = () => {
  mostrarLogin.value = !mostrarLogin.value;
  mostrarRegistro.value = false; // Ocultar registro si se muestra login

};

const handleConfirm = () => {
  console.log('Usuario confirmó');
  showModal.value = false;
};

const handleCancel = () => {
  console.log('Usuario canceló');
  showModal.value = false;
};

// Mostrar el modal cuando el componente se monte
onMounted(() => {
  showModal.value = true;
});

 </script>
