<template>

<!-- Example single danger button -->
<div class="btn-group">
  <button type="button" class="btn btn-info dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Perfil
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="1">Editar Perfil</a></li>
    <li><a class="dropdown-item" href="2">Configuracion</a></li>
    <li><a class="dropdown-item" href="3">Ayuda</a></li>
    <li><hr class="dropdown-divider"></li>
    <li class="salir"><a class="dropdown-item" href="4">Cerrar Sesión</a></li>
  </ul>
</div>

</template>

<script>
    export default {
        
    }
</script>

<style scoped>

  .btn-group{
    width: 160px;
  }
  .dropdown-item{
    text-align: center; 
  }
  .dropdown-item:hover{
    background-color: greenyellow;
  }
  .salir .dropdown-item:hover {
    background-color: #cc3b2b;
  }

</style>