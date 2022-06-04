<?php
include_once '../php/querys_log.php';

$sql = 
    "SELECT 
        id, 
        nombre_empresa, 
        direccion, 
        correo, 
        rtn_empresa, 
        local, 
        emision, 
        telefono
    FROM informacion_empresa
    ";
$rs = cargar_sql($sql);
if(isset($rs[0][0])){
    echo json_encode($rs[0]);
}else{
    echo 0;
}

?>