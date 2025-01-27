<template>
    <div>
        <TopBar />
        <Header></Header>
        <SlideRegistro></SlideRegistro>
        <Login    v-if="mostrarComponente === 'login'" @mostrarRegistro="cambiarComponente('registro')" ></Login>
        <Registro v-if="mostrarComponente === 'registro'" @mostrarLogin="cambiarComponente('login')" ></Registro>
        <Footer></Footer>
    </div>
</template>
<script setup lang="ts">
//@ts-ignore
import TopBar from '../components/TopBar.vue'
//@ts-ignore
import Header from '../components/Header.vue'
import SlideRegistro from '../components/SlideRegistro.vue'
//@ts-ignore
import Registro from '../components/Registro.vue';
//@ts-ignore
import Login from '../components/Login.vue';
import {ref} from 'vue';
const mostrarComponente = ref<'login' | 'registro'>('login'); 
const cambiarComponente = (componente: 'login' | 'registro') => {
  mostrarComponente.value = componente;
};


</script>
