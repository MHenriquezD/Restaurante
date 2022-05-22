<?php
include_once '../querys.php';
session_start();
$nombre = comillas($_POST["nombre"]);
$descripcion = comillas($_POST["descripcion"]);
$precio = comillas($_POST["precio"]);
$imagen = comillas($_POST["imagen"]);
if(!empty($imagen)){
    $nombre_imagen = comillas($_POST["nombre"].".png");
}else{
    $nombre_imagen = comillas(null);
    $imagen = comillas(null);
}
$fecha = comillas(date("Y-m-d H:i:s"));
$usuario = comillas($_SESSION["usr_login"]);
$estado = comillas($_POST["estado"]);
$isv = comillas($_POST["isv"]);

$sql = 
    "INSERT INTO productos
        (nombre, descripcion, precio, imagen, nombre_imagen, fecha_creacion, usuario, estado, isv) 
    VALUES 
        ($nombre, $descripcion, $precio, $imagen, $nombre_imagen, $fecha, $usuario, $estado, $isv)";
//echo $sql;
echo ejecutar_sql($sql);

?>