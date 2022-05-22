<?php
include_once '../querys.php';
$sql = 
    "DELETE FROM impuestos
    WHERE id =".comillas($_POST["id"]);
echo ejecutar_sql($sql);
$_POST["isv"] = "";
return;
?>