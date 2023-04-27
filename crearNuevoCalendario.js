



function crearCalendario(mes, anio) {
    // Obtener la fecha actual
    var fecha = new Date();
    var mesActual = fecha.getMonth();
    var anioActual = fecha.getFullYear();
    
    // Obtener el primer día del mes
    var primerDia = new Date(anio, mes, 1).getDay();
    if (primerDia != 0) {
      primerDia -= 1;
    } else {
      primerDia += 6;
    }

    function actualizarCalendario2(mesSeleccionado, anioSeleccionado) {
// Obtener el primer día del mes
var primerDia = new Date(anioSeleccionado, mesSeleccionado, 1).getDay();
if (primerDia != 0) {
primerDia -= 1;
} else {
primerDia += 6;
}

// Obtener el último día del mes
var ultimoDia = new Date(anio, mes + 1, 0).getDate();

// Crear la tabla del calendario
var tabla = '<table>';
tabla += '<tr><th>Lunes</th><th>Martes</th><th>Miércoles</th><th>Jueves</th><th>Viernes</th><th>Sábado</th><th>Domingo</th></tr>';
var dia = 1;
for (var i = 0; i < 6; i++) {
tabla += '<tr>';
for (var j = 0; j < 7; j++) {
  if ((i === 0 && j < primerDia) || dia > ultimoDia) {
    tabla += '<td></td>';
  } else {
    tabla += '<td>' + dia + '</td>';
    dia++;
  }
}
tabla += '</tr>';
if (dia > ultimoDia) {
  break;
}
}
tabla += '</table>';

// Actualizar la tabla del calendario en el HTML
var calendarioDiv = document.getElementById('calendario');
calendarioDiv.innerHTML = tabla;

// Actualizar el encabezado del calendario con el mes y año seleccionados
var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
var mesTexto = meses[mes];
var anioTexto = anio.toString();
var encabezado = document.getElementById('encabezado');
encabezado.innerHTML = mesTexto + ' ' + anioTexto;
}
    
    
    // Obtener el último día del mes
    var ultimoDia = new Date(anioActual, mesActual + 1, 0).getDate();
    
    // Crear la tabla del calendario
    var tabla = '<table>';
    tabla += '<tr><th>Lunes</th><th>Martes</th><th>Miércoles</th><th>Jueves</th><th>Viernes</th><th>Sábado</th><th>Domingo</th></tr>';
    var dia = 1;
    for (var i = 0; i < 6; i++) {
      tabla += '<tr>';
      for (var j = 0; j < 7; j++) {
        if ((i === 0 && j < primerDia) || dia > ultimoDia) {
          tabla += '<td></td>';
        } else {
          var clasehoy ='';
          if (dia === fecha.getDate() && mesActual === fecha.getMonth() && anioActual === fecha.getFullYear()) {
            tabla += '<td class="hoy">' + dia + '</td>';
          } else {
            tabla += '<td>' + dia + '</td>';
                }
          dia++;
        }
      }
      tabla += '</tr>';
      if (dia > ultimoDia) {
        break;
      }
    }
    tabla += '</table>';
    
    // Agregar la tabla del calendario al HTML
    var calendarioDiv = document.getElementById('calendario');
    calendarioDiv.innerHTML = tabla;
    
    // Agregar escuchadores de eventos a los días del calendario
    var dias = document.querySelectorAll('#calendario td');
    for (var i = 0; i < dias.length; i++) {
      dias[i].addEventListener('click', function() {
        var diaSeleccionado = this.innerText;
        console.log('El día seleccionado es: ' + diaSeleccionado);
      });
    }
  }