<template>
    <div>
    <TopBar  @mostrarLogin="toggleMostrarLogin" />
    <Header></Header>
    <Footer></Footer>
    </div>
</template>
<script lang="ts" setup>
import {ref} from 'vue';
import Footer from '../components/Footer.vue';
 // @ts-ignore
import Header from '../components/Header.vue';
 // @ts-ignore
import TopBar from '../components/TopBar.vue';

const mostrarLogin = ref(false);
const mostrarRegistro = ref(false);
const toggleMostrarLogin = () => {
  mostrarLogin.value = !mostrarLogin.value;
  mostrarRegistro.value = false; // Ocultar registro si se muestra login

};
</script>