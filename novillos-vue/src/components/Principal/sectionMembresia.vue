<template>
    <div>
<!-- Membresia -->


<section class="membresiaa section-padding" id="membresia">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="section-header text-center pb-5">
							<h2 class="titulo-membresia" >MEMBRESIA</h2>
							<p>Escoja la membresia que desee.</p>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-12 col-md-12 col-lg-4">
						<div class="card text-light text-center bg-white ">
							<div class="card-body text-dark">
								<div class="img-area mb-4"><img alt="" class="img-fluid" src="Recursos/Iconos/icono-toro.png"></div>
								<h3 class="card-title ">Bronce</h3>
								<p class="lead ">Acceso a las instalaciones del complejo, incluyendo todas las canchas, piscina, y estacionamiento.</p><a class="btn btn-success1" href="/PagMembresia">Obtener membresia</a>
							</div>
						</div>
					</div>
					<div class="col-12 col-md-12 col-lg-4">
						<div class="card text-light text-center bg-white ">
							<div class="card-body text-dark">
								<div class="img-area mb-4"><img alt="" class="img-fluid" src=""></div>
								<h3 class="card-title">Oro</h3>
								<p class="lead ">Acceso a todo lo incluído en el plan Bronce, además de acceso a piscina temperada, reserva de estacionamiento, y cinco reservas gratis al mes.</p><router-link to="/PagMembresia"><a class="btn btn-success1">Obtener membresia</a></router-link>
							</div>
						</div>
					</div>
					<div class="col-12 col-md-12 col-lg-4">
						<div class="card text-light text-center bg-white ">
							<div class="card-body text-dark">
								<div class="img-area mb-4"><img alt="" class="img-fluid" src=""></div>
								<h3 class="card-title">Platino</h3>
								<p class="lead">Acceso a todo lo incluído en el plan Oro y entrenamiento personalido en el área que desee.</p><a class="btn btn-success1" href="/PagMembresia">Obtener membresia</a>
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


.membresiaa{
			/* Imagenes/tenis-fondo4.jpg' */
/*background-image: url('/../../Recursos/Imagenes/tenis-fondo4.jpg');*/
background-size: cover;
z-index: 2;
height: 100vh;
min-height: 200px;

}



.section-header{

color: white;
font-size: 24px;

}

.card-body{

background-color: black ;
color: white !important;

}
.btn-success1{
border-color:#4BB636;
color: #4BB636;
margin-bottom: 4px;
}

.btn-success1:hover{
background-color:#2a8b17;
color: white;
}
.btn-success2{
border-color:#4BB636;
color: #4BB636;
color: #4BB636;
margin-bottom: 4px;
}

.btn-success2:hover{
background-color:#2a8b17;
color: white;
}

.btn-success3{
border-color:#4BB636;
color: #4BB636;
color: #4BB636;
margin-bottom: 4px;
}

.btn-success3:hover{
background-color:#2a8b17;
color: white;
}

/* Fin Membresia */

</style>