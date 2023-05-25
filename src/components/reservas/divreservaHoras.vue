<template>
  <div id="reservas" >
    <br>
    <br>
  
    <div class="container text-center">
    <div class="row align-items" style="">
      <div class="col">
        <div class="tex-seleccion-deporte">
                  <p>SELECCIONE EL DIA</p>
        </div>
        <!-- PARTE DONDE VA EL CALENDARIO -->
        <div @click="obtenerFecha">
          <v-app class="calendario" >
              <v-date-picker class="ola" v-model="date" color="green darken-3" min="2023-05-25"
          max="2024-05-13"></v-date-picker>
          </v-app>
        </div>
  
  
      
      </div>
        <!-- COLUMNA DE SELECCION DEPORTE -->
      <div class="col">
        <div class="tex-seleccion-deporte">
                  <p>SELECCIONE EL DEPORTE</p>
                  <br>
                  
        </div>
            <v-select class="contenedor_deportes" @change="obtenerDeporte" 
           
              v-model="Deporte"
              :items="states"
              label="Deporte" 
                ></v-select>
                <br>
                <br>
            <div class="tex-seleccion-deporte">
                  <p>SELECCIONE LA HORA</p>
                  <br>
                  
            </div>
  
            <v-select @change="obtenerHoras" 
              v-model="Horas_Reserva"
              :items="horas"
              label="Hora de Reserva" 
            ></v-select>
  
            <br>
            <br>


            <div class="">
              <button class="btn btn-outline-success m-4 " type="submit" :disabled="boton_deshabilitado" @click="btn_verificar"  v-if="mostrarbtnResesrva">
                VERIFICAR HORA
              </button>

              <button class="btn btn-outline-success boton-match"   :disabled="boton_deshabilitado"   @click="guardarMatchmaking" >
                MATCHMAKING
              </button>
   
            



            </div>  

            <br>
            <div class="">
              <button class="btn btn-outline-success " type="submit" :disabled="boton_deshabilitado" @click="btn_reserva" id="botonReserva"    data-bs-toggle="modal" data-bs-target="#Modal_PagoRes" v-if="!mostrarbtnResesrva" >
                RESERVAR
              </button>
            </div>    
            
            
            
  
      </div>

      <div class="col">
        <!-- COLUMNA DE SELECCION DE HORAS -->


      <div class="col">
                   
      </div>
      </div>
  
      </div>
    </div>



    <!-- modallll -->
    <div >
        <div class="modal fade"
        id="Modal_PagoRes" >
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
                          <label >Número de tarjeta:</label>
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
                          <label>Fecha de vencimiento:</label>
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
                          <label>CVV:</label>
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
                      
                          <div class="input-group">
                          
                             
                          </div>
                          </div>
                          <br>
                          <button  class="btn btn-primary" @click ="realizarPago">
                          Pagar 
                          </button>
                    
                      </div>

           

                  </div>
                  
              
              </div>
            </div>
        </div>

    </div>    


    </div>


  </div>

  
  </template>
  
  
  
  <script>
  import { min } from 'date-fns';
  import {getDocs,collection,addDoc,doc, setDoc} from 'firebase/firestore'
  
  
      export default {
  
        data(){
          return{
            date:  null,
            Deporte: null,
            Horas_Reserva: null,
            ocupado:0,
            repetido:0,
            modalReserva: false, 
            Nombre:null,dinero:null,codigo:null,numero:null,fechaV:null,
            activarModal: true,
            mostrarbtnResesrva:true,
     

          states: [
            'Futbol', 'Tenis', 'Basquetball', 
            'Padel', 'Piscina', 'Voleibol',
          ],
          horas: [
            '7:00 - 9:00', '9:00 - 11:00', '11:00 - 13:00', 
            '13:00 - 15:00', '15:00 - 17:00', '17:00 - 19:00',
            '19:00 - 21:00', '21:00 - 23:00',
          ],
            
          }
        },
       methods:{
  
        async obtenerFecha(){
          this.$store.state.Fecha = this.date
         // console.log(this.$store.state.Fecha);
          
          
        },
        obtenerDeporte(){
          this.$store.state.Deporte = this.Deporte
        //  console.log(this.$store.state.Deporte)
          
          },
        obtenerHoras(){
          this.$store.state.Horas_Reserva = this.Horas_Reserva
         // console.log(this.$store.state.Horas_Reserva)
          
        },
  


        async btn_verificar(){
          const querySnapshot = await getDocs(collection(this.$store.state.db,'reservas'))
          querySnapshot.forEach(doc =>{
            if(doc.data().Fecha == this.$store.state.Fecha && 
            doc.data().hora == this.$store.state.Horas_Reserva &&
            doc.data().deporte == this.$store.state.Deporte){
              this.ocupado=1
              console.log("se encontro")            
              
            }

          })
          if(this.ocupado==0){
            try {

              const user = this.$store.state.auth.currentUser;
              
                if(user){
                 
                  swal.fire({
                      icon:'success',
                      title:'Hora Libre',
                      text:'La hora esta disponible para ser reservada',
                  })
                
                  this.mostrarbtnResesrva = false

                }
                else{
                  swal.fire({
                      icon:'error',
                      title:'Error Inicio Sesion',
                      text:'Debes iniciar sesion previamente',
                  })
                }
            }
            catch (error) {
              console.log("error")
              console.log(error)
            }
          }else{
           // hola.hide();
          
            swal.fire({
                      icon:'error',
                      title:'Ocupado',
                      text:'La reserva que has seleccionado ya se encuentra ocupada',
                  })

                  this.ocupado=0
          }

        },
 
        async btn_reserva(){

         // var hola =bootstrap.Modal.getInstance(document.querySelector('#Modal_PagoRes'))
         
          console.log(this.$store.state.Fecha);
          console.log(this.$store.state.Deporte)
          console.log(this.$store.state.Horas_Reserva)



        },
          
        async realizarPago(){

          let eRegular = /[0-9]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]+[0-9]/;
          let eRegular2 = /[A-Za-z]/;
          let eRegular3 = /[0-9]+[0-9]+-+[0-9]+[0-9]/;
          let eRegular4 = /[0-9]+[0-9]+[0-9]/;
          const fecha = new Date();
          let mes = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

              const randomNumber = Math.random();

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
        }else{

              if(randomNumber < 0.95){

               try {
    
                const user = this.$store.state.auth.currentUser;
                  if(user){

       
                    
                    const docRef = await addDoc(collection(this.$store.state.db, "reservas"), {
                      Fecha: this.$store.state.Fecha,
                      deporte: this.Deporte,
                      estado: "Reservado",
                      hora: this.$store.state.Horas_Reserva,
                      refUsuario: user.uid,
                    });
                    swal.fire({
                     icon:'success',
                     title:'Pago Exitoso',
                     text:'Su reserva ha sido realizada exitosamente',
                   })
                   
                    this.mostrarbtnResesrva = true

                    
                  }
                  else{
                    swal.fire({
                        icon:'error',
                        title:'Error Inicio Sesion',
                        text:'Debes iniciar sesion previamente',
                    })
                  }
                }
                catch (error) {
                console.log("error")
                console.log(error)
                }

                 const singupModal = document.querySelector('#Modal_PagoRes')
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
          },




       async guardarMatchmaking(){




          const user = this.$store.state.auth.currentUser;
          const querySnapshot = await getDocs(collection(this.$store.state.db,'matchmaking'))


     
          querySnapshot.forEach(doc =>{
            if(doc.data().Fecha == this.$store.state.Fecha && 
            doc.data().hora == this.$store.state.Horas_Reserva &&
            doc.data().deporte == this.$store.state.Deporte ){
              this.ocupado=1
              console.log("se encontro")            
              
            }


            if(doc.data().refUsuario == user.uid){
                this.repetido =1
            }



          })

          if(this.ocupado == 0){
                      const docRef = await addDoc(collection(this.$store.state.db, "matchmaking",), {
                      Fecha: this.$store.state.Fecha,
                      deporte: this.Deporte,
                      estado: "En espera",
                      hora: this.$store.state.Horas_Reserva,
                      refUsuario: user.uid,
                      contrincante: "No encontrado"
                    });
                    swal.fire({
                     icon:'success',
                     title:'Guardado exitoso',
                     text:'Su match a sido guardado y se encuentra en espera',
                   })

              }else{


                  if(this.repetido == 1){
                    swal.fire({
                     icon:'error',
                     title:'Matchmaking incorrecto',
                     text:'No puede hacer matchmaking consigo mismo',
                   })
                  }else{
                    const docRef = await addDoc(collection(this.$store.state.db, "matchmaking",), {
                      Fecha: this.$store.state.Fecha,
                      deporte: this.Deporte,
                      estado: "Match",
                      hora: this.$store.state.Horas_Reserva,
                      refUsuario: user.uid,
                      contrincante : "Encontrado"
                    });
                    swal.fire({
                     icon:'success',
                     title:'Matchmaking exitoso',
                     text:'Su match a sido guardado junto a otra persona',
                   })

                  }

              
                   this.ocupado=0
                   this.usuarioanterior = null
                   this.repetido = 0
              }
  

        }




       },

       computed:{
          boton_deshabilitado(){
            if(!this.date || !this.Deporte || !this.Horas_Reserva){  

              return true
             
            }
           
          },
      
       }
  
    }
  
      
  </script>
  
  <style scoped>

      .tex-seleccion-deporte{
          font-size: 20px;
      }








  .container {
    padding-top: 50px;
    padding-bottom: 50px;
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

  </style>