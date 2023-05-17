<template>
    <div>
<!-- Inicio tipos de membresia -->
<div class="fondo-cartas " id="planes">

    <br>
    <br>
<h1 class="text-center fw-bold titulo-planes">ELIGE LA MEMBRESIA QUE DESEES</h1>
    <div class="container py-5 ">
        <div class="row text-center tarjetas">
                <!--  Carta 1 Bronce -->
                <div class="col-lg-4 mb-2 mb-lg-0 tarjeta">
                    <div class="bg-white pb-3 rounded-lg  carta-membresia ">
                        <br>
                        <h1 class="h4 text-uppercase fw-bold mb-4 titulo-plan  "> Bronce</h1>
                        <h1 class="h1 fw-bold">Gratis  <span class="text-small fw-normal ml-2"></span></h1>

                        <div class="custom-separator my-2 mx-auto "></div>

                        <ul class="list-unstyled my-4 text-small text-left">
                            <li class="mb-1">
                                <i class="bi bi-check  mr-2  checks "></i>2 Reseravas por Semana.
                            </li>
                            <li class="mb-1">
                                <i class="bi bi-check  mr-2  checks"></i>2 Horas por reserva al dia
                            </li>
                            <li class="mb-1 text-muted">
                                <i class="bi bi-x mr-2  equis"></i>
                                <del>1 Reserva Gratis por Semana</del>
                            </li>
                            <li class="mb-1 text-muted">
                                <i class="bi bi-x mr-2  equis"></i>
                                <del>Canchas especiales Premium</del>
                            </li>
                            <li class="mb-1 text-muted">
                                <i class="bi bi-x mr-2  equis"></i>
                                <del> Descuentos por Reserva</del>
                            </li>
                            <li class="mb-1 text-muted">
                                <i class="bi bi-x mr-2  equis"></i>
                                <del> Acceso a MatchMaking</del>
                            </li>


                        </ul>

                    <router-link to="/pago"> <a href="#" class="btn btn-block p-2  rounded-pill boton-pagar-membresia"> Obtener Memebresia </a></router-link>

                    </div>
                </div>
                <!--  Fin Carta 1 Bronce -->
                <!--  Carta 2 Oro -->
                <div class="col-lg-4 mb-2 mb-lg-0">
                    <div class="bg-white pb-3 rounded-lg  carta-membresia ">
                        <br>
                        <h1 class="h4 text-uppercase fw-bold mb-4 titulo-plan  "> Oro</h1>
                        <h1 class="h1 fw-bold">$ 50 mil <span class="text-small fw-normal ml-2">/ mes</span></h1>

                        <div class="custom-separator my-2 mx-auto "></div>

                        <ul class="list-unstyled my-4 text-small text-left">
                            <li class="mb-1">
                                <i class="bi bi-check  mr-2 checks"></i>5 Reservas por Semana
                            </li>
                            <li class="mb-1">
                                <i class="bi bi-check  mr-2 checks"></i>2 Horas por reserva al dia
                            </li>
                            <li class="mb-1">
                                <i class="bi bi-check  mr-2 checks"></i>1 Reserva Gratis por Semana.
                            </li>
                            <li class="mb-1">
                                <i class="bi bi-check  mr-2 checks"></i>Canchas especiales Premium
                            </li>
                            <li class="mb-1">
                                <i class="bi bi-check  mr-2 checks"></i>20% Descuentos por Reserva
                            </li>
                            <li class="mb-1 text-muted">
                                <i class="bi bi-x mr-2  equis"></i>
                                <del> Acceso a MatchMaking</del>
                            </li>


                        </ul>

                        <router-link to="/pago"> <a href="#" class="btn btn-block p-2  rounded-pill boton-pagar-membresia"> Obtener Memebresia </a></router-link>

                    </div>
                </div>
                <!--  Fin Carta 2 Oro-->
                <!-- Carta 3 Premium -->
                <div class="col-lg-4 mb-5 mb-lg-0">
                    <div class="bg-white pb-3 rounded-lg  carta-membresia ">
                        <br>
                        <h1 class="h4 text-uppercase fw-bold mb-4 titulo-plan">    Platino</h1>
                        <h1 class="h1 fw-bold">$ 100 mil  <span class="text-small fw-normal ml-2">/ mes</span></h1>

                        <div class="custom-separator my-2 mx-auto "></div>

                        <ul class="list-unstyled my-4 text-small text-left">
                            <li class="mb-1">
                                <i class="bi bi-check  mr-2  checks"></i>7 Reservas por Semana
                            </li>
                            <li class="mb-1">
                                <i class="bi bi-check  mr-2 checks"></i>2 Horas por reserva al dia
                            </li>
                            <li class="mb-1">
                                <i class="bi bi-check  mr-2 checks"></i>3 Reservas Gratis por Semana.
                            </li>
                            <li class="mb-1">
                                <i class="bi bi-check  mr-2 checks"></i>Canchas especiales Premium
                            </li>
                            <li class="mb-1">
                                <i class="bi bi-check  mr-2 checks"></i>50% Descuentos por Reserva
                            </li>
                            <li class="mb-1">
                                <i class="bi bi-check  mr-2 checks"></i>Acceso a MatchMaking
                            </li>


                        </ul>

                        <router-link to="/pago"> <a href="#" class="btn btn-block p-2  rounded-pill boton-pagar-membresia"> Obtener Memebresia </a></router-link>

                    </div>
                </div>
                <!-- Fin Carta 3 Premium -->
        </div>
    </div>
    <!--<br>  </br> -->
   
</div>
<!--<br>  </br> -->
<!--<br>  </br> -->
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>


/* Inicio membresias */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');
	* {
	font-family: 'Montserrat', sans-serif;
}
	.section-padding {
	padding: 100px 0;
}

.fondo-cartas{
	background-color: white;


}	

.titulo-planes{
	color: black;
}
.carta-membresia{
	background-color: rgb(243, 239, 239) !important;
	border: solid 1px;
	border-color: #1d670f;

}
.carta-membresia:hover{
	border: solid 2px;
	border-color:  #1d670f;
	transition: 0.1s;
	-webkit-box-shadow: 1px 6px 19px 4px rgba(0,0,0,0.75);
-moz-box-shadow: 1px 6px 19px 4px rgba(0,0,0,0.75);
box-shadow: 1px 6px 19px 4px rgba(0,0,0,0.75);
}

.rounded-lg{
	border-radius: 1rem;
}
.custom-separator{
	width: 10rem;
	height: 6px;
	border-radius: 1rem;
	background-color: #1d670f;
}

.checks{
    font-size: 30px;
	color:#4BB636;
}

.equis{
	font-size: 30px;
}

.boton-pagar-membresia{

	background-color: #1d670f;
	color: white;
	border: solid 1px;
}
.boton-pagar-membresia:hover{

	background-color: #1d670f;
	color: white;
	font-size: 18px;
	transition: 0.1s;
	-webkit-box-shadow: 10px 10px 14px -7px rgba(0,0,0,0.75);
	-moz-box-shadow: 10px 10px 14px -7px rgba(0,0,0,0.75);
	box-shadow: 10px 10px 14px -7px rgba(0,0,0,0.75);
}

/* Fin membresias */

</style>