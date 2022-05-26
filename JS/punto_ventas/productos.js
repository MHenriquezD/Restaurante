function agregar_producto(){
    cantidad_productos = $("#txtCantidad").val();
    //alert ("id: "+id_producto+", Nombre: "+nombre_producto+", Precio: "+precio_producto+", Descripción: "+desc_producto+", Impuesto: "+porcentaje_isv_producto);
    fila_productos ++;
    filas_actuales ++;
    total_factura += total_fila = cantidad_productos * precio_producto;
    total_factura_formato = total_factura.toFixed(2);
    precio_unitario_formato = precio_unitario.toFixed(2);
    total_fila_formato = total_fila.toFixed(2);
    //pago_debe = total_factura;
    //pago_dado = pago_debe;
    //pago_dado_formato = pago_debe_formato = pago_dado.toFixed(2);
    
    $("#tbProductos").append(
        "<tr id='fila"+fila_productos+"'>"+
            "<td class='text-center'>"+
                "<button type='button' class='btn btn-outline-danger btn-sm rounded-circle' onclick='eliminar_fila(\""+fila_productos+"\")'>"+
                    "<i class='fa-solid fa-trash mg-top'></i>"+
                "</button>"+
            "</td>"+
            "<td>"+cantidad_productos+"</td>"+
            "<td>"+nombre_producto+"</td>"+
            "<td class='Money text-end'>L. "+precio_unitario_formato+"</td>"+
            "<td class='Money text-end'>L. "+total_fila_formato+"</td>"+
        "</tr>"
    );
    $(".totalFac").html("L. "+total_factura_formato);
    $("#txtProductos").val("");
    $("#txtCantidad").val(1);
    add_productos = {
        "id_fila" : fila_productos,
        "id_prod" : id_producto,
        "nombre" : nombre_producto,
        "precio_producto" : precio_producto,
        "precio_unitario" : precio_unitario,
        "total" : total_fila 
    }
    productos.push(add_productos);
    console.log(productos);
    //console.log(productos[0].nombre);
}

function eliminar_fila(idf){
    fila_eliminar = idf - 1;
    arreglo_restar = productos.filter((item) => item.id_fila == idf);
    dato_restar = arreglo_restar[0].total
    console.log(filas_actuales);
    filas_actuales --;
    console.log(filas_actuales);
    total_factura -= dato_restar;
    total_factura_formato = total_factura.toFixed(2);
    //pago_debe = total_factura;
    //pago_dado = pago_debe;
    //pago_dado_formato = pago_debe_formato = pago_dado.toFixed(2);
    $(".totalFac").html("L. "+total_factura_formato);
    productos2 = productos;
    //productos.splice(fila_eliminar, idf);
    productos = productos.filter((item) => item.id_fila != idf);
    console.log(productos);
    $("#fila"+idf).remove();
}