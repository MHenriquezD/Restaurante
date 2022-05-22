<?php
include_once '../php/querys_log.php';
//$GLOBALS $usr_name, $usr_mail;
session_start();
date_default_timezone_set("America/Tegucigalpa");
$login = comillas($_SESSION["usr_login"]);
$fecha = comillas(date("Y-m-d H:i:s"));
$ip = comillas($_SERVER['REMOTE_ADDR']);
//echo $ip;
$sql = 
    "SELECT 
        id, usr_ip
    FROM 
        usr_log
    WHERE 
        usr_login = $login
        AND activo = 1
        AND usr_ip <> $ip
    ORDER BY id DESC LIMIT 1";
$ses = cargar_sql($sql);
if(isset($ses[0][0])){
    $ip_ses2 = comillas($ses[0][1]);
    $sql_update = 
        "UPDATE usr_log
        SET activo = 0
        WHERE usr_login = $login
        AND id =".comillas($ses[0][0]);

    ejecutar_sql($sql_update);
    //echo $sql_update . "   1<br>";
    $sql_insert = 
        "INSERT INTO 
            usr_log (usr_login,fecha,activo,usr_ip)
        VALUES
            ($login,$fecha,0,$ip)
        ";
    ejecutar_sql($sql_insert);
    //echo $sql_insert . "   2<br>";
    $sql_insert = 
        "INSERT INTO 
            usr_log (usr_login,fecha,activo,usr_ip)
        VALUES
            ($login,$fecha,0,$ip_ses2)
        ";
    ejecutar_sql($sql_insert);
    //echo $sql_insert . "   3<br>";
    echo 1;
}else{
    $sql_insert = 
        "INSERT INTO 
            usr_log (usr_login,fecha,activo,usr_ip)
        VALUES
            ($login,$fecha,0,$ip)
        ";
    ejecutar_sql($sql_insert);
    //echo $sql_insert;
    echo 1;
}
