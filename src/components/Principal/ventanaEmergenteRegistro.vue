<template>
  <div>
    <!-- Inicio de Ventana Emergente Registrarse-->
    <div
      class="modal fade"
      id="signupModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h3 style="color: black">Registrarse</h3>
            <button
              type="button"
              class="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body p-5">
            <form id="signup-form">
              <label for="email">Email:</label>
              <input
                type="text"
                id="signup-email"
                class="form-control mb-3"
                placeholder="Correo"
                required
                v-model="correo"
              />

              <label for="password">Contraseña:</label>
              <input
                type="password"
                id="signup-password"
                class="form-control mb-3"
                placeholder="Contraseña"
                required
                v-model="contraseña"
              />
              <label for="Nombre">Nombre:</label>
              <input
                type="text"
                id="username"
                class="form-control mb-3"
                placeholder="Nombre"
                required
                v-model="nombre"
              />
              <label for="Apellido">Apellido:</label>
              <input
                type="text"
                id="lastname"
                class="form-control mb-3"
                placeholder="Apellido"
                required
                v-model="apellido"
              />
              <label for="phone">Teléfono:</label>
              <input
                type="number"
                id="phone"
                class="form-control mb-3"
                placeholder="Teléfono"
                required
                v-model="telefono"
              />
              
              

              

              <button type="submit" class="btn btn-success" @click="validar">
                Crear cuenta
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- Fin de Ventana Emergente Registrarse-->
  </div>
</template>

<script>

import { createUserWithEmailAndPassword } from "firebase/auth";

import { doc, setDoc } from "firebase/firestore"; 
export default {
  data(){
    return{
      nombre:"",
      apellido:"",
      telefono: "",
      correo:"",
      contraseña:"",
    }
  },
  methods:{
    
	  async validar(){
      
      
      /*
      console.log(this.correo)
      console.log(this.contraseña)
      console.log(this.nombre)
      console.log(this.apellido)
      console.log(this.telefono)
      */
      let eRegular = /[a-zA-Z0-9]+@(gmail|outlook|Utalca)\.com|cl|org|es/; 
      const fecha = new Date();

      let mes = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
      const inicio = fecha.getDate()+" de "+mes[fecha.getMonth()]+" del "+fecha.getFullYear();
      
      if(eRegular.test(this.correo)){ 
        try {
          console.log("hola registro")
          const credenciales = await createUserWithEmailAndPassword(this.$store.state.auth,this.correo,this.contraseña)
          const user = this.$store.state.auth.currentUser;
            if(user){
              user.displayName = this.nombre


              await setDoc(doc(this.$store.state.db, "usuario",user.uid), { //db.collection("usuario").doc(cred.user.uid).set({
                nombre: this.nombre,
                apellido: this.apellido,
                telefono: this.telefono,
              });

              await setDoc(doc(this.$store.state.db, "membresia",user.uid), { //db.collection("usuario").doc(cred.user.uid).set({
                HorasReservas: 2,
                ReservasDescuento: 0,
                ReservasGratis: 0,
                Nivel:"Bronce",
                Puntos:300,
                Inicio: inicio,
                Termino:"Indefinido",
              });
              this.$store.state.mostrar = false
            //user.displayName = this.nombre +" "+ this.apellido
            }
  
          swal.fire({
              icon:'success',
              title:'Felicitaciones',
              text:'Ya eres un nuevo usuario del Complejo Deportivo Los Novillos',
          })
        }
        catch (error) {
         if(error.code=== 'auth/email-already-in-use'){
          swal.fire({
              icon:'error',
              title:'Este Correo esta en Uso',
              text:'Ingresa un nuevo correo',
          })
         }else if(error.code === 'auth/weak-password'){
          swal.fire({
              icon:'error',
              title:'Contraseña Invalida',
              text:'Ingresa una contraseña con minimo de 4 caracteres, donde pueden ser letras o numeros',
          })

         }
        }
    }else{
      swal.fire({
          icon:'error',
          title:'Correo Invalido',
          text:'Ingresa un correo con formato dominio@gmail.com o usuario@gmail.cl',
      })
    } 

    const singupModal = document.querySelector('#signupModal')
    const modal =bootstrap.Modal.getInstance(singupModal)
    modal.hide();
    
  }
}
};

</script>

<style scoped>
.btn-success{
  color: white;
}
</style>
