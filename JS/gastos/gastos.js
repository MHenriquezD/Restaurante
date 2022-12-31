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

  Date.prototype.yyyymmdd = function() { 
    var yyyy = this.getFullYear().toString(); 
    var mm = (this.getMonth()+1).toString(); // getMonth() is zero-based 
    var dd = this.getDate().toString(); 
    return yyyy +  "-" + (mm[1]?mm:"0"+mm[0]) + "-" + (dd[1]?dd:"0"+dd[0]) ; // padding 
  }; 
  d = new Date(); 
  //console.log("fecha: "+d);
  $("#txtFecha").val(d.yyyymmdd());
  
}

//$("#fecha").html(d.yyyymmdd());
$("#btnGastos").click(function () {
  descripcion = $("#txtDescripcion").val();
  fecha = $("#txtFecha").val();
  cantidad = $("#txtCantidad").val();
  gasto = $("#txtGasto").val();
  //console.log(gasto);
  if (gasto == 0 || cantidad == 0 || descripcion == "") {
    Swal.fire(
      'Descripción, Gasto o Cantidad vacíos!',
      'Estos campos no pueden ser 0 (ceros) o vacíos.',
      'error'
    );
    return;
  }
  datos = {
    "descripcion" : descripcion,
    "fecha" : fecha,
    "cantidad" : cantidad,
    "gasto" : gasto
  }
  console.log(datos);
  //return;
  $.ajax({
    url: '../../php/gastos/gastos.php',
    data: datos,
    type: 'POST',
    dataType: 'json',

    success: function (data) {
      if(data["cod"] == 0){
        Swal.fire(
          'correcto!',
          'Gasto '+data["respuesta"],
          'error'
        );
      }else if(data["cod"] == 1){
        Swal.fire(
          'correcto!',
          data["respuesta"],
          'success'
        );
        $("#txtDescripcion").val("");
        $("#txtCantidad").val(0);
        $("#txtGasto").val(0);
        fecha_actual();
        window.location.href = '../../forms/gastos/lista_gastos.html';
      }
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
});