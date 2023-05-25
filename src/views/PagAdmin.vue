<template>
    <div>
        <navPrincipal/>
        <MenuAdmin/>

    </div>
</template>

<script>

import navPrincipal from '@/components/Principal/navPrincipal.vue';
import MenuAdmin from '@/components/administrador/menuAdmin.vue';


        export default {

        components: {

    navPrincipal,
        MenuAdmin,

}
    }
</script>


<style scoped>

</style>