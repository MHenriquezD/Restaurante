<?php
include_once '../querys.php';
$sql = 
    "INSERT INTO impuestos (impuesto)
    VALUES (".comillas($_POST["nombre"]).");";
echo ejecutar_sql($sql);
$_POST["isv"] = "";
$_POST["nombre"] = "";
return;
?>