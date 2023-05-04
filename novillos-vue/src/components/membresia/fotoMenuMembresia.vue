<template>
    <div>
 <!-- Foto Menu Membresia -->

        <!-- Foto Menu Reserva -->
        <div id="carouselExampleCaptions" class="carousel slide">
            <div class="imagenmenuoscura">
                <div class="carousel-inner">
                    <div class="carousel-item active imagen_menureserva">
                        <img src="https://i.ibb.co/yf0VS1g/cancha-futbol.jpg" class="d-block w-100 " alt="...">
                        <div class="carousel-caption d-none d-md-block texto_menureservas">
                            <h1 class="text-center">MEMBRESIAS</h1>
                            <p class="text-center">Elige el plan que se adecue a ti.</p>
                            <div class="btn-volver-home">
                                <p><a class="btn btn-volverhome" href="index.html">Volver al Menu</a></p>
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


/* Inicio imagenes menu */

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');
	* {
	font-family: 'Montserrat', sans-serif;
}

.imagen_menureserva{
    height: 90vh;
	min-height: 200px;
    z-index: 2;
}

.btn-volverhome{
	border-color:white;
	color: white;
}
.btn-volverhome:hover{

	background-color: green;
	color: white;
}

.menumembresia img:hover{
	width: 300px;
	opacity: 1;
	filter: contrast(120%);
}


/* Fin Imagen menu */

</style>