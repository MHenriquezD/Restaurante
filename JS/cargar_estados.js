cargar_estados();
cartas = "";
function cargar_estados(){
    $.ajax({
        url : '../php/kanban/cargar_estados.php',
        data : {},
        type : 'POST',
        dataType : 'json',

        success : function(json) {
            if(json["respuesta"] == 0){
                //window.location.href = "../login.html";
                console.log("error");
            }else{
                for(var i = 0; i < json["cantidad"]; i++){
                    cartas += 
                        '{'+
                            '"id"   : "'+json[i]["id"]+'",'+
                            '"title": "'+json[i]["nombre"]+'"'+
                        '},'
                }
                console.log(cartas);
            }
        },
        error : function(json) {
            console.log("error");
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