<template>
<div>
      <navReservas/>
      <DivFotosReserva/>
      <divReservaHoras/>
      <FooterReserva/>
</div>
</template>

<script>

import DivFotosReserva from '@/components/reservas/divFotosReserva.vue';
import divReservaHoras from '@/components/reservas/divreservaHoras.vue';
import FooterReserva from '@/components/reservas/footerReserva.vue';
import navReservas from '@/components/reservas/navReservas.vue';

    export default {
    name: 'PagReservas',
    components: {
    navReservas,
    DivFotosReserva,
    FooterReserva,
    divReservaHoras
}
}
</script>

<style scoped>

</style>