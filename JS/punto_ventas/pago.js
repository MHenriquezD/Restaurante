$("input[type=text]").click(function() {
    $(this).select();
  });
  $("input[type=number]").click(function() {
    $(this).select();
  });
$("#btnCobrar").click(function(){
    if(productos != ""){
        pago_debe = verificar_pago(total_factura, pago_acumulado/*,/* pago_dado*/);
        suelto = verificar_suelto(pago_debe, total_factura);
        //pago_debe = pago_pagar;
        if(pago_debe < 0){
            pago_total = pago_acumulado;
            pago_debe_formato = "0.00";
            suelto = -(pago_debe);
        }else{
            pago_debe_formato = pago_debe.toFixed(2);
            suelto = 0;
        } 
        suelto_formato = suelto.toFixed(2);
        $("#mdlPago").modal("show");
        $("#tlPagar").html(total_factura_formato);
        $("#tlDebe").html(pago_debe_formato);
        $("#tlPagado").html(suelto_formato);
    }
})
$("#btnCerrarModal").click(function(){  
    $("#mdlPago").modal("hide");
});

$("#btnCerrarModalUsuario").click(function(){  
    $("#mdlVerificarUsuario").modal("hide");
});

$("#btnEfectivo").click(function(){  
    $("#txtEfectivo").val(pago_debe);
    $("#divEfectivo").show();
    $("#divTarjeta").hide();
    console.log(pago_acumulado);
})

$("#btnTarjeta").click(function(){  
    $("#txtTarjeta").val(pago_debe);
    $("#divTarjeta").show();
    $("#divEfectivo").hide();
    console.log(pago_acumulado);
    console.log(tipo_pago);
})

$("#btnPagoEfectivo").click(function(){
    //$("#divTarjeta").hide();
    pago_efectivo = $("#txtEfectivo").val();
    pago_acumulado += Number.parseFloat(pago_efectivo);
    console.log(pago_acumulado);

    pago_debe = verificar_pago(total_factura, pago_acumulado/*, pago_dado*/);
    suelto = verificar_suelto(pago_debe, total_factura);
    //pago_debe = pago_pagar;
    if(pago_debe < 0){
        pago_total = pago_acumulado;
        pago_debe_formato = "0.00";
        suelto = -(pago_debe);
    }else{
        pago_debe_formato = pago_debe.toFixed(2);
        suelto = 0;
    } 
    suelto_formato = suelto.toFixed(2);
    //$("#mdlPago").modal("show");
    $("#tlPagar").html(total_factura_formato);
    $("#tlDebe").html(pago_debe_formato);
    $("#tlPagado").html(suelto_formato);
    tipo_pago[0].total_pago += Number.parseFloat(pago_efectivo);
    tipo_pago[0].suelto += Number.parseFloat(suelto);
    console.log(tipo_pago);
    $("#divEfectivo").hide();
});
$("#btnPagoTarjeta").click(function(){
    //$("#divTarjeta").hide();
    pago_tarjeta = $("#txtTarjeta").val();
    pago_acumulado += Number.parseFloat(pago_tarjeta);

    pago_debe = verificar_pago(total_factura, pago_acumulado/*, pago_dado*/);
    suelto = verificar_suelto(pago_debe, total_factura);
    //pago_debe = pago_pagar;
    if(pago_debe < 0){
        pago_total = pago_acumulado;
        pago_debe_formato = "0.00";
        suelto = -(pago_debe);
    }else{
        pago_debe_formato = pago_debe.toFixed(2);
        suelto = 0;
    } 
    //pago_debe_formato = pago_debe.toFixed(2);
    suelto_formato = suelto.toFixed(2);
    //$("#mdlPago").modal("show");
    $("#tlPagar").html(total_factura_formato);
    $("#tlDebe").html(pago_debe_formato);
    $("#tlPagado").html(suelto_formato);
    tipo_pago[1].total_pago += Number.parseFloat(pago_tarjeta);;
    console.log(tipo_pago);
    $("#divTarjeta").hide();
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
    if(pago_acumulado < total_factura){
        Swal.fire(
            'No se ha pagado',
            'No se puede avanzar sin pagar',
            'error'
        );
        return;
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
            window.open('../archivos/ticket?n_fac='+data["comentario"], '_blank');
            //window.location.href = '../archivos/ticket?n_fac='+data["comentario"];
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
