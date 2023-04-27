<template>
  <br>
  <dropDownPerfil />
  <modalRegistro />
  <editarPerfil />
</template>

<script>
import dropDownPerfil from './components/perfil/dropDownPerfil.vue';
import modalRegistro from './components/login/modalRegistro.vue';
import editarPerfil from './components/perfil/editarPerfil';

export default {
  name: 'App',
  components: {
    dropDownPerfil,
    modalRegistro,
    editarPerfil
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
