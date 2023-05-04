<template>
    <div>
        <div id="carouselExampleCaptions" class="carousel slide">
            <div class="imagenmenuoscura">
                <div class="carousel-inner">
                    <div class="carousel-item active imagen_menureserva">
                        <!-- <img src="RecursosReserva/Imagenes/cancha-tenis.png" class="d-block w-100 " alt="..."> -->
                        <v-flex xs0 xl6 lg6 md6 sm6>
                        <v-img src="@/assets/cancha-padel.jpg">adsfas</v-img>
                        </v-flex>
                      
                        <div class="carousel-caption d-none d-md-block texto_menureservas">
                            <h1 class="text-center">RESERVAS</h1>
                            <p class="text-center">Reserva la Cancha que desees el dia que quieras.</p>
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
    .imagen_menureserva{
        height: 70vh;
        min-height: 200px;
        z-index: 2;

    }

    .texto_menureservas{
        font-size: 20px;
        text-align: center;
        margin-bottom: 100px;
    }

    .btn-volverhome{
        border-color:white;
        color: white;
    }
    .btn-volverhome:hover{

        background-color: green;
        color: white;
    }

</style>