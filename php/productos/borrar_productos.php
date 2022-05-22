<?php
include_once '../querys.php';
$sql_delete = 
    "DELETE FROM productos
    WHERE id = ".comillas($_POST["idp"]);
//echo $sql_delete;
echo ejecutar_sql($sql_delete);
return;
?>