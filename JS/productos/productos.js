cargar_productos();
d = new Date(); 
$("#fecha").html(d.yyyymmdd());

jQuery(document).ready(function($){
    $(document).ready(function() {
        //$('#slcImpuesto').select2();
        $('#mdlProducto').modal({ backdrop: 'static', keyboard: false });
    });
});

$("#chkEstado").click(function(){
    
    if( $('#chkEstado').is(':checked') ) {
        estado_producto = 1;
    }else{
        estado_producto = 0;
    }
});

$("#mdlCerrar").click(function(){
    $("#mdlProducto").modal("hide");
    $("#txtNombreProducto").val("");
    $("#txtDescripcionProducto").val("");
    $("#txtPrecioProducto").val("");
    $("#chkEstado").prop( "checked", false );
    estado_producto = 0;
    $("#chkEstado").val("");
    $("#slcImpuesto").val("");
});
function cargar_productos(){
    $.ajax({
        url : '/Restaurante/php/productos/cargar_productos.php',
        data : {},
        type : 'POST',
        dataType : 'json',

        success : function(json) {
            productos_data = "";
            for(var i = 0; i < json.length; i++){
                productos_data +=
                    "<tr>"+
                        "<td class='centro'>"+
                            "<button type='button' class='btn btn-secondary rounded-circle' onclick='cargar_producto(\""+json[i]["id"]+"\")'>"+
                                "<i class='fa-solid fa-user-pen mg-button'></i>"+
                            "</button>"+
                        "</td>"+
                        "<td>"+json[i]["nombre"]+"</td>"+
                        "<td class='final'>"+json[i]["precio"]+"</td>"+
                        "<td>"+json[i]["descripcion"]+"</td>"+
                        "<td>"+json[i]["isv_name"]+"</td>"+
                        "<td></td>"+
                    "</tr>";
            }
            $("#productosInfo").html(productos_data);
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
}

function cargar_producto(idp){
    cargar_impuestos();
    id_producto = idp;
    $.ajax({
        url : '/Restaurante/php/productos/cargar_producto.php',
        data : {
            idp: id_producto
        },
        type : 'POST',
        dataType : 'json',

        success : function(json) {
            $("#mdlProducto").modal("show");
            $("#txtNombreProducto").val(json["nombre"]);
            $("#txtDescripcionProducto").val(json["descripcion"]);
            $("#txtPrecioProducto").val(json["precio"]);
            if(json["estado"] == 1){
                $("#chkEstado").prop( "checked", true );
                estado_producto = 1;
            }else{
                $("#chkEstado").prop( "checked", false );
                estado_producto = 0;
            }
            $("#chkEstado").val(json["precio"]);
            $("#slcImpuesto").val(json["isv"]);
            $("#btnBorrarProducto").show();
            $("#btnSaveProducto").show();
            $("#btnAgregarProducto").hide();
            //id_producto = 0;
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
}

$("#btnNuevo").click(function(){
    $("#mdlProducto").modal("show");
    $("#btnBorrarProducto").hide();
    $("#btnSaveProducto").hide();
    $("#btnAgregarProducto").show();
    cargar_impuestos();
});

$("#btnAgregarProducto").click(function(){
    nombre = $("#txtNombreProducto").val();
    descripcion = $("#txtDescripcionProducto").val();
    precio = $("#txtPrecioProducto").val();
    isv = $("#slcImpuesto").val();
    img = "";
    $.ajax({
        url : '/Restaurante/php/productos/crear_productos.php',
        data : {
            nombre: nombre,
            descripcion: descripcion,
            precio: precio,
            isv: isv,
            estado: estado_producto,
            imagen: img
        },
        type : 'POST',
        dataType : 'json',

        success : function(json) {
            Swal.fire(
                'Correcto',
                'Producto creado con éxito',
                'success'
            );
            $("#mdlProducto").modal("hide");
            $("#txtNombreProducto").val("");
            $("#txtDescripcionProducto").val("");
            $("#txtPrecioProducto").val("");
            $("#chkEstado").prop( "checked", false );
            estado_producto = 0;
            $("#chkEstado").val("");
            $("#slcImpuesto").val("");
            cargar_productos();
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

$("#btnSaveProducto").click(function(){
    Swal.fire({
        title: 'Está seguro?',
        text: "Los cambios no serán reversibles",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Borrar'
        }).then((result) => {
        if (result.isConfirmed) {
            guardar_producto();
            usr_user = "";
            Swal.fire(
            'Actualizado!',
            'Este producto se ha actualizado',
            'success'
            )
        }
    });
});

$("#btnBorrarProducto").click(function(){
    Swal.fire({
        title: 'Está seguro?',
        text: "Este producto no podrá recuperarse",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Borrar'
        }).then((result) => {
        if (result.isConfirmed) {
            eliminar_producto();
            usr_user = "";
            Swal.fire(
            'Borrado!',
            'Este producto ha sido borrado',
            'success'
            )
        }
    });
});

function cargar_impuestos(){
    $.ajax({
        url : '/Restaurante/php/isv/cargar_isv.php',
        data : {},
        type : 'POST',
        dataType : 'json',

        success : function(json) {
            var datos_isv = "<option value='0'>Seleccione</option>";
            //$('#slcImpuesto').select2()
            for(var i = 0; i < json.length; i++){
                datos_isv += "<option value='"+json[i]["id"]+"' selected='selected'>"+json[i]["nombre"]+"</option>";
            }
            $("#slcImpuesto").html(datos_isv);
            $("#slcImpuesto").val(0);
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
}

function eliminar_producto(){
    $.ajax({
        url : '/Restaurante/php/productos/borrar_productos.php',
        data : {
            idp: id_producto
        },
        type : 'POST',
        dataType : 'json',

        success : function(json) {
            $("#mdlProducto").modal("hide");
            $("#txtNombreProducto").val(json["id"]);
            $("#txtDescripcionProducto").val(json["descripcion"]);
            $("#txtPrecioProducto").val(json["precio"]);
            if(json["estado"] == 1){
                $("#chkEstado").prop( "checked", true );
                estado_producto = 1;
            }else{
                $("#chkEstado").prop( "checked", false );
                estado_producto = 0;
            }
            $("#chkEstado").val(json["precio"]);
            $("#slcImpuesto").val(json["estado"]);
            $("#btnBorrarProducto").show();
            $("#btnSaveProducto").show();
            $("#btnAgregarProducto").hide();
            id_producto = 0;
            
            cargar_productos();
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
}

/*$("#slcImpuesto").change(function(){
    alert ($("#slcImpuesto").val());
});*/

function guardar_producto(){
    nombre = $("#txtNombreProducto").val();
    descripcion = $("#txtDescripcionProducto").val();
    precio = $("#txtPrecioProducto").val();
    isv = $("#slcImpuesto").val();
    alert(isv);
    img = "";
    $.ajax({
        url : '/Restaurante/php/productos/editar_productos.php',
        data : {
            nombre: nombre,
            descripcion: descripcion,
            precio: precio,
            isv: isv,
            estado: estado_producto,
            imagen: img,
            idp: id_producto
        },
        type : 'POST',
        dataType : 'json',

        success : function(json) {
            Swal.fire(
                'Correcto',
                'Producto editado con éxito',
                'success'
            );
            $("#mdlProducto").modal("hide");
            $("#txtNombreProducto").val("");
            $("#txtDescripcionProducto").val("");
            $("#txtPrecioProducto").val("");
            $("#chkEstado").prop( "checked", false );
            estado_producto = 0;
            $("#chkEstado").val("");
            $("#slcImpuesto").val("");
            cargar_productos();
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
}