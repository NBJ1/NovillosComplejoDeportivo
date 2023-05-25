<template>
    <div>

        <Ranking/>
        <navRanking/>


    </div>

</template>

<script>

    import Ranking from '@/components/ranking/vistaRanking.vue';
    import navRanking from '@/components/ranking/navRanking.vue';

    export default {
       
       components: {
   Ranking,
   navRanking
}
   }
</script>

<style scoped>

</style>