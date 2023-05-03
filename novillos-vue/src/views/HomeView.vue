<template>
  <div>
    
 <carruselImagenes/>
 <sectionComplejo/>
 <sectionMembresia/>
 <sectionCanchas/>
 <sectionNosotros/>
 <sectionContactanos/>
 <ventanaEmergenteIniciar/>
 <ventanaEmergenteRegistro/>
 <footerGeneral/>

  </div>
</template>

<script>
// @ is an alias to /src

import carruselImagenes from '@/components/Principal/carruselImagenes.vue';
import sectionComplejo from '@/components/Principal/sectionComplejo.vue';
import sectionMembresia from '@/components/Principal/sectionMembresia.vue';
import sectionCanchas from '@/components/Principal/sectionCanchas.vue';
import sectionNosotros from '@/components/Principal/sectionNosotros.vue';
import sectionContactanos from '@/components/Principal/sectionContactanos.vue';
import ventanaEmergenteIniciar from '@/components/Principal/ventanaEmergenteIniciar.vue';
import ventanaEmergenteRegistro from '@/components/Principal/ventanaEmergenteRegistro.vue';
import footerGeneral from '@/components/Principal/footerGeneral.vue';



export default {
  name: 'HomeView',
  components: {
   
  
    carruselImagenes,
    sectionComplejo,
    sectionMembresia,
    sectionCanchas,
    sectionNosotros,
    sectionContactanos,
    ventanaEmergenteIniciar,
    ventanaEmergenteRegistro,
    footerGeneral,



  }
}
</script>
