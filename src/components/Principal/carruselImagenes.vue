<template>
    <div>
<!-- Carrusel de Imagenes -->
<div class="carousel slide" data-bs-ride="carousel" id="carouselExampleIndicators">
		<div class="carousel-indicators">
			<button aria-label="Slide 1" class="active" data-bs-slide-to="0" data-bs-target="#carouselExampleIndicators" type="button"></button> <button aria-label="Slide 2" data-bs-slide-to="1" data-bs-target="#carouselExampleIndicators" type="button"></button> <button aria-label="Slide 3" data-bs-slide-to="2" data-bs-target="#carouselExampleIndicators" type="button"></button>
		</div>
		<div class="carousel-inner">
			<div class="carousel-item active">
				<img alt="..." class="d-block w-100" src="https://i.ibb.co/yf0VS1g/cancha-futbol.jpg">
				<div class="carousel-caption">
					<h5>Las mejores Canchas de Futbol</h5>
					<p>Ven a vivir la experiencia en las mejores canchas de la región</p>
					<br>
					<p><a class="btn btn-carrucel1">Ver Canchas</a></p>
				</div>
			</div>
			<div class="carousel-item">
				<img alt="..." class="d-block w-100" src="https://i.ibb.co/fMWGyHj/cancha-tenis.png">
				<div class="carousel-caption">
					<h5>Mejor Calidad de Canchas</h5>
					<p>Ven a vivir la experiencia en las mejores canchas de la región</p>
					<br>
					<p><a class="btn btn-carrucel2">Ver Canchas</a></p>
				</div>
			</div>
			<div class="carousel-item">
				<img alt="..." class="d-block w-100" src="https://i.ibb.co/mRWcMPt/cancha-padel.jpg">
				<div class="carousel-caption">
					<h5>Mejores Implementaciones</h5>
					<p>Ven a vivir la experiencia en las mejores canchas de la región</p>
					<br>
					<p><a class="btn btn-carrucel3" >Ver Canchas </a></p>
				</div>
			</div>
		</div><button class="carousel-control-prev" data-bs-slide="prev" data-bs-target="#carouselExampleIndicators" type="button"><span aria-hidden="true" class="carousel-control-prev-icon"></span> <span class="visually-hidden">Previous</span></button> <button class="carousel-control-next" data-bs-slide="next" data-bs-target="#carouselExampleIndicators" type="button"><span aria-hidden="true" class="carousel-control-next-icon"></span> <span class="visually-hidden">Next</span></button>


	</div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>


/* Carrusel */

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');
	* {
	font-family: 'Montserrat', sans-serif;
}
	.section-padding {
	padding: 100px 0;
}


.carousel-item {
		height: 90vh;
		min-height: 200px;
}
.carousel-caption { 
	bottom: 100px;
	z-index: 2;
}



.carousel-caption h5 {
	font-size: 45px;
	text-transform: uppercase;
	letter-spacing: 2px;
	margin-top: 25px;
}
.carousel-caption p {
	width: 60%;
	margin: auto;
	font-size: 18px;
	line-height: 1.9;
}

.carousel-inner:before {
	content: '';
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.2);
	z-index: 1;
}

.btn-carrucel1{

	border-color: white;
	color: white;

}
.btn-carrucel1:hover{

	
	background-color: green;
	color: white;

}

.btn-carrucel2{

	border-color: white;
	color: white;

}
.btn-carrucel2:hover{

	
	background-color: green;
	color: white;

}
.btn-carrucel3{

	border-color: white;
	color: white;

}
.btn-carrucel3:hover{

	
	background-color: green;
	color: white;

}




/* Fin Carrusel */


</style>