<?php
include_once '../php/querys_log.php';
session_start();
$sql = 
    "SELECT 
        usr_login,
        fecha,
        activo
    FROM 
        usr_log
    WHERE 
        usr_login = ".comillas($_SESSION["usr_login"])."
    ORDER BY id DESC LIMIT 1";
//echo $sql;
$rs = cargar_sql($sql);
if(isset($rs[0][0])){
    if($rs[0][2] == 1){
        echo 1;
    }elseif($rs[0][2] == 0){
        echo 0;
    }
}else{
    echo 2;
}
?>