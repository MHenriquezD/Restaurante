<?php
include_once '../querys.php';

session_start();
$nombre = comillas($_POST["nombre"]);
$descripcion = comillas($_POST["descripcion"]);
$precio = comillas($_POST["precio"]);
//$imagen = comillas($_POST["imagen"]);
$stock = comillas($_POST["cantidad"]);
//echo $_POST["chkEstado"];
if(!empty($_FILES["fileImg"]["tmp_name"])){
    $nombre_imagen = comillas($_POST["nombre"].".png");
    $revisar = getimagesize($_FILES["fileImg"]["tmp_name"]);
    if($revisar !== false){
        $image = $_FILES['fileImg']['tmp_name'];
        $imgContenido = comillas(addslashes(file_get_contents($image)));
    }
}else{
    $nombre_imagen = comillas(null);
    $imagen = comillas(null);
    $imgContenido = comillas(null);
}
$fecha = comillas(date("Y-m-d H:i:s"));
$usuario = comillas($_SESSION["usr_login"]);
if(isset($_POST["chkEstado"])){
    if($_POST["chkEstado"] == 'on'){
        $estado = 1;
    }else{
        $estado = 0;
    }
}else{
    $estado = 0;
}
$isv = comillas($_POST["impuesto"]);
$sql_insert = 
    "INSERT INTO productos
        (nombre, descripcion, precio, imagen, nombre_imagen, fecha_creacion, usuario, estado, isv, stock) 
    VALUES 
        ($nombre, $descripcion, $precio, $imgContenido, $nombre_imagen, $fecha, $usuario, $estado, $isv, $stock)";
//echo $sql_insert;
$respuesta = ejecutar_sql($sql_insert);
//$respuesta = ejecutar_sql()
if($respuesta == 1){
    echo 1;
}else{
    echo 0;
}

?>