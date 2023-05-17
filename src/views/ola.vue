<template>
    <div>
     
        <vs-input
        type="date"
        v-model="value7"
        label="Date"
        :min="fechaActual"
      />
        {{ value7 }}

    </div>
</template>

<script>
    export default {
       
        data(){
            return{
                value7: 0,
                fechaActual: null
            }
        },

        mounted(){
            this.diaAct()
        },

        methods:{
            diaAct(){
            const hoy = new Date();
            const mes = hoy.getMonth() + 1;
            const dia = hoy.getDate();
            const year = hoy.getFullYear();
            this.fechaActual = `${year}-${mes < 10 ? '0' + mes : mes}-${dia < 10 ? '0' + dia : dia}`
            }
        }

    }
</script>

<style lang="scss" scoped>

</style>