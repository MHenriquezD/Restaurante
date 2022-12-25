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
                "<button type='button' class='btn btn-outline-danger btn-sm rounded-circle' onclick='eliminar_fila(\""+fila_productos+"\")' id='btnBorrar_"+fila_productos+"'>"+
                    "<i class='fa-solid fa-trash mg-top'></i>"+
                "</button>"+
                "&nbsp;&nbsp;&nbsp;"+
                "<button type='button' class='btn btn-outline-primary btn-sm rounded-circle' onclick='editar_fila(\""+fila_productos+"\")' id='btnEdit_"+fila_productos+"'>"+
                    "<i class='fa-solid fa-pen-to-square'></i>"+
                "</button>"+
                "&nbsp;&nbsp;&nbsp;"+
                "<button type='button' class='btn btn-outline-primary btn-sm rounded-circle' style='display: none;' onclick='save_fila(\""+fila_productos+"\")' id='btnSave_"+fila_productos+"'>"+
                    "<i class='fa-solid fa-floppy-disk'></i>"+
                "</button>"+
            "</td>"+
            "<td id='cantProd_"+fila_productos+"' class='text-center my-4'>"+cantidad_productos+"</td>"+
            "<td>"+nombre_producto+"</td>"+
            "<td class='Money text-end'>L. "+precio_unitario_formato+"</td>"+
            "<td class='Money text-end'>L. <span id='totalFila_"+fila_productos+"'>"+total_fila_formato+"</span></td>"+
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
        "cantidad_productos": cantidad_productos,
        "isv": isv_producto,
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

function editar_fila(idf){
    cant_prod = dato_restar = productos[idf-1].cantidad_productos;
    $("#btnEdit_"+idf).hide();
    $("#btnBorrar_"+idf).hide();
    $("#btnSave_"+idf).show();
    $("#cantProd_"+idf).html(
        "<input class='text-end' width='100%' id='cantEdit_"+idf+"' min='1' type='number' maxlength='12' value='"+cant_prod+"'></input>"
    );
    console.log("btnEdit_"+idf);
    $("#cantEdit_"+idf).select();
    $("#cantEdit_"+idf).keydown(function (e){ 
        if(e.keyCode == 13){ 
            save_fila(idf); 
        } 
    });
}

function save_fila(idf){
    precio = dato_restar = productos[idf-1].precio_producto;
    $("#btnEdit_"+idf).show();
    $("#btnBorrar_"+idf).show();
    $("#btnSave_"+idf).hide();
    //datos que seran editados mhenriquez 25/12/2022
    cant_editada = $("#cantEdit_"+idf).val();
    total_editado = cant_editada * precio;

    /** 
     editamos los datos del array con los datos nuevos
     mhenriquez 25/12/2022  
     */
    dato_restar = productos[idf-1].total;
    total_factura -= dato_restar;
    productos[idf-1].cantidad_productos = cant_editada;
    productos[idf-1].total = total_editado;
    total_factura += total_editado;
    total_factura_formato = total_factura.toFixed(2);
    console.log(productos);
    total_editado = total_editado.toFixed(2);
    $("#cantProd_"+idf).html(cant_editada);
    $("#totalFila_"+idf).text(total_editado);
    $(".totalFac").html("L. "+total_factura_formato);
    //$("#btnEdit_"+idf).unbind('click');
    //document.getElementById('#btnEdit_'+idf).onclick = "editar_fila(\""+idf+"\",\""+cant_editada+"\")";
}