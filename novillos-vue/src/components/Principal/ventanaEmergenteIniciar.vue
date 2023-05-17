<template>
  <div>
    <!-- Inicio de Ventana Emergente Iniciar sesion-->

    <div
      class="modal fade"
      id="Login_Modal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalSignin"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h3 style="color: black">Iniciar Sesion</h3>
            <button
              type="button"
              class="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form id="login-form">
              <label for="email">Email</label>
              <input
                type="text"
                id="login-email"
                class="form-control mb-3"
                placeholder="Correo"
                required
                v-model="email"
              />

              <label for="password">Contraseña:</label>
              <input
                type="password"
                id="login-password"
                class="form-control mb-3"
                placeholder="Conraseña"
                required
                v-model="contraseña"
              />
              

              <button type="submit" class="btn btn-success" @click="iniciarsesion">
                Iniciar Sesion
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- Fin Inicio de Ventana Emergente -->
  </div>
</template>

<script>
import { signInWithEmailAndPassword } from "firebase/auth"
export default {

  data(){
      return{
        email: "",
        contraseña: ""
      }
  },
  methods:{
    

	async iniciarsesion(){
    //console.log(this.email)
		
    try {
        
        const credencial = await signInWithEmailAndPassword (this.$store.state.auth, this.email, this.contraseña)
        

        /*-------------ocultar modal--------*/
        const modal = bootstrap.Modal.getInstance(document.querySelector('#Login_Modal'))
        modal.hide()
        /*-------------ocultar modal--------*/
        //---------------notificar------------
        swal.fire({
            icon:'success',
            title:'Bienvenido ',
            text:'Has Iniciado Sesion Correctamente',
        })
        //---------------notificar-------------
        this.$store.state.mostrar = false
        
      
    } catch (error) {
        console.log(error)
        swal.fire({
            icon:'error',
            title:'Error Iniciar sesión',
            text:'Error ingresar Correo o Contraseña',
        })
    }

	}
}

};
</script>

<style scoped>
.btn-success{
  color: white;
}

</style>
