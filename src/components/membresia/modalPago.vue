<template>
  <div>
      <div class="modal fade"
      id="Modal_Pago">
        <div class="modal-dialog">
          <div class="modal-content" style="width: ;">
            <div class="modal-header justify-content-center">
                <h1>Medios de Pago</h1>
            </div>
            <!--Titulo-->
            <div class="modal-body" style="width: ;">
                
               
                <div class="container " id="dos">
                    <!-- Bloque 2 -->
                    
                    <div class="card p-4">
                    <!-- Inicio form -->
                    <div>
                        <h3>Pago con Tarjeta</h3>
                    </div>
                    <form action="#" method="post">
                        <div class="form-group">
                        <label for="nombre">Nombre en la tarjeta:</label>
                        <input
                            type="text"
                            class="form-control"
                            id="nombre"
                            name="nombre"
                            required
                            v-model="Nombre"
                        />
                        </div>
                        <div class="form-group">
                        <label for="tarjeta">Número de tarjeta:</label>
                        <input
                            type="text"
                            class="form-control"
                            id="tarjeta"
                            name="tarjeta"
                            required
                            v-model="numero"
                        />
                        </div>
                        <div class="form-group">
                        <label for="vencimiento">Fecha de vencimiento:</label>
                        <input
                            type="text"
                            class="form-control"
                            id="vencimiento"
                            name="vencimiento"
                            placeholder="MM/AA"
                            required 
                            v-model = "fechaV"
                        />
                        </div>
                        <div class="form-group">
                        <label for="cvv">CVV:</label>
                        <input
                            type="text"
                            class="form-control"
                            id="cvv"
                            name="cvv"
                            required
                            v-model = "codigo"
                        />
                        </div>
                        <div class="form-group">
                        <label for="monto">Monto a pagar:</label>
                        <div class="input-group">
                            <div class="input-group-prepend">
                            <span class="input-group-text">$</span>
                            </div>
                            <input
                            type="text"
                            class="form-control"
                            id="monto"
                            name="monto"
                            required
                            v-model ="dinero"
                            />
                        </div>
                        </div>
                        <button  class="btn btn-primary" @click="realizarPago">
                        Pagar 
                        </button>
                    </form>
                    </div>
                    <!-- Fin form -->
                </div>
                
            
            </div>
          </div>
        </div>
      </div>
    </div>
    
      
  </template>
  
  <script>
  import { doc, updateDoc } from "firebase/firestore";
  
  export default {
    data() {
      return {
       // activeModal: null,
        
      };
    },
    methods: {
      async realizarPago(){
        let eRegular = /[0-9]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]/;
        let eRegular2 = /[A-Za-z]/;
        let eRegular3 = /[0-9]+[0-9]+-+[0-9]+[0-9]/;
        let eRegular4 = /[0-9]+[0-9]+[0-9]/;
        if(this.Nombre === null || !eRegular2.test(this.Nombre)){
          swal.fire({
            icon:'error',
            title:'Error',
            text:'Porfavor ingrese el nombre de la tarjeta',
          })
        } else if(this.numero === null || !eRegular.test(this.numero) || this.numero.length != 10 ){
          swal.fire({
            icon:'error',
            title:'Error',
            text:'Porfavor ingrese el número de la tarjeta',
          })
        } else if (this.fechaV === null || !eRegular3.test(this.fechaV)|| this.fechaV.length != 5){
          swal.fire({
            icon:'error',
            title:'Error',
            text:'Porfavor ingrese la fecha de vencimiento de su tarjeta',
          })
        } else if (this.codigo === null || !eRegular4.test(this.codigo) || this.codigo.length != 3 ){
          swal.fire({
            icon:'error',
            title:'Error',
            text:'Porfavor ingrese el CVV de su tarjeta',
          })
        }  else{
            const user = this.$store.state.auth.currentUser;
            const suscripcionRef = doc(this.$store.state.db, "membresia",user.uid);
            const randomNumber = Math.random();
            if(randomNumber < 0.95){
              if(this.$store.state.suscripcion === 1){
                 await updateDoc(suscripcionRef, {
                   HorasReservas: 5,
                   ReservasDescuento: 20,
                   ReservasGratis: 1,
                   nivel: "Oro",
                 }); 

                 swal.fire({
                   icon:'success',
                   title:'Pago Exitoso',
                   text:'Ya tienes tu membresia tipo Oro',
                 })

               }else if(this.$store.state.suscripcion === 2){
                 await updateDoc(suscripcionRef, {
                   HorasReservas: 7,
                   ReservasDescuento: 50,
                   ReservasGratis: 3,
                   nivel: "Platino",
                 });

                swal.fire({
                  icon:'success',
                  title:'Pago Exitoso',
                  text:'Ya tienes tu membresia tipo Platino',
                })
               }else if(this.$store.state.suscripcion === 3){
                 await updateDoc(suscripcionRef, {
                   HorasReservas: 2,
                   ReservasDescuento: 0,
                   ReservasGratis: 0,
                   nivel: "Bronce",
                 });

                 swal.fire({
                   icon:'success',
                   title:'Pago Exitoso',
                   text:'Ya tienes tu membresia tipo Bronce',
                 })
            
               }
               const singupModal = document.querySelector('#Modal_Pago')
               const modal =bootstrap.Modal.getInstance(singupModal)
               modal.hide();
               this.$store.state.suscripcion = 0 

            }else{
               swal.fire({
                 icon:'error',
                 title:'Pago Fallido',
                 text:'Vuelve a ingresar los datos de tu metodo de pago',
               })
             }
          }
      }
    },
  };
  </script>
  
  <style scoped>
  .container {
    padding-top: 50px;
    padding-bottom: 50px;
  }
  
  .fondo {
    height: 120vh;
    background-color: white;
  }
  

  
 
 
  #dos {
    background: white;
    /* box-shadow: 32px 32px 64px #a6a6a6, -32px -32px 64px #ffffff; */
   
    
    place-items: center;
  
    border: 1px solid #2a8b18;
  }
  
  .card {
    margin: 8px;
    background-color: #2c2f33;
    color: whitesmoke;
  }
  button{
    background-color: #F1F6F9;
    color: #2c2f33;
  }
  .btn:hover {
    background-color: #2a8b18;
  }
  .modal.show.d-block {
    display: block;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .PagoBien {
    color: rgb(144, 217, 34);
  }
  .PagoMal {
    color: rgb(209, 27, 27);
  }
  .fondo{
    background-color: red;
  }

  
  </style>
  
  