/*
Name  : Aqeel Malik (Web Developer)
Email : Malik.AqeelArshad@gmail.com
Mobile: +92 302 6262164
Skills: xHTML | HTML5 | CSS3 | Bootstrap | Wordpress | Javascript | jQuery | Ajax | PHP-MySQL | Photoshop | Firework | Dreamweaver
*/
setInterval(verificar_sesion, 1000);
$("input[type=text]").click(function() {
  $(this).select();
});
$("input[type=number]").click(function() {
  $(this).select();
});

function verificar_sesion(){
  $.ajax({
    url : '../php/verificar_sesion.php',
    data : {},
    type : 'POST',
    dataType : 'json',

    success : function(json) {
        if(json["respuesta"] == 1 && json["login"] != ""){
          //window.location.href = "../login.html";
          //console.log(json["login"]);
          console.log("Conexion segura");
        }else{
          window.location.href = "../login";
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
$(document).ready(function() {

  $('button').on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('is-expanded');
  })
});
  
function cargar(url){
  //$('#informacion').html("");
  //$('#informacion').load(url);
  //$('#informacion').attr("");
  $('#informacion').attr("src",url);
  //$('a').css('color', 'black');
}

function cerrar_sesion(){
  $.ajax({
    url : '../php/cerrar_sesion.php',
    data : {},
    type : 'POST',
    dataType : 'json',

    success : function(json) {
        if(json == 1){
          window.location.href = "../login";
        }
    },
    error : function(json) {
      window.location.href = "../login";
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