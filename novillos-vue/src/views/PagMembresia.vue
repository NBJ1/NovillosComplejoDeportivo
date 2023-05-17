<template>
  <div>
 <!-- Membresia -->

<navMembresia/>
<FotoMenuMembresia/>
<tiposMembresias/>
<pqMembresia/>


  </div>
</template>

<script>
import navMembresia from '@/components/membresia/navMembresia.vue';
import FotoMenuMembresia from '@/components/membresia/fotoMenuMembresia.vue';
import tiposMembresias from '@/components/membresia/tiposMembresias.vue';
import pqMembresia from '@/components/membresia/pqMembresia.vue';

  export default {
  components:{
    navMembresia,
    FotoMenuMembresia,
    tiposMembresias,
    pqMembresia,
  }
  }


//Vista membresia: 


</script>

<style scoped>

</style>