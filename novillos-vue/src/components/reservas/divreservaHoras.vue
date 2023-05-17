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
            <v-date-picker v-model="date" color="green darken-3" min="2023-05-13"
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
                <button class="btn btn-outline-success " type="submit" :disabled="boton_deshabilitado" @click="btn_reserva" id="botonReserva">RESERVAR</button>
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

      
      btn_reserva(){
        console.log(this.$store.state.Fecha);
        console.log(this.$store.state.Deporte)
        console.log(this.$store.state.Horas_Reserva)
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
    
    .contenedor-horas{
    margin: 40px;

    }

    .contenedor-horas1{
        margin: 40px;
        width: 300px; 
        align-content: unsafe;

    }

    .horas{

        position: relative;
        left: 20px;
    margin-top: 60px;
    border-radius: 8px;
    padding: 16px;
    background-color: white;
    border: solid 1px black;
    height: 283px;

    }

    .col-horas{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-bottom: 100px;
    }

    .div-hora{
        width: 100px;
        border: solid 1px black;
        margin-top: 10px;
        margin-right: 10px;
        cursor: pointer;

    }

    .div-hora:hover{
        background-color: rgb(0, 128, 0);
        color: white;
        cursor: pointer;
    }

    /*  boton de Elegir Hora de reserva*/
    .select-btn{

    display: contents;
    height: 50px;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    }
    .select-btn .btn-text{
    font-size: 17px;
    font-weight: 400;
    color: #333;
    }


    .list-items{
    position: relative;
    margin-top: 15px;
    border-radius: 8px;
    padding: 16px;
    background-color: white;
    border: solid 1px black;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);

    }

    .list-items:hover{
        -webkit-box-shadow: 10px 10px 24px -8px rgba(0,0,0,0.75);
        -moz-box-shadow: 10px 10px 24px -8px rgba(0,0,0,0.75);
        box-shadow: 10px 10px 24px -8px rgba(0,0,0,0.75);
    }

    .select-btn.open ~ .list-items{
    display: block;
    }
    .list-items .item{
    display: flex;
    align-items: center;
    list-style: none;
    height: 50px;
    cursor: pointer;
    transition: 0.3s;
    padding: 0 15px;
    border-radius: 8px;

    }

    .tex-seleccion-deporte{
        font-size: 20px;
    }

    .list-items .item:hover {
    background-color:#198754;
    color:white;

    }

    .item .item-text{
    font-size: 16px;
    font-weight: 400;
    color: #333;
    }

    .item .item-text:hover{
    font-size: 16px;
    font-weight: 400;
    color: white;
    }
    .item .checkbox{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 16px;
    width: 16px;
    border-radius: 4px;
    margin-right: 12px;
    border: 1.5px solid black;
    transition: all 0.3s ease-in-out;
    }
    .item.checked .checkbox{
    background-color:black;

    }
    .checkbox .check-icon{
    color: #fff;
    font-size: 11px;
    transform: scale(0);
    transition: all 0.2s ease-in-out;
    }
    .item.checked .check-icon{
    transform: scale(1);
    }

    /* Fin Campo de Eleccion de Deportes */


</style>