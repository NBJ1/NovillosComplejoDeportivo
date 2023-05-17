<template>
  <div>
    <div class="fondo">
      <div class="container">
        <div class="container text-center">
          <h1>Medios de Pago</h1>
          <!--Titulo-->
          <div class="row justify-content-center">
            <div class="col" id="uno">
              <!-- Bloque 1 -->
              <div class="contenedorCards">
                <div class="card mx-auto" style="width: 18rem">
                  <!-- Carta 1 -->
                  <div class="card-body">
                    <h5 class="card-title">WebPay</h5>
                    <p class="card-text">0.3 usd por transacción</p>
                    <button @click="showRandomModal" class="btn btn-primary">
                      Pagar
                    </button>
                  </div>
                </div>
                <div class="card mx-auto" style="width: 18rem">
                  <!-- Carta 2 -->
                  <div class="card-body">
                    <h5 class="card-title">MercadoPago</h5>
                    <p class="card-text">0.2 usd por transacción</p>
                    <button @click="showRandomModal" class="btn btn-primary">
                      Pagar
                    </button>
                  </div>
                </div>
                <div class="card mx-auto" style="width: 18rem">
                  <!-- Carta 3 -->
                  <div class="card-body">
                    <h5 class="card-title">PayPal</h5>
                    <p class="card-text">0.5 usd por transacción</p>
                    <button @click="showRandomModal" class="btn btn-primary">
                      Pagar
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col" id="dos">
              <!-- Bloque 2 -->
              <div class="card p-4">
                <!-- Inicio form -->
                <div>
                  <h3>Pago con Tarjeta</h3>
                </div>
                <form action="#" method="post">
                  <div class="form-group">
                    <label for="nombre">Nombre en la tarjeta:</label>
                    <input
                      type="text"
                      class="form-control"
                      id="nombre"
                      name="nombre"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="tarjeta">Número de tarjeta:</label>
                    <input
                      type="text"
                      class="form-control"
                      id="tarjeta"
                      name="tarjeta"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="vencimiento">Fecha de vencimiento:</label>
                    <input
                      type="text"
                      class="form-control"
                      id="vencimiento"
                      name="vencimiento"
                      placeholder="MM/AA"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="cvv">CVV:</label>
                    <input
                      type="text"
                      class="form-control"
                      id="cvv"
                      name="cvv"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="monto">Monto a pagar:</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text">$</span>
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        id="monto"
                        name="monto"
                        required
                      />
                    </div>
                  </div>
                  <button @click="showRandomModal" class="btn btn-primary">
                    Pagar
                  </button>
                </form>
              </div>
              <!-- Fin form -->
            </div>
          </div>
        </div>
      </div>
    </div>
  
    <div>
      <!-- Primer modal -->
      <div
        v-if="activeModal === 'modal1'"
        class="modal show d-block"
        tabindex="-1"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Pago</h5>
              <button
                type="button"
                class="btn-close"
                @click="closeModal"
              ></button>
            </div>
            <div class="modal-body">
              <h1 class="PagoBien">PAGO EXITOSO</h1>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Segundo modal -->
      <div
        v-if="activeModal === 'modal2'"
        class="modal show d-block"
        tabindex="-1"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Pago</h5>
              <button
                type="button"
                class="btn-close"
                @click="closeModal"
              ></button>
            </div>
            <div class="modal-body">
              <h1 class="PagoMal">PAGO FALLIDO</h1>
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
      activeModal: null,
    };
  },
  methods: {
    showRandomModal() {
      const randomNumber = Math.random();
      this.activeModal = randomNumber < 0.5 ? "modal1" : "modal2";
    },
    closeModal() {
      this.activeModal = null;
    },
  },
};
</script>

<style scoped>
.container {
  padding-top: 50px;
  padding-bottom: 50px;
}

.fondo {
  height: 120vh;
  background-color: white;
}

.row {
  top: 0;
  left: 0;
  width: 100%;
  padding-top: 0.5em;
  height: 35em;
}

.col {
  border-radius: 15px;
}

#uno {
  background-color: whitesmoke;

  display: grid;
  place-items: center;

  background: #e0e0e0;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;

  border: 1px solid #2a8b18;
}

#dos {
  background: #e0e0e0;
  box-shadow: 32px 32px 64px #a6a6a6, -32px -32px 64px #ffffff;

  display: grid;
  place-items: center;

  border: 1px solid #2a8b18;
}

.card {
  margin: 8px;
  background-color: #2c2f33;
  color: whitesmoke;
}
button{
  background-color: #F1F6F9;
  color: #2c2f33;
}
.btn:hover {
  background-color: #2a8b18;
}
.modal.show.d-block {
  display: block;
  background-color: rgba(0, 0, 0, 0.5);
}
.PagoBien {
  color: rgb(144, 217, 34);
}
.PagoMal {
  color: rgb(209, 27, 27);
}
</style>
