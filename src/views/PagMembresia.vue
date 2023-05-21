<template>
  <div>
 <!-- Membresia -->

<navMembresia/>
<FotoMenuMembresia/>
<tiposMembresias/>
<pqMembresia/>
<ModalPago/>


  </div>
</template>

<script>
import navMembresia from '@/components/membresia/navMembresia.vue';
import FotoMenuMembresia from '@/components/membresia/fotoMenuMembresia.vue';
import tiposMembresias from '@/components/membresia/tiposMembresias.vue';
import pqMembresia from '@/components/membresia/pqMembresia.vue';
import ModalPago from '@/components/membresia/modalPago.vue';

  export default {
  components:{
    navMembresia,
    FotoMenuMembresia,
    tiposMembresias,
    pqMembresia,
    ModalPago
}
  }


//Vista membresia: 


</script>

<style scoped>

</style>