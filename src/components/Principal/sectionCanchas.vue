<template>
    <div>

<!-- Seccion Canchas-->

<section class="reserva-canchas seccion-clara d-flex flex-column" id="canchas">
		<!-- Canchas Para Reservar -->
		<div class="container text-center contenedor-canchas">
			
			<h2 class="seccion-titulo texto-negro text-center">CANCHAS PARA RESERVAR</h2>
			<div class="row">
				<!-- Inicio de Cancha  1 Futbol -->
				<div class="col-12 col-md-6 col-lg-4">
					<div class="reservas">
						<img src="https://i.ibb.co/yf0VS1g/cancha-futbol.jpg" alt="">
						<div class="overlay">
							<p class="">Futbol</p>
							<div class="btn-reserva-cancha">
								<router-link to="/PagReservas"><a class="btn btn-successcanchas">Reservar Cancha</a></router-link>
							</div>
						</div>
					</div>
				</div>
				<!-- Inicio de Cancha  2 Tenis -->
				<div class="col-12 col-md-6 col-lg-4">
						<div class="reservas">
							<img src="https://i.ibb.co/fMWGyHj/cancha-tenis.png" alt="">
							<div class="overlay">
								<p class="">Tenis</p>
								<div class="btn-reserva-cancha">
									<p><a class="btn btn-successcanchas" href="#">Reservar Cancha</a></p>
								</div>
							</div>
						</div>
				</div>
				<!-- Inicio de Cancha  3 Basquetball -->
				<div class="col-12 col-md-6 col-lg-4">
						<div class="reservas">
							<img src="https://i.ibb.co/FHd99V8/cancha-basket.jpg" alt="">
							<div class="overlay">
								<p class="">Basquetball</p>
								<div class="btn-reserva-cancha">
									<p><a class="btn btn-successcanchas" href="#">Reservar Cancha</a></p>
								</div>
							</div>
						</div>
				</div>
				<!-- Inicio de Cancha  4 Padel -->
				<div class="col-12 col-md-6 col-lg-4">
						<div class="reservas">
							<img src="https://i.ibb.co/9v5pQMH/26.jpg" alt="">
							<div class="overlay">
								<p class="">Padel</p>
								<div class="btn-reserva-cancha">
									<p><a class="btn btn-successcanchas" href="#">Reservar Cancha</a></p>
								</div>
							</div>
						</div>
				</div>
				<!-- Inicio de Cancha  5 Piscina -->
				<div class="col-12 col-md-6 col-lg-4">
						<div class="reservas">
							<img src="https://i.ibb.co/Y3RSGbz/piscina.jpg" alt="">
							<div class="overlay">
								<p class="">Piscina</p>
								<div class="btn-reserva-cancha">
									<p><a class="btn btn-successcanchas" href="#">Reservar Cancha</a></p>
								</div>
							</div>
						</div>
				</div>
				<!-- Inicio de Cancha  6 Voleibol-->
				<div class="col-12 col-md-6 col-lg-4">
					<div class="reservas">
						<img src="https://i.ibb.co/1fbdvMs/cancha-voleibol.jpg" alt="">
						<div class="overlay">
							<p class="">Voleibol</p>
							<div class="btn-reserva-cancha">
								<p><a class="btn btn-successcanchas" href="#">Reservar Cancha</a></p>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	</section>


    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>


/* Canchas De Reserva */



              

.seccion-titulo{
	font-size: 2rem;
	padding:15px 0;
	margin-top: 40px;
	margin-bottom: 40px;
}

.seccion-descripcion{
	font-size: 1.2rem;
	color: #584e43;	
}
.texto-negro{
	color: black;
}
.texto-blanco{
	color: white;
}
.resesrva-canchas{
	padding: 40px;
}
.seccion-clara{
	color: black;
	background-color: white;
}


.reserva-canchas img{
	height: 100%;
	width: 100%;
	padding: 10px;
	border-radius: 10px;
	display: block;
	transition: all 0.2s ease;
}

.contenedor-canchas{
	padding: 60px;
	margin-bottom: 40px;
}


.overlay{
	transition: all 0.2s ease;
	opacity: 0;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	text-align: center;
}
.overlay p{
	font-size: 25px;
	font-weight: bold;
	margin-bottom: 0;
	color: white;
}
.reservas{
	position: relative;
}

.reservas:hover img{
	
	filter: blur(2px);
}

.reservas:hover .overlay{
	opacity: 1;
}

.btn-successcanchas{
	border-color:white;
	
	color: white;
}
.btn-successcanchas:hover{
	
	background-color: green;
	color: white;
}



/*  Fin Canchas De Reserva */


</style>