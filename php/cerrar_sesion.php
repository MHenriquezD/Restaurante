<?php
include_once '../php/querys_log.php';
//$GLOBALS $usr_name, $usr_mail;
session_start();
date_default_timezone_set("America/Tegucigalpa");

$sql_insert = 
    "INSERT INTO 
        usr_log (usr_login,fecha,activo)
    VALUES
        (".comillas($_SESSION["usr_login"]).",".comillas(date("Y-m-d H:i:s")).",0)
    ";
    ejecutar_sql($sql_insert);
echo 1;