/*
Name  : Aqeel Malik (Web Developer)
Email : Malik.AqeelArshad@gmail.com
Mobile: +92 302 6262164
Skills: xHTML | HTML5 | CSS3 | Bootstrap | Wordpress | Javascript | jQuery | Ajax | PHP-MySQL | Photoshop | Firework | Dreamweaver
*/
setInterval(verificar_sesion, 1000);


function verificar_sesion(){
  $.ajax({
    url : '../php/verificar_sesion.php',
    data : {},
    type : 'POST',
    dataType : 'json',

    success : function(json) {
        if(json == 1){
          //window.location.href = "../login.html";
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

  "use strict";

  $('.menu > ul > li:has( > ul)').addClass('menu-dropdown-icon');
  //Checks if li has sub (ul) and adds class for toggle icon - just an UI

  $('.menu > ul > li > ul:not(:has(ul))').addClass('normal-sub');
  //Checks if drodown menu's li elements have anothere level (ul), if not the dropdown is shown as regular dropdown, not a mega menu (thanks Luka Kladaric)

  $(".menu > ul").before("<a href=\"#\" class=\"menu-mobile\">Navigation</a>");

  //Adds menu-mobile class (for mobile toggle menu) before the normal menu
  //Mobile menu is hidden if width is more then 959px, but normal menu is displayed
  //Normal menu is hidden if width is below 959px, and jquery adds mobile menu
  //Done this way so it can be used with wordpress without any trouble

  $(".menu > ul > li").hover(function(e) {
    if ($(window).width() > 943) {
      $(this).children("ul").stop(true, false).fadeToggle(150);
      e.preventDefault();
    }
  });
  //If width is more than 943px dropdowns are displayed on hover

  $(".menu > ul > li").click(function() {
    if ($(window).width() <= 943) {
      $(this).children("ul").fadeToggle(150);
    }
  });
  //If width is less or equal to 943px dropdowns are displayed on click (thanks Aman Jain from stackoverflow)

  $(".menu-mobile").click(function(e) {
    $(".menu > ul").toggleClass('show-on-mobile');
    e.preventDefault();
  });
  //when clicked on mobile-menu, normal menu is shown as a list, classic rwd menu story (thanks mwl from stackoverflow)

  /*$('a').hover(function(){
    $('a').css('color', '#036EE4')
  },
    function(){
      $('a').css("color", "#000");
    }
  );
    */
    //$('a').css('color', 'black');
    /*$( "a" ).hover(function() {
      $( this ).fadeOut( 0 );
      $( this ).fadeIn( 20 );
    });*/
});
  
function cargar(url){
  $('#informacion').html("");
  $('#informacion').load(url);
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