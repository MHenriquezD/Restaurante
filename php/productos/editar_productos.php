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
    "UPDATE productos
    SET nombre = $nombre, 
        descripcion = $descripcion, 
        precio = $precio, 
        imagen = $imagen, 
        nombre_imagen = $nombre_imagen,
        estado = $estado, 
        isv = $isv
    WHERE 
        id = ".comillas($_POST["idp"]);
//echo $sql;
//echo $sql;
echo ejecutar_sql($sql);

?>