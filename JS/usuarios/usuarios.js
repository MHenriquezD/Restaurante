var estado_usuario = 0;
var admin_usuario = 0;
var usr_user = "";
var usr_pswd = "";
var usr_email = "";
var usr_name = "";
$("#passwordEdit").hide();
cargar_usuarios();
$("#mdlCerrar").click(function(){
    $("#mdlUsuario").modal("hide");
    $("#editUser").html("");
    $("#usuarioEdit").val("");
    $("#correoEdit").val("");
    $("#nombreEdit").val("");
    $('#estadoEdit').prop("checked", false);
    $('#adminEdit').prop("checked", false);
});
$("#estadoEdit").click(function(){
    
    if( $('#estadoEdit').is(':checked') ) {
        estado_usuario = 1;
    }else{
        estado_usuario= 0;
    }
    //alert(estado_usuario);
});
$("#adminEdit").click(function(){
    
    if( $('#adminEdit').is(':checked') ) {
        admin_usuario = 1;
    }else{
        admin_usuario= 0;
    }
    //alert(estado_usuario);
});

$("#nuevoUsuario").click(function(){
    $("#mdlUsuario").modal("show");
    $("#editUser").html("");
    $("#editUser").append("Nuevo usuario");
    $("#usuarioEdit").val("");
    $("#correoEdit").val("");
    $("#nombreEdit").val("");
    $("#pswdEdit").val("");
    $('#estadoEdit').prop("checked", false);
    $('#adminEdit').prop("checked", false);
    $("#passwordEdit").show();
    $("#btnSaveUsuario").hide();
    $("#btnAggUsuario").show();
    $("#btnBorrarUsuario").hide();
    $("#usuarioEdit").removeAttr('disabled');
});

$("#btnAggUsuario").click(function(){
    usr_user = $("#usuarioEdit").val();
    usr_pswd = $("#pswdEdit").val();
    usr_email = $("#correoEdit").val();
    usr_name = $("#nombreEdit").val();
    $.ajax({
        url : '../php/usuarios/agregar_usuario.php',
        data : {
            usuario: usr_user,
            password: usr_pswd,
            correo: usr_email,
            nombre: usr_name,
            estado: estado_usuario,
            admin: admin_usuario
        },
        type : 'POST',
        dataType : 'json',

        success : function(json) {
            Swal.fire(
                'Correcto!',
                'Usuario creado con éxito',
                'success'
            );
            
            $("#usuarioEdit").val("");
            $("#correoEdit").val("");
            $("#nombreEdit").val("");
            $("#pswdEdit").val("");
            $('#estadoEdit').prop("checked", false);
            $('#adminEdit').prop("checked", false);
            $("#mdlUsuario").modal("hide");
            usr_user = "";
            cargar_usuarios();
        },
        error : function(json) {
            Swal.fire(
                'Error',
                'Error en la conexión con el servidor',
                'error'
            );
            
            $('#btnAggUsuario').prop('disabled', true);
        },

        // código a ejecutar sin importar si la petición falló o no
        complete : function(xhr, status) {
            /*Swal.fire(
                'Bien!',
                'Conexión exitosa',
                'success'
            )
            //alert('Petición realizada');*/
        }
    });

});

$("#btnSaveUsuario").click(function() {
    usr_user = $("#usuarioEdit").val();
    usr_pswd = $("#pswdEdit").val();
    usr_email = $("#correoEdit").val();
    usr_name = $("#nombreEdit").val();
    $.ajax({
        url : '../php/usuarios/guardar_usuario.php',
        data : {
            usuario: usr_user,
            correo: usr_email,
            nombre: usr_name,
            estado: estado_usuario,
            admin: admin_usuario
        },
        type : 'POST',
        dataType : 'json',

        success : function(json) {
            Swal.fire(
                'Correcto!',
                'Usuario guardado con éxito',
                'success'
            );
            
            $("#usuarioEdit").val("");
            $("#correoEdit").val("");
            $("#nombreEdit").val("");
            $("#pswdEdit").val("");
            $('#estadoEdit').prop("checked", false);
            $('#adminEdit').prop("checked", false);
            $("#mdlUsuario").modal("hide");
            usr_user = "";
            cargar_usuarios();
            
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
                'Conexión exitosa',
                'success'
            )
            //alert('Petición realizada');*/
        }
    });
});

$("#btnBorrarUsuario").click(function(){
    Swal.fire({
        title: 'Está seguro?',
        text: "Este usuario no podrá recuperarse",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Borrar'
        }).then((result) => {
        if (result.isConfirmed) {
            borrar_usuario();
            
            usr_user = "";
            Swal.fire(
            'Borrado!',
            'Este usuario ha sido borrado',
            'success'
            )
        }
    });
});

function borrar_usuario(){
    usr_user = $("#usuarioEdit").val();
    $.ajax({
        url : '../php/usuarios/eliminar_usuario.php',
        data : {
            usuario: usr_user,
        },
        type : 'POST',
        dataType : 'json',

        success : function(json) {
            $("#editUser").html("");
            $("#editUser").append("Editar usuario "+json["usuario"]);
            $("#usuarioEdit").val(json["usuario"]);
            $("#correoEdit").val(json["correo"]);
            $("#nombreEdit").val(json["nombre"]);
            if(json["estado"] == 1){
                $('#estadoEdit').prop("checked", true);
            }else if (json["estado"] == 0){
                $('#estadoEdit').prop("checked", false);
            }
            if(json["admin"] == 1){
                $('#adminEdit').prop("checked", true);
            }else if (json["admin"] == 0){
                $('#adminEdit').prop("checked", false);
            }
            usr_user = "";
            $("#mdlUsuario").modal("hide");
            cargar_usuarios();
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
                'Conexión exitosa',
                'success'
            )
            //alert('Petición realizada');*/
        }
    });
}
function editar_usuario(user){
    $("#mdlUsuario").modal("show");
    $("#passwordEdit").hide();
    $("#btnAggUsuario").hide();
    $("#btnSaveUsuario").show();
    $("#btnBorrarUsuario").show();
    $("#usuarioEdit").attr('disabled','disabled');
    $.ajax({
        url : '../php/usuarios/editar_usuario.php',
        data : {
            usuario: user,
        },
        type : 'POST',
        dataType : 'json',

        success : function(json) {
            $("#editUser").html("");
            $("#editUser").append("Editar usuario "+json["usuario"]);
            $("#usuarioEdit").val(json["usuario"]);
            $("#correoEdit").val(json["correo"]);
            $("#nombreEdit").val(json["nombre"]);
            if(json["estado"] == 1){
                $('#estadoEdit').prop("checked", true);
            }else if (json["estado"] == 0){
                $('#estadoEdit').prop("checked", false);
            }
            if(json["admin"] == 1){
                $('#adminEdit').prop("checked", true);
            }else if (json["admin"] == 0){
                $('#adminEdit').prop("checked", false);
            }
            cargar_usuarios();
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
                'Conexión exitosa',
                'success'
            )
            //alert('Petición realizada');*/
        }
    });
}

function cargar_usuarios(){
    $.ajax({
        url : '../php/usuarios/cargar_usuarios.php',
        data : {},
        type : 'POST',
        dataType : 'json',

        success : function(json) {
            $("#user_data").html("");
            var i = 0;
            var contenido = "";
            var estado = "";
            for(i; i < json.length; i++){
                if(json[i]["estado"] == 1){
                    estado = "Activo"
                }else{
                    estado = "Inactivo";
                } 
                $("#user_data").append(
                    "<tr>"+
                        "<td style='text-align:center;'>"+
                            "<button type='button' class='btn btn-secondary rounded-circle' onclick='editar_usuario(\""+json[i]["usuario"]+"\")'>"+
                                "<i class='fa-solid fa-user-pen mg-button'></i>"+
                            "</button>"+
                        "</td>"+
                        "<td>"+json[i]["usuario"]+"</td>"+
                        "<td>"+json[i]["correo"]+"</td>"+
                        "<td>"+json[i]["nombre"]+"</td>"+
                        "<td>"+estado+"</td>"+
                    "</tr>"
                )
            }
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
                'Conexión exitosa',
                'success'
            )
            //alert('Petición realizada');*/
        }
    });
}