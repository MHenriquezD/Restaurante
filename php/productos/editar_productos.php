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
//echo $_POST["ruta_img"];
if($_POST["eliminar"] == 1){
    $ruta = "";
    include_once '../querys.php';
    $sql = "SELECT ruta_imagen FROM productos WHERE id=".comillas($_POST["idp"]);
    //echo $sql;
    $rs = cargar_sql($sql);
    if(isset($rs[0][0])){
        $rutaeliminar = str_replace("http://localhost/Restaurante", "../..", $rs[0][0]);
        unlink($rutaeliminar);
    }
}
if(isset($_POST["ruta_img"])){
    
    $ruta = comillas($_POST["ruta_img"]);
    $sql = 
        "UPDATE productos
        SET nombre = $nombre, 
            descripcion = $descripcion, 
            precio = $precio, 
            imagen = $imagen, 
            nombre_imagen = $nombre_imagen,
            estado = $estado, 
            isv = $isv,
            ruta_imagen = $ruta
        WHERE 
            id = ".comillas($_POST["idp"]);
}else{
    $sql = 
        "UPDATE productos
        SET nombre = $nombre, 
            descripcion = $descripcion, 
            precio = $precio, 
            imagen = $imagen, 
            nombre_imagen = $nombre_imagen,
            estado = $estado, 
            isv = $isv,
            ruta_imagen = $ruta
        WHERE 
            id = ".comillas($_POST["idp"]);
}


//echo $sql;
echo ejecutar_sql($sql);

?>