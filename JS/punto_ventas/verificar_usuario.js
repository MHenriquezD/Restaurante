function verificar_fila(idf){
    idf_verificar = idf;
    $.ajax(
    {
        url: '../php/punto_venta/verificar_sesion.php',
        dataType: "json",
        type: "POST",
        data:{},
        success: function (data)
        {
            if(data["tipo"] == 1){
                eliminar_fila(idf);
            }else{
                $("#mdlVerificarUsuario").modal('show');
                Swal.fire(
                    'Usuario no Autorizado!',
                    'Este usuario no tiene permisos para eliminar productos.',
                    'error'
                );
            }
        }
    });
}

$("#btnVerificarUser").click(function (){
    //console.log(idf_verificar);
    var usuario = $("#txtUsuario").val();
    var contrasena = $("#txtContrasena").val();
    //alert(contrasena);
    //alert(usuario);
    $.ajax({
        url: '../php/punto_venta/verificar_sesion.php',
        data: {
            user: usuario,
            contra: contrasena
        },
        type: 'POST',
        dataType: 'json',

        success: function (json) {
            if (json["tipo"] == 1) {
                //console.log(idf_verificar);
                
                $("#txtUsuario").val("");
                $("#txtContrasena").val("");
                $("#mdlVerificarUsuario").modal('hide');
                Swal.fire(
                    'Usuario Autorizado!',
                    'Producto eliminado de forma correcta.',
                    'success'
                );
                eliminar_fila(idf_verificar);
            } else {
                //console.log(idf_verificar);
                Swal.fire(
                    'Usuario no Autorizado!',
                    'Este usuario no tiene permisos para eliminar productos.',
                    'error'
                );
                $("#txtUsuario").val("");
                $("#txtContrasena").val("");
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
})

function mostrarPassword(){
    var cambio = document.getElementById("txtContrasena");
    if(cambio.type == "password"){
        cambio.type = "text";
        $('.icon').removeClass('fa fa-eye-slash').addClass('fa fa-eye');
    }else{
        cambio.type = "password";
        $('.icon').removeClass('fa fa-eye').addClass('fa fa-eye-slash');
    }
} 