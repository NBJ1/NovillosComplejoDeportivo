<template>
    <div>
 <!-- Foto Menu Membresia -->

        <!-- Foto Menu Reserva -->
        <div id="carouselExampleCaptions" class="carousel slide">
            <div class="imagenmenuoscura">
                <div class="carousel-inner">
                    <div class="carousel-item active imagen_menureserva">
                        <img src="Recursos/Imagenes/cancha-futbol.jpg" class="d-block w-100 " alt="...">
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

.menumembresia{
	display: flex;
	width: 100%;
	height: 600px;
}
.menumembresia img{
	width: 0px;
	flex-grow: 1;
	object-fit: cover;
	opacity: .9;
	transition: 0.5s ease;
}

.menumembresia img:hover{
	width: 300px;
	opacity: 1;
	filter: contrast(120%);
}


/* Fin Imagen menu */

</style>