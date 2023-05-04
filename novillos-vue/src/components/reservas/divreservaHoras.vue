<template>
<div>

  <div class="container text-center">
  <div class="row align-items-end">
    <div class="col">
      <!-- PARTE DONDE VA EL CALENDARIO -->
      AQUI CALENDARIO
    </div>
      <!-- COLUMNA DE SELECCION DEPORTE -->
    <div class="col">
      <div class="col">
          <div class="container contenedor-horas">
              <div class="tex-seleccion-deporte">
                <p1>Seleccione el Deporte</p1>
              </div>
              <ul class="list-items">
                  <li class="item">
                    <span class="checkbox">
                      <i class="fa-solid fa-check check-icon"></i>
                    </span>
                    Futbol
                  </li>
                  <li class="item">
                    <span class="checkbox">
                      <i class="fa-solid fa-check check-icon"></i>
                    </span>
                    Tenis
                  </li>
                  <li class="item">
                    <span class="checkbox">
                      <i class="fa-solid fa-check check-icon"></i>
                    </span>
                    Basquetball
                  </li>
                  <li class="item">
                    <span class="checkbox">
                      <i class="fa-solid fa-check check-icon"></i>
                    </span>
                    Padel
                  </li>
                  <li class="item">
                    <span class="checkbox">
                      <i class="fa-solid fa-check check-icon"></i>
                    </span>
                    Piscina
                  </li>
              </ul>
          </div>
		</div>
    </div>
    <div class="col">
      <!-- COLUMNA DE SELECCION DE HORAS -->
		<div class="col">
        <div class="container contenedor-horas1">
            <div class="tex-seleccion-deporte">
               <p1>Seleccione hora</p1>
            </div>
            <div class="horas">
                  <div class="col-horas">
                    <div class="div-hora">07:30</div>
                    <div class="div-hora">09:00</div>
                    <div class="div-hora">10:30</div>
                    <div class="div-hora">12:00</div>
                    <div class="div-hora">13:30</div>
                    <div class="div-hora">15:00</div>
                    <div class="div-hora">16:30</div>
                    <div class="div-hora">18:00</div>
                    <div class="div-hora">19:30</div>
                    <div class="div-hora">21:00</div>
                    <div class="div-hora">22:30</div>
                    <div class="div-hora">23:30</div>
                    <div>
                        <button class="btn btn-outline-success reserva" type="submit">Reservar</button>
                    </div>
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
    export default {

    }
</script>

<style scoped>
    /* Inicio Campo de Eleccion de Deportes */

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
        background-color: green;
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
        font-size: 30px;
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