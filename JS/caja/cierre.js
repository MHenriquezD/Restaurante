$("#btnCierre").click( function() {
    $.ajax({
        url: '../../php/caja/cargar_totales.php',
        data: {},
        type: 'POST',
        dataType: 'json',

        success: function (data) {
            $("#mdlCierre").modal("show");
            caja = data["caja"];
            total_facturas = data["total_facturas"];
            total_gasto = data["total_gasto"];
            total_efectivo = data["total_efectivo"];
            total_tarjeta = data["total_tarjeta"];
            total_dia = total_facturas - total_gasto;
            id_caja = data["id_caja"];
            ganancia = total_efectivo-total_gasto;

            datos = {
                id_caja: id_caja,
                caja: caja,
                ventas: total_facturas,
                gastos: total_gasto,
                efectivo: total_efectivo,
                tarjeta: total_tarjeta,
                ganancia: ganancia
            }

            efectivo = total_efectivo + caja;
            $("#txtTotal").val(total_facturas);
            $("#txtCaja").val(caja);
            $("#txtGastos").val(total_gasto);
            $("#txtTotalDia").val(total_dia);
            $("#txtEfectivo").val(efectivo);
            $("#txtTarjeta").val(total_tarjeta);
            $("#txtEfectivoRestante").val(ganancia);
        },
        error: function (json) {
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

//Crear cierre de caja
$("#btnCerrarCaja").click( function() {
    console.log(datos);
    $.ajax({
        url: '../../php/caja/cerrar_caja.php',
        data: datos,
        type: 'POST',
        dataType: 'json',

        success: function (data) {
            Swal.fire(
                'Caja Cerrada!',
                'La caja ha sido cerrada con éxito',
                'success'
            );
            $("#txtTotal").val();
            $("#txtCaja").val();
            $("#txtGastos").val();
            $("#txtTotalDia").val();
            $("#txtEfectivo").val();
            $("#txtTarjeta").val();
            $("#txtEfectivoRestante").val();
            datos = {};
            $("#mdlCierre").modal("hide");
            cargar_facturas();
        },
        error: function (json) {
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