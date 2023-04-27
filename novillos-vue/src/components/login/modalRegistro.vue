<template>

<!-- btn registro -->
<div class="logged-out">
  <p>
    <a id="btnReg" class="nav-item btn btn-outline-success5 " href="#" data-bs-toggle="modal" data-bs-target="#signupModal">
      Registrarse
    </a>
  </p>
</div>

<!-- modal -->
<div class="modal fade" id="signupModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
aria-hidden="true">
<div class="modal-dialog">
    <div class="modal-content bg-dark">
    <div class="modal-header">
        <h3 style="color: aliceblue;">Registrarse</h3>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body p-5">
        <form id="signup-form">

            <div class="mb-3">
            <label for="signup-firstname" class="form-label">Nombre:</label>
            <input type="text" id="signup-firstname" class="form-control" placeholder="Nombre" required>
            </div>

            <div class="mb-3">
            <label for="signup-lastname" class="form-label">Apellido:</label>
            <input type="text" id="signup-lastname" class="form-control" placeholder="Apellido" required>
            </div>

            <div class="mb-3">
            <label for="signup-email" class="form-label">Email:</label>
            <input type="text" id="signup-email" class="form-control" placeholder="Email" required>
            </div>

            <div class="mb-3">
            <label for="signup-password" class="form-label">Contraseña:</label>
            <input type="password" id="signup-password" class="form-control" placeholder="Contraseña" required>
            </div>

            <div class="mb-3">
            <label for="signup-phone" class="form-label">Número de teléfono:</label>
            <div class="input-group">
                <span class="input-group-text">+56</span>
                <input type="text" id="signup-phone" class="form-control" placeholder="Número de teléfono" required>
            </div>
            </div>

            <div class="d-grid gap-2 p-3">
            <button id="btnListo" type="submit" class="btn btn-primary">Registrarse</button>
            </div>

        </form>

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

    #btnReg{
        width: 160px;
    }
    #btnReg:hover{
        background-color: aqua;
    }
    label{
        color: white;
    }
    #btnListo{
        background-color: ;
    }
    .modal-body {
        text-align: left;
    }
    #btnListo:hover{
        background-color: greenyellow;
        color: black;
    }
    #btnListo{
        align-items: center;
    }
</style>