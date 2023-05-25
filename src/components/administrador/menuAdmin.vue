<template>
  <table class="table table-hover table-bordered">
    <thead class="bg-success">
      <tr>
        <th class="text-left">
          <h1>ID</h1>
        </th>
        <th class="text-left">
          <h1>Nombres</h1>
        </th>
        <th class="text-left">
          <h1>Apellidos</h1>
        </th>
        <th></th> <!-- Nueva columna para el botón de eliminar -->
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in tablaDatos" :key="item.refUsuario">
        <td>{{ item.refUsuario }}</td>
        <td>{{ item.nombre }}</td>
        <td>{{ item.apellido }}</td>
        <td>
          <button @click="eliminarUsuario(item.refUsuario)" class="btn btn-danger">Eliminar</button>
        </td> <!-- Botón de eliminar para cada usuario -->
      </tr>
    </tbody>
  </table>
</template>


<script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js"></script>


<script>



import {getUser } from 'firebase/auth';
import { getAuth, deleteUser } from "firebase/auth"; //Para eliminar usuario
import { getDocs, collection, deleteDoc, doc, snapshotEqual, onSnapshotsInSync } from 'firebase/firestore';
import NavReservas from '../reservas/navReservas.vue';
import { FirebaseError } from 'firebase/app';

export default {
  data() {
    return {
      id: "", 

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


    async eliminarUsuario(id) {
      try {

        //Elimina el documento usuario
        const usuarioRef = doc(this.$store.state.db, 'usuario', id);
        console.log(id)
        await deleteDoc(usuarioRef); 

        
        deleteUser(usuarioRef).then(() => {
        
          

          console.log("su mall")
  

          }).catch((error) => {
            console.log(error)
          });



        
        // Actualizar la lista de usuarios después de eliminar uno
        await this.recUsuarios();
        
        console.log('Usuario eliminado correctamente');
      } catch (error) {
        console.error('Error al eliminar el usuario:', error);
      }
    },


  },






    };
</script>

<style scoped>

</style>
