<?php
include_once '../querys.php';
$sql_update = "
    UPDATE 
        users
    SET  
        usuario = ".comillas($_POST['usuario']).",
        correo = ".comillas( $_POST['correo']).", 
        nombre = ".comillas($_POST['nombre']).", 
        activo = ".comillas($_POST['estado']).", 
        tipo_usuario = ".comillas($_POST['admin'])."
    WHERE 
        usuario = ". comillas($_POST['usuario']);

echo ejecutar_sql($sql_update);
return;
?>