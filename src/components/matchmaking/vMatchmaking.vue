<template>
  <div class="container d-flex justify-content-center align-items-center vh-100 bg-light">
    <div class="row">

    <div class="col-sm-6 d-flex align-items-start justify-content-center">
        <div class="d-flex align-items-center justify-content-center p-5 my-3 w-100 w-md-30 rounded bg-red">
          <vue-englishdatepicker :yearSelect="false" value="2023-05-18" class="custom-datepicker" />
      </div>
    </div>

    <div class="col-sm-6 d-flex align-items-center justify-content-center">
      <form class="d-flex flex-column align-items-center bg-secondary rounded p-4 mx-auto my-3 w-100">
        <div class="form-group">
          <label for="hola">Deporte:</label>
          <input type="text" id="hola" />
        </div>
        <div class="form-group">
          <label for="tipo">Tipo:</label>
          <div class="checkbox-group">
            <input type="radio" id="chb1" name="tipo" checked />
            <label for="chb1">Individual</label>
          </div>
          <div class="checkbox-group">
            <input type="radio" id="chb2" name="tipo" />
            <label for="chb2">Equipo</label>
          </div>
        </div>
        <div class="form-group">
          <label for="nombre-equipo">Nombre del equipo:</label>
          <input type="text" id="nombre-equipo" />
        </div>

        <div class="form-group">
          <label for="deporte">Deporte:</label>
          <input type="text" id="deporte" />
        </div>

        <div class="form-group">
          <label for="comentarios">Comentarios:</label>
          <input type="text" id="comentarios" class="more" /><br />
          <input class="btn1" type="button" value="Registrar" />
        </div>
      </form>
    </div>
  </div>
  </div>
</template>

<script>
import VueEnglishdatepicker from 'vue-englishdatepicker';

export default {
  components: {
    VueEnglishdatepicker,
  },
  // rest of the component
}
</script>

<style>
.custom-datepicker {
  width: 350px;
}

.bg-light {
  background-color: #e3f4f4 !important;
}


.bg-red {
  background-color: #c4dfdf !important;
  
}

.bg-secondary {
  background-color: #c4dfdf !important;
}

.w-30 {
  width: 30% !important;
}

.w-40 {
  width: 40% !important;
}

input[type="text"] {
  padding: 5px;
}

.checkbox-group {
  display: inline-block;
  margin-right: 10px;
}

.more {
  height: 200px;
  vertical-align: top;
}

/*ccentrar el formulario */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

form {
  max-width: 400px;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

.btn1{
  background-color: #141414;
  border: 1px solid rgba(54, 54, 54, 0.6);
  font-weight: 600;
  
  border-radius: 50px;

  cursor: pointer;
  height: 45px;
  width: 130px;
  opacity: 1;
  color: white;
  width: auto;
}
input{
  background-color: white;
}
</style>
