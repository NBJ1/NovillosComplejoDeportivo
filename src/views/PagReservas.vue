<template>
<div>
      <navReservas/>
      <DivFotosReserva/>
      <DivreservaHoras/>
      <FooterReserva/>
</div>
</template>

<script>

import DivFotosReserva from '@/components/reservas/divFotosReserva.vue';
import DivreservaHoras from '@/components/reservas/divreservaHoras.vue';
import FooterReserva from '@/components/reservas/footerReserva.vue';
import navReservas from '@/components/reservas/navReservas.vue';


    export default {
   
    components: {
    navReservas,
    DivFotosReserva,
    DivreservaHoras,
    FooterReserva,
}
}
</script>

<style scoped>

</style>