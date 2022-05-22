<?php
include_once '../querys.php';

$sql =
    "UPDATE impuestos
    SET impuesto = ".comillas($_POST["nombre"])."
    WHERE id = ".$_POST["id"];
echo ejecutar_sql($sql);
$_POST["isv"] = "";
$_POST["nombre"] = "";
return;
?>