<?php
include_once '../php/querys_log.php';
$nombre = comillas($_POST["nombre"]);
$direccion = comillas($_POST["direccion"]);
$correo = comillas($_POST["correo"]);
$rtn = comillas($_POST["rtn"]);
$local = comillas($_POST["local"]);
$emision = comillas($_POST["emision"]);
$correlativo = comillas($_POST["correlativo"]);
$desde = comillas($_POST["desde"]);
$hasta = comillas($_POST["hasta"]);
$id = comillas($_POST["id"]);
$sql_update = 
    "UPDATE informacion_empresa 
    SET
        nombre_empresa = $nombre,
        direccion = $direccion,
        correo = $correo,
        rtn_empresa = $rtn,
        local = $local,
        emision = $emision,
        correlativo_factura = $correlativo,
        desde = $desde,
        hasta = $hasta
    WHERE 
        id = $id
    ";
echo ejecutar_sql($sql_update);

?>