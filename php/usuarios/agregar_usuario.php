<?php
include_once '../querys.php';
$contra = md5($_POST['password']);
$sql_insert = "
    INSERT INTO users 
        (usuario, contrasena, correo, nombre, id, activo, tipo_usuario)
    VALUES 
        ('".$_POST['usuario']."','".$contra."','".$_POST['correo']."','".$_POST['nombre']."',null,'".$_POST['estado']."','".$_POST['admin']."')";

echo ejecutar_sql($sql_insert);
return;
?>