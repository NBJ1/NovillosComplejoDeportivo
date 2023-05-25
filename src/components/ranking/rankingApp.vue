<template>
  <div class="fondo">
    <div>
      <div class="container mt-5">
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <h2 class="text-center">Ranking</h2>
            <br />
          </div>

          <div class="row">
            <div class="col-lg-6 offset-lg-3">
              <div class="card p-2" v-if="ranking.length === 0">
                <h6>No hay elementos en el ranking.</h6>
              </div>

              <ol
                class="list-group"
                v-for="(item, index) in ranking"
                v-bind:key="index"
              >
                <li id="color_list" class="list-group-item d-flex justify-content-between">
                    <span>
                        {{ index + 1 }}
                    </span>
                    <span>
                    {{ item.nombre }}
                  </span>
                  <span class="badge badge-primary">
                    Puntuación: {{ item.puntuacion }}
                  </span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ranking: [
        { nombre: "Carlos Alcaraz", puntuacion: 100 },
        { nombre: "Daniil Medvedev", puntuacion: 80 },
        { nombre: "Novak Djokovic", puntuacion: 60 },
        { nombre: "Casper Ruud", puntuacion: 40 },
        { nombre: "Stefanos Tsitsipas", puntuacion: 20 },
        { nombre: "Holger Rune", puntuacion: 10 },
      ],
    };
  },
  methods:{
    metodosBaseDatos(){
        // Aquí se haría la llamada a la base de datos para obtener el ranking
    }
  },
};
</script>

<style scoped>
.cursor {
  cursor: pointer;
}
h6 {
  text-align: center;
}
.badge {
  color: black;
}
#color_list {
  background-color: #ededed;
}
</style>
