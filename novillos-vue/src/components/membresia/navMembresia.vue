<template>
    <div>
<!-- Barra de Navegacion -->
<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top" >
		<div class="container">
			<a class="navbar-brand" href="#"><span class="text-complejo ">
				<img class="" src="" alt="">
			</span>Novillos</a> <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler" data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse" type="button"><span class="navbar-toggler-icon	"></span></button>
			<div class="" id="navbarSupportedContent">
				<ul class="navbar-nav ms-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<a class="nav-link" href="#">Menu</a>
					</li>
			
					<li class="nav-item">
						<a class="nav-link" href="#planes">Planes</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#canchas">Nosotros</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#nosotros">Contactanos</a>
					</li>

				</ul>
			</div>
			<form class="d-flex" role="search">
				<a class="btn btn-outline-success btn-volver" href="index.html">Volver al Menu </a>
			</form>
		</div>
	</nav>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>


@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');
	* {
	font-family: 'Montserrat', sans-serif;
}
	.section-padding {
	padding: 100px 0;
}

.navbar{
	border-bottom: 2px solid rgb(206, 206, 206);


}

.nav-link{
   transition: all 0.1s;
}

.nav-link:hover{
   border-bottom:solid #4BB636;
   color:#4BB636 !important;
   border-radius: 4px;


}
.nav-link::after{
   content: '';
   position: absolute;
   bottom: 0;
   left: 0;
}

.navbar .getstarted {
   background: #106eea;
   margin-left: 30px;
   border-radius: 4px;
   font-weight: 400;
   color: #fff;
   text-decoration: none;
   padding: .5rem 1rem;
   line-height: 2.3;
}
.navbar-nav a {
   font-size: 15px;
   text-transform: uppercase;
   font-weight: 500;
}


.navbar-light .navbar-brand {
   color: black;
   font-size: 25px;
   text-transform: uppercase;
   font-weight: bold;
   letter-spacing: 2px;
}
.navbar-light .navbar-brand:focus, .navbar-light .navbar-brand:hover {
   color: #000;
}
.navbar-light .navbar-nav .nav-link {
   color: #000;
}
.navbar-light .navbar-nav .nav-link:focus, .navbar-light .navbar-nav .nav-link:hover {
   color: #000;
}
.w-100 {
   height: 100vh;
}
.navbar-toggler {
   padding: 1px 5px;
   font-size: 18px;
   line-height: 0.3;
   background: #fff;
}

</style>