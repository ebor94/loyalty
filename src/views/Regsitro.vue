<template>
    <div>
        <TopBar />
        <Header></Header>
        <SlideRegistro :Titulo="mostrarComponente"></SlideRegistro>
        <Login    v-if="mostrarComponente === 'login'" @mostrarRegistro="cambiarComponente('Registro')" ></Login>
        <Registro v-if="mostrarComponente === 'Registro'" @mostrarLogin="cambiarComponente('login')" ></Registro>
        <Footer></Footer>
    </div>
</template>
<script setup lang="ts">
//@ts-ignore
import TopBar from '../components/TopBar.vue'
//@ts-ignore
import Header from '../components/Header.vue'
//@ts-ignore
import SlideRegistro from '../components/SlideRegistro.vue'
//@ts-ignore
import Registro from '../components/Registro.vue';
//@ts-ignore
import Login from '../components/Login.vue';
import {ref} from 'vue';
const mostrarComponente = ref<'login' | 'Registro'>('login'); 
const cambiarComponente = (componente: 'login' | 'Registro') => {
  mostrarComponente.value = componente;
};


</script>
