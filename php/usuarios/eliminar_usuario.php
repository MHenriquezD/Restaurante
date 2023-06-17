<?php
include_once '../querys.php';
$sql_delete = "
    DELETE FROM users
    WHERE usuario = ". comillas($_POST['usuario']);
echo ejecutar_sql($sql_delete);
return;
?>