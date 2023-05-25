<template>
    <div>
        <h3 class="title">Ranking mensual de clientes</h3>

        <table class="table table-hover table-bordered">
            <thead class="bg-success">
            <tr>
                <th class="text-left">
                <h1>Ranking</h1>
                </th>
                
                <th class="text-left">
                <h1>Nombre</h1>
                </th>
                <th class="text-left">
                <h1>Apellido</h1>
                </th>
                <th class="text-left">
                <h1>Puntos</h1>
                </th>
                
            </tr>
            </thead>
            <tbody>
            <tr cont=0 v-for="item in tablaDatos" :key="item.nombre">

                <td>{{  }}</td> 
                <td>{{ item.nombre }}</td>
                <td>{{ item.apellido }}</td>
                <td>{{  }}</td> 
                
            </tr>
            </tbody>
        </table>


        <div class="">
              <button class="btn btn-outline-success " type="submit"  @click="obtenerUsuarios" id="botonRanking">AAAA</button>
        </div>

    </div>
</template>

<script>



import {getUser } from 'firebase/auth';
import { getAuth, deleteUser } from "firebase/auth"; //Para eliminar usuario
import { getDocs, collection, deleteDoc, doc, snapshotEqual, onSnapshotsInSync } from 'firebase/firestore';
import NavReservas from '../reservas/navReservas.vue';

export default {
  data() {
    return {
      tablaDatos: [],
    };
  },

  created() {
    this.recUsuarios();
  },

  methods: {
    async recUsuarios() {
      const tablaRef = await getDocs(collection(this.$store.state.db, 'usuario'));
      const datos = tablaRef.docs.map((doc) => doc.data());

      this.tablaDatos = datos;
    },


    


  },


    };
</script>

<style scoped>

.title{
    margin-top: 110px;
}
.tablehead{
    background-color:#2a8b17;
    color: white;
    font-weight: bold;
    height: 45px;
   
}
.rrow{
    background: #eeeeee;
    height: 40px;
}

.drow{
    background: #ffffff;
    height: 35px;
}

tr{
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
}

table{
    margin-top: 30px;
    width: 900px;
    text-indent: initial;
    border-spacing: 2px;
    border-collapse: collapse;
    border: 0;
    table-layout: fixed;
    box-sizing: border-box;
    margin-left: 200px;
}

td{
    display: table-cell;
    vertical-align: inherit;
}
</style>