<?php
include_once '../querys.php';
session_start();
date_default_timezone_set("America/Tegucigalpa");
$pass = md5($_POST['pswd']);
$sql_update = "
    UPDATE 
        users
    SET  
        contrasena = ".comillas($pass)."
    WHERE 
        usuario = ". comillas($_SESSION['usr_login']);
//echo $sql_update;
//echo $sql_update;
echo ejecutar_sql($sql_update);
return;
?>