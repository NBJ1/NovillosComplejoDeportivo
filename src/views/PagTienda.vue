<template>
    <div>
          <navTienda/>
          <menuTienda/>
            
    </div>
    </template>
    
<script>
    
    import navTienda from '@/components/tienda/navTienda.vue';
    import menuTienda from '@/components/tienda/menuTienda.vue';
    
    
        export default {
       
        components: {
            navTienda,
            menuTienda,
            
    }
    }
</script>
    
<style scoped>
    
</style>