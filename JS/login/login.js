$('#txtUsuario').val("");
$('#txtContrasena').val("");
limpiar_sesion();
sesion();

function sesion() {
    $.ajax({
        url: 'php/iniciar_sesion.php',
        data: {},
        type: 'POST',
        dataType: 'json',

        success: function (json) {
            console.log("Sesión iniciada");
        },
        error: function (json) {
            console.log("No se pudo iniciar la sesion");
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
}

function limpiar_sesion() {
    $.ajax({
        url: 'php/limpiar_login.php',
        data: {},
        type: 'POST',
        dataType: 'json',

        success: function (json) {
            console.log("Sesión limpiada");
        },
        error: function (json) {
            console.log("No se pudo limpiar la sesion");
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
}

$('#txtUsuario').keydown(function (e) {
    if (e.keyCode == 13) {
        login();
    }
})

$('#txtContrasena').keydown(function (e) {
    if (e.keyCode == 13) {
        login();
    }
})

$("#iniciar").click(function () {
    login();
});

function login() {
    var usuario = $("#txtUsuario").val();
    var contrasena = $("#txtContrasena").val();
    //alert(contrasena);
    //alert(usuario);
    $.ajax({
        url: 'php/verificar_login.php',
        data: {
            user: usuario,
            contra: contrasena
        },
        type: 'POST',
        dataType: 'json',

        success: function (json) {
            if (json == 1) {
                window.location.href = "../menu/menu";
            } else if (json == 0) {
                $("#txtContrasena").val("");
                $("#txtUsuario").val("");
                Swal.fire(
                    'Usuario Inactivo!',
                    'El usuario que ha ingresado se encuentra inactivo, ingrese otro usuario.',
                    'error'
                )
            } else if (json == 2) {
                $("#txtContrasena").val("");
                Swal.fire(
                    'Usuario/Contraseña!',
                    'El usuario o contraseña que ha ingresado es incorrecta, intente de nuevo.',
                    'error'
                )
            } else if (json == 3) {
                Swal.fire({
                    title: 'Sesión activa',
                    text: "Tiene una sesión activa en otro dispositivo, ¿desea continuar con una nueva y cerrar la actual?",
                    icon: 'warning',
                    width: '450px',
                    custmomClass: "sweetAlertMsj",
                    showCancelButton: true,
                    confirmButtonColor: '#59D044',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Continuar',
                    cancelButtonText: 'Cancelar'
                }).then((result) => {
                    if (result.isConfirmed) {
                        $.ajax({
                            url: 'php/cerrar_sesion.php',
                            data: {},
                            type: 'POST',
                            dataType: 'json',

                            success: function (json) {
                                login();
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
                    }
                });
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
}

$(document).ready(function () {
    $('#mostrar').click(function () {
        //Comprobamos que la cadena NO esté vacía.
        if ($("#icono").hasClass('fa-eye-slash') && ($("#txtContrasena").val() != "")) {
            $('#txtContrasena').removeAttr('type');
            $('#icono').addClass('fas-fa-eye-slash').removeClass('fas-fa-eye');
            $('.pwdtxt').html("Ocultar contraseña");
        } else {
            $('#txtContrasena').attr('type', 'password');
            $('#icono').addClass('fas-fa-eye').removeClass('fas-fa-eye-slash');
            $('.pwdtxt').html("Mostrar contraseña");
        }
    });
});

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