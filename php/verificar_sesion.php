<?php
include_once '../php/querys_log.php';
session_start();
if(isset($_SESSION["usr_login"])){
    $sesion = comillas($_SESSION["usr_login"]);
    $ip = comillas($_SERVER['REMOTE_ADDR']);
}else{
    $sesion = "''";
    $ip = "''";
}
$data = array();
$data["login"] = $sesion;
$data["ip"] = $ip;
$sql = 
    "SELECT 
        usr_login,
        fecha,
        activo
    FROM 
        usr_log
    WHERE 
        usr_login = {$data["login"]}
        AND usr_ip = {$data["ip"]}
    ORDER BY id DESC LIMIT 1";
//echo $sql;
$rs = cargar_sql($sql);
if(isset($rs[0][0])){
    if($rs[0][2] == 1){
        $data["respuesta"] = 1;
        //echo 1;
    }elseif($rs[0][2] == 0){
        $data["respuesta"] = 0;
    }
}else{
    $data["respuesta"] = 0;
}
echo json_encode($data);
?>