<template>
  <div class="">
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
              <v-date-picker class="ola" v-model="date" color="green darken-3" min="2023-05-13"
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
              <button class="btn btn-outline-success " type="submit" :disabled="boton_deshabilitado" @click="btn_reserva" id="botonReserva"><router-link class="a" to="/pago">RESERVAR</router-link></button>
            </div>          
  
  
  
      </div>
      <div class="col">
        <!-- COLUMNA DE SELECCION DE HORAS -->
      <div class="col">
                   
          </div>
      </div>
  
      </div>
    </div>
  </div>
  
  
  </template>
  
  
  
  <script>
  import { min } from 'date-fns';
  
  
  
      export default {
  
        data(){
          return{
            date:  null,
            Deporte: null,
            Horas_Reserva: null,
  
  
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
  
        obtenerFecha(){
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
  
        
        async btn_reserva(){
          console.log(this.$store.state.Fecha);
          console.log(this.$store.state.Deporte)
          console.log(this.$store.state.Horas_Reserva)
          try {
            const user = this.$store.state.auth.currentUser;
              if(user){
                await setDoc(doc(this.$store.state.db, "reservas",user.uid), { 
                  Fecha: this.$store.state.Fecha,
                  deporte: this.Deporte,
                  estado: "Reservado",
                  hora: this.$store.state.Horas_Reserva
                });
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
        }
          
       },
  
       computed:{
          boton_deshabilitado(){
            if(!this.date || !this.Deporte || !this.Horas_Reserva){
              return true
            }
           
          }
  
  
       }
  
    }
  
      
  </script>
  
  <style scoped>
      /* Inicio Campo de Eleccion de Deportes */
  
  
     /* 
    .calendario{
      border: solid 1px black;
      border-radius: 6px;
      background-size: 20px;
     
    }
    */
  
      .contenedor_deportes{
        color: green;
  }

      /*  boton de Elegir Hora de reserva*/

  
      .tex-seleccion-deporte{
          font-size: 20px;
      }
  .a{
    color: black;
    text-decoration: none;
    
  }
  .a:hover{
    background-color: green;
    color: white;
    
  }
  </style>