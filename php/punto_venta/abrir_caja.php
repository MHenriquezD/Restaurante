<?php
include_once '../querys.php';
date_default_timezone_set('America/Tegucigalpa');
session_start();
$data = array();
$caja = comillas($_POST["caja"]);
$fecha = comillas(date('Y-m-d H:i:s'));
$usuario = comillas($_SESSION['usr_login']);
/*
echo  "La fecha es: " . $fecha. "<br>";
echo "El dinero es: " . $caja . "<br>";
echo "El usuario es: " . $usuario;
return;
*/
$sql_insert = "
    INSERT 
        apertura_caja(
            fecha,
            caja,
            estado,
            abierto,
            usuario
        )
        VALUES 
        (
            $fecha,
            $caja,
            1,
            1,
            $usuario
        )
";
//echo $sql_insert;
$respuesta = ejecutar_sql($sql_insert);

echo $respuesta;

//echo json_encode($data);

?>