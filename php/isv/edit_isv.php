<?php
include_once '../querys.php';
$nombre_isv = comillas($_POST["nombre"]);
$porcentaje_isv = comillas($_POST["porcentaje"]);
$sql =
    "UPDATE impuestos
    SET 
        impuesto = $nombre_isv,
        porcentaje = $porcentaje_isv
    WHERE id = ".$_POST["id"];
echo ejecutar_sql($sql);
$_POST["id"] = "";
$_POST["nombre"] = "";
$_POST["porcentaje"] = "";
return;
?>