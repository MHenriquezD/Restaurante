function verificar_pago(){
    pago_dado = pago_debe;
    pago_dado_formato = pago_debe_formato = pago_dado.toFixed(2);
}

$("#btnPagar").click(function(){
    $.ajax({
        url : '/Restaurante/php/punto_venta/crear_factura.php',
        data : {
            productos: productos
        },
        type : 'POST',
        dataType : 'json',

        success : function(json) {
            Swal.fire(
                'Simón',
                'Productos enviados',
                'success'
            );                
        },
        error : function(json) {
            Swal.fire(
                'Error',
                'Error en la conexión con el servidor',
                'error'
            );
        },

        // código a ejecutar sin importar si la petición falló o no
        complete : function(xhr, status) {
            /*Swal.fire(
                'Bien!',
                'Conexión éxitosa',
                'success'
            )
            //alert('Petición realizada');*/
        }
    });
});