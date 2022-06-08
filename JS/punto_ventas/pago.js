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



$("#btnPagar").click(function(){
    nombre_cliente = $("#txtCliente").val();
    rtn_cliente = $("#txtRTN").val();
    if(nombre_cliente == ""){
        nombre_cliente = "Consumidor Final"
    }
    if(rtn_cliente == ""){
        rtn_cliente = ""
    }
    $.ajax(
    {
        url: '../php/crear_factura.php',
        dataType: "json",
        type: "POST",
        data:
        {
            id_cliente: id_cliente,
            nombre_cliente: nombre_cliente,
            rtn_cliente: rtn_cliente,
            tipo_pago: tipo_pago,
            productos: productos,
            total_factura: total_factura,
            suelto: suelto
        },
        success: function (data)
        {
            total_factura = 0, fila_productos = 0, filas_actuales = 0;
            id_producto = 0,nombre_producto = "",precio_producto = 0,desc_producto = "",porcentaje_isv_producto = 0, precio_unitario = 0;
            pago_debe = 0, pago_debe_formato = 0, pago_dado = 0, pago_dado_formato = 0, pago_acumulado = 0, pago_acumulado_formato = 0;
            id_cliente = 0;
            rtn_cliente = "", nombre_cliente = "";
            suelto = 0, suelto_formato = "";
           
            tipo_pago = [
                {
                    tipo: 1,
                    total_pago: 0,
                    suelto: 0
                },
                {
                    tipo: 2,
                    total_pago: 0,
                    suelto: 0
                }
            ];
            productos = [];
            total_factura = 0;
            total_factura_formato = total_factura.toFixed(2);
            $("#txtCliente").val("");
            $("#txtRTN").val("");
            $(".totalFac").html("L. "+total_factura_formato);
            $("#mdlPago").modal("hide");
            $("#tbProductos").html("");
            //window.open('../archivos/ticket?n_fac='+data["comentario"], '_blank');
            window.location.href = '../archivos/ticket?n_fac='+data["comentario"];
            /*Swal.fire(
                'Bien',
                'funcionó',
                'success'
            );*/
        },
        error : function(data) {
            Swal.fire(
                'Error',
                'Error en la conexión con el servidor',
                'error'
            );
        }
    });
});