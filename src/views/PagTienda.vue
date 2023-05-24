<template>
    <div>
          <navTienda/>
          <menuTienda/>
          <PagoTienda/>
    
        
    </div>
    </template>
    
<script>
    
    import navTienda from '@/components/tienda/navTienda.vue';
    import menuTienda from '@/components/tienda/menuTienda.vue';
    import PagoTienda from '@/components/tienda/pagoTienda.vue';
    
    
        export default {
       
        components: {
    navTienda,
    menuTienda,
    PagoTienda
}
    }
</script>
    
<style scoped>
    
</style>