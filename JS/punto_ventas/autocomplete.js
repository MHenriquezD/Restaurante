

function buscar_x_nombre(){
    $("#txtCliente").autocomplete( {
        search: function () {},
        source: function (request, response)
        {
            $.ajax(
            {
                url: '/Restaurante/php/clientes/clientes_ac.php',
                dataType: "json",
                type: "POST",
                data:
                {
                    nombre: request.term,
                },
                success: function (data)
                {
                    response(data);
                }
            });
        },
        //minLength: 2,
        select: function (event, ui)
        {
            $('#txtCliente').val(ui.item.nombre); // display the selected text
            $('#txtRTN').val(ui.item.rtn); // save selected id to input
            id_cliente = ui.item.value;
            //alert(id_cliente);
            return false;
        },
        focus: function(event, ui){
            $( "#txtCliente" ).val( ui.item.nombre );
            $( "#txtRTN" ).val( ui.item.rtn );
            return false;
        },
    });
}

function buscar_x_rtn(){
    $("#txtRTN").autocomplete( {
        search: function () {},
        source: function (request, response)
        {
            $.ajax(
            {
                url: '/Restaurante/php/clientes/clientes_ac.php',
                dataType: "json",
                type: "POST",
                data:
                {
                    rtn: request.term,
                },
                success: function (data)
                {
                    response(data);
                }
            });
        },
        //minLength: 2,
        select: function (event, ui)
        {
            $('#txtCliente').val(ui.item.nombre); // display the selected text
            $('#txtRTN').val(ui.item.rtn); // save selected id to input
            id_cliente = ui.item.value;
            //alert(id_cliente);
            return false;
        },
        focus: function(event, ui){
            $( "#txtCliente" ).val( ui.item.nombre );
            $( "#txtRTN" ).val( ui.item.rtn );

            return false;
        },
    });
}
function cargar_productos(){
    $("#txtProductos").autocomplete( {
        search: function () {},
        source: function (request, response)
        {
            $.ajax(
            {
                url: '/Restaurante/php/productos/cargar_productos_pv.php',
                dataType: "json",
                type: "POST",
                data:
                {
                    prd_nom: request.term,
                },
                success: function (data)
                {
                    response(data);
                }
            });
        },
        //minLength: 2,
        select: function (event, ui)
        {
            id_producto = ui.item.id; // save selected id to input
            nombre_producto = ui.item.nombre; // display the selected text
            precio_producto = ui.item.precio;
            desc_producto = ui.item.descripcion;
            porcentaje_isv_producto = ui.item.isv_porcentaje;
            precio_unitario = precio_producto / porcentaje_isv_producto;
            isv_producto = precio_producto - precio_unitario;
            //console.log(precio_unitario);
            //precio_producto = ui.item.precio;
            agregar_producto();
            return false;
        },
    });
}

function limpiar_cl(){
    $("#txtCliente").val("");
}
function limpiar_rtn(){
    $("#txtRTN").val("");
}