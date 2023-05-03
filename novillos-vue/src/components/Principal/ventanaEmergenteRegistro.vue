<template>
  <div>
    <!-- Inicio de Ventana Emergente Registrarse-->
    <div
      class="modal fade"
      id="signupModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h3 style="color: black">Registrarse</h3>
            <button
              type="button"
              class="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body p-5">
            <form id="signup-form">
              <label for="email">Email:</label>
              <input
                type="text"
                id="signup-email"
                class="form-control mb-3"
                placeholder="Correo"
                required
              />

              <label for="password">Contraseña:</label>
              <input
                type="password"
                id="signup-password"
                class="form-control mb-3"
                placeholder="Contraseña"
                required
              />

              <button type="submit" class="btn btn-success">
                Crear cuenta
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- Fin de Ventana Emergente Registrarse-->
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
