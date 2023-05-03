<template>
  <div id="app">

    <navPrincipal/>

    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/ola"> | ola</router-link>
    </nav>

    
    <router-view/>
  </div>
</template>

<script>
import navPrincipal from './components/Principal/navPrincipal.vue';


export default{

components:{
  navPrincipal,
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
