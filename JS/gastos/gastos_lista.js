// fecha actual
fecha_actual();
function fecha_actual(){
  /*const formateador = new Intl.DateTimeFormat('es-HN', { dateStyle: 'medium', timeStyle: 'medium' });
  const fecha_hoy = new Date();
  const fechaFormateada = formateador.format(fecha_hoy);
  console.log(fechaFormateada)
  hora = fechaFormateada.substr(12, 15);
  hora = hora.substr(0, 5);
  //console.log("hora: "+ hora);
  //return;
  var dt = new Date(fecha_hoy.toISOString());

  fecha_new = dt.toISOString().split('T')[0] + "T" + hora;
  fecha_normal = dt.toISOString().split('T')[0];
  console.log(fecha_new);
  $("#txtFecha").val(fecha_normal);*/
  
}

//Nuevo Gasto mhenriquez 30/12/2022
$("#btnComprar").click(function(){
  window.location.href = '../../forms/gastos/gastos.html';
});

cargar_gastos();
function cargar_gastos() {
  
  //return;
  $.ajax({
    url: '../../php/gastos/listado_gastos.php',
    data: {},
    type: 'POST',
    dataType: 'json',

    success: function (data) {
      var infoGastos = "", total_dia = 0, fecha_nueva = "";
      for(var i = 0; i < data.length; i++){
        const [year, month, day] = data[i]["fecha"].split('-');

        fecha_nueva = [month, day, year].join('/');
        infoGastos += 
          "<tr>"+
            "<td>"+data[i]["detalle"]+"</td>"+
            "<td>"+fecha_nueva+"</td>"+
            "<td>"+data[i]["cantidad"]+"</td>"+
            "<td class='text-end'>L. "+data[i]["gasto"].toFixed(2)+"</td>"+
          "</tr>";
          total_dia += data[i]["gasto"];
      }
      total_dia = "<strong>L. " + total_dia.toFixed(2)+"</strong>";
      $("#infoGastos").html(infoGastos);
      $("#totalGastos").html(total_dia);
    },
    error: function (json) {
      Swal.fire(
        'Error!',
        'La conexión con el servidor ha fallado',
        'error'
      )
    },

    // código a ejecutar sin importar si la petición falló o no
    complete: function (xhr, status) {
      /*Swal.fire(
          'Bien!',
          'Conexión exitosa',
          'success'
      )
      //alert('Petición realizada');*/
    }
  });
}