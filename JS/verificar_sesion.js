function verificar_sesion(){
    $.ajax({
        url : '../php/verificar_sesion.php',
        data : {},
        type : 'POST',
        dataType : 'json',

        success : function(json) {
            if(json["respuesta"] == 1){
            //window.location.href = "../login.html";
            console.log("Conexion segura");
            }else{
                $(document).prop('title', 'Usuario no Autorizado');
                $('#informacion').html("");
                $('#error').load('../error_login');
            }
        },
        error : function(json) {
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