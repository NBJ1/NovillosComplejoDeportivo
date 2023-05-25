



<template>



<div class="container">
    <div class="row">
      <div class="col-lg-3">
        <h3>Administrador</h3>
        
        <nav class="navbar navbar-expand-lg navbar-light bg-light flex-column">
          <ul class="navbar-nav flex-column">
            <li class="nav-item">
              <a class="nav-link" href="#">Gestión de usuarios</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Stock</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Otras funcionalidades ...</a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="col-lg-6">
        <h1>Gestion de Usuarios</h1>
        <table class="table table-hover table-bordered">
          <thead>
            <tr class="bg-success">
              <th class="text-left">
                <h4>ID</h4>
              </th>
              <th class="text-left">
                <h4>Nombres</h4>
              </th>
              <th class="text-left">
                <h4>Apellidos</h4>
              </th>
              <th class="no-border"></th>
              <!-- Nueva columna para el botón de eliminar sin borde -->
              <th class="no-border"></th>
              <!-- Nueva columna para el botón de agregar sin borde -->
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in tablaDatos" :key="item.refUsuario">
              <td>{{ item.refUsuario }}</td>
              <td>{{ item.nombre }}</td>
              <td>{{ item.apellido }}</td>
              <td>
                <button
                  @click="eliminarUsuario(item.refUsuario, index)"
                  class="btn btn-danger">
                  Eliminar
                </button>
              </td>
              <td>
                <button
                  @click=""
                  class="btn btn-success">
                  Actualizar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-lg-3">
        <h3>Acciones
        </h3>
        <button class=" btn btn-success">Agregar Usuario</button>
      </div>
    </div>
  </div>
<!--Ventana emergente Inicio-->












</template>
<script>
//para la trikiñuela

import {
  deleteUser,
  signInWithEmailAndPassword,
  signOut,
  auth,
  getAuth,
} from "firebase/auth";

import {
  getDocs,
  collection,
  deleteDoc,
  doc,
  snapshotEqual,
  onSnapshotsInSync,
} from "firebase/firestore";

export default {
  data() {
    return {
      //para guardar el usuario:
      correoAux: "",
      contraseñaAux: "",
      correoAct: "",
      contraseñaAct: "",

      id: "",

      tablaDatos: [],
    };
  },

  created() {
    this.recUsuarios();
  },

  methods: {
    async recUsuarios(index) {
      const tablaRef = await getDocs(
        collection(this.$store.state.db, "usuario")
      );
      const datos = tablaRef.docs.map((doc) => doc.data());

      this.tablaDatos = datos;
    },

    async eliminarUsuario(id, index) {
      try {
        //Credenciales de cuenta a acceder para eliminar
        this.correoAux = this.tablaDatos[index].correo;
        this.contraseñaAux = this.tablaDatos[index].contraseña;

        //Obtener nuestras credenciales:
        const user = this.$store.state.auth.currentUser;
        console.log("primer printttttttt: " + user.uid);
        //Tenemos el usuario

        this.tablaDatos.forEach((referencia) => {
          if (referencia.refUsuario == user.uid) {
            //Guardar credenciales actuales:
            this.correoAct = referencia.correo;
            this.contraseñaAct = referencia.contraseña;
          }
        });
        //Iniciar sesión con el usuario seleccionado

        //Cerramos el usuario activo actualmente
        await signOut(this.$store.state.auth);
        console.log("CerrarSesion: " + user.uid);
        //Iniciar el usuario
        //   const auth = getAuth(this.$store.state.app2);

        const credenciales = await signInWithEmailAndPassword(
          this.$store.state.auth,
          this.correoAux,
          this.contraseñaAux
        );

        //Delete aut
        const userAux = this.$store.state.auth.currentUser;
        console.log("segundo printttttttt: " + userAux.uid);
        await deleteUser(userAux).then(() => {
          signOut(this.$store.state.auth);
          console.log("Se borro la autentificacion");
        });
        //Inicio sesión de nuevo
        const credencialesActuales = await signInWithEmailAndPassword(
          this.$store.state.auth,
          this.correoAct,
          this.contraseñaAct
        );
        console.log("credenciales printttttttt" + credencialesActuales);

        console.log("aux : " + this.correoAux);
        console.log("act : " + this.correoAct);

        //Elimina el documento usuario
        const usuarioRef = doc(this.$store.state.db, "usuario", id);
        // console.log("UsuarioRef"+usuarioRef)
        await deleteDoc(usuarioRef);
        //Actualizar la lista de usuarios después de eliminar uno
        await this.recUsuarios();

        console.log("Usuario eliminado correctamente");
      } catch (error) {
        console.error("Error al eliminar el usuario:", error);
      }
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 200px;
}

.table {
  background-color: #fff;
  margin-top: 20px;
}

.table-bordered {
  border: 2px solid #000;
}

.table-hover tbody tr:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.bg-success {
  background-color: #28a745 !important;
}

.text-left {
  text-align: left;
}

.no-border {
  border: none !important;
}


	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');
	* {
	font-family: 'Montserrat', sans-serif;
}
</style>