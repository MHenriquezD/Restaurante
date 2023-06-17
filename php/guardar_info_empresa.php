<?php
include_once '../php/querys_log.php';
$nombre = comillas($_POST["nombre"]);
$direccion = comillas($_POST["direccion"]);
$correo = comillas($_POST["correo"]);
$rtn = comillas($_POST["rtn"]);
$local = comillas($_POST["local"]);
$emision = comillas($_POST["emision"]);
$id = comillas($_POST["id"]);
$telefono = comillas($_POST["telefono"]);
$sql_update = 
    "UPDATE informacion_empresa 
    SET
        nombre_empresa = $nombre,
        direccion = $direccion,
        correo = $correo,
        rtn_empresa = $rtn,
        local = $local,
        emision = $emision,
        telefono = $telefono
    WHERE 
        id = $id
    ";
echo ejecutar_sql($sql_update);

?>