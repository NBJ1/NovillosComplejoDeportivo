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
                            placeholder="MM-AA"
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
                        <br>
                        <button  class="btn btn-primary" @click="realizarPago">
                        Pagar 
                        </button>
                   
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
  import {getDocs,collection,addDoc,doc} from 'firebase/firestore'

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
        const fecha = new Date();
        let mes = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        const dia = fecha.getDate()+" de "+mes[fecha.getMonth()]+" del "+fecha.getFullYear();
        const hora = fecha.getHours() + ":" + fecha.getMinutes();


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
            const randomNumber = Math.random();
            if(randomNumber < 0.95){
                if(this.$store.state.tienda === 1){
                  const docRef = await addDoc(collection(this.$store.state.db, "Compras"), {
                    fecha: dia,
                    hora: hora,
                    precio: "$319.990",
                    producto: "Pala Bullpadel",
                    refUsuario: user.uid,
                  });

                swal.fire({
                  icon:'success',
                  title:'Pago Exitoso',
                  text:'Tu compra se a realizado con exito',
                })

                }else if(this.$store.state.tienda === 2){
                  const docRef = await addDoc(collection(this.$store.state.db, "Compras"), {
                    fecha: dia,
                    hora: hora,
                    precio: "$89.990",
                    producto: "Bolso Paletero",
                    refUsuario: user.uid,
                  });

                  swal.fire({
                    icon:'success',
                    title:'Pago Exitoso',
                    text:'Tu compra se a realizado con exito',
                  })

                }else if(this.$store.state.tienda === 3){
                  const docRef = await addDoc(collection(this.$store.state.db, "Compras"), {
                    fecha: dia,
                    hora: hora,
                    precio: "$109.990",
                    producto: "Zapatillas Bullpadel",
                    refUsuario: user.uid,
                  });

                  swal.fire({
                    icon:'success',
                    title:'Pago Exitoso',
                    text:'Tu compra se a realizado con exito',
                  })

                }else if(this.$store.state.tienda === 4){
                  const docRef = await addDoc(collection(this.$store.state.db, "Compras"), {
                    fecha: dia,
                    hora: hora,
                    precio: "$119.990",
                    producto: "Zapatillas Nox",
                    refUsuario: user.uid,
                  });

                  swal.fire({
                    icon:'success',
                    title:'Pago Exitoso',
                    text:'Tu compra se a realizado con exito',
                  })

                }else if(this.$store.state.tienda === 5){
                  const docRef = await addDoc(collection(this.$store.state.db, "Compras"), {
                    fecha: dia,
                    hora: hora,
                    precio: "$9.990",
                    producto: "Calcetin Nox",
                    refUsuario: user.uid,
                  });

                  swal.fire({
                    icon:'success',
                    title:'Pago Exitoso',
                    text:'Tu compra se a realizado con exito',
                  })

                }else if(this.$store.state.tienda === 6){
                  const docRef = await addDoc(collection(this.$store.state.db, "Compras"), {
                    fecha: dia,
                    hora: hora,
                    precio: "$25.990",
                    producto: "Polera Wilson",
                    refUsuario: user.uid,
                  });

                  swal.fire({
                    icon:'success',
                    title:'Pago Exitoso',
                    text:'Tu compra se a realizado con exito',
                  })

                }else if(this.$store.state.tienda === 7){
                  const docRef = await addDoc(collection(this.$store.state.db, "Compras"), {
                    fecha: dia,
                    hora: hora,
                    precio: "$8.990",
                    producto: "Pelotas Head Padel",
                    refUsuario: user.uid,
                  });

                  swal.fire({
                    icon:'success',
                    title:'Pago Exitoso',
                    text:'Tu compra se a realizado con exito',
                  })

                }else if(this.$store.state.tienda === 8){
                  const docRef = await addDoc(collection(this.$store.state.db, "Compras"), {
                    fecha: dia,
                    hora: hora,
                    precio: "$39.990",
                    producto: "Poleron Wilson Gris",
                    refUsuario: user.uid,
                  });

                  swal.fire({
                    icon:'success',
                    title:'Pago Exitoso',
                    text:'Tu compra se a realizado con exito',
                  })

                }
               
               const singupModal = document.querySelector('#Modal_Pago')
               const modal =bootstrap.Modal.getInstance(singupModal)
               modal.hide();
             

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
  
  