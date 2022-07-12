<?php
include_once '../querys.php';
session_start();
$nombre = comillas($_POST["nombre"]);
$descripcion = comillas($_POST["descripcion"]);
$precio = comillas($_POST["precio"]);
$imagen = comillas($_POST["imagen"]);
/*$nombre_archivo = $_POST["nombre_archivo"];
$ruta_archivo = $_POST["ruta_archivo"];
$tipo_archivo = $_POST["tipo_archivo"];

if (($tipo_archivo  == "image/pjpeg") || ($tipo_archivo  == "image/jpeg") || ($tipo_archivo  == "image/png")) {
    if (move_uploaded_file($ruta_archivo, "../img/productos/".$nombre.".png")) {
        //more code here...
        $ruta_img = "/img/productos/".$nombre.".png";
    }
}*/
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

$sql_insert = 
    "INSERT INTO productos
        (nombre, descripcion, precio, imagen, nombre_imagen, fecha_creacion, usuario, estado, isv) 
    VALUES 
        ($nombre, $descripcion, $precio, $imagen, $nombre_imagen, $fecha, $usuario, $estado, $isv)";
echo $sql_insert;
$respuesta = ejecutar_sql($sql_insert);
$sql = "
    SELECT MAX(id)
    FROM productos
";
$rs = cargar_sql($sql);
$data = array();
//$respuesta = ejecutar_sql()
if($respuesta == 1){
    $data["idp"] = $rs[0][0];
    echo json_encode($data);
}else{
    echo 0;
}
?>