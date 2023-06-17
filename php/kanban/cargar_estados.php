<?php
include_once '../querys.php';

$data = array();
$n= 0;
$sql = 
    "SELECT 
        id,
        estado,
        nombre
    FROM estados
    ";
$rs = cargar_sql($sql);
if(isset($rs[0][0])){
    foreach($rs as $cai){
        $data[$n]["id"] = $cai[0];
        $data[$n]["estado"] = $cai[1];
        $data[$n]["nombre"] = $cai[2];
        $n++;
    }
    $data["cantidad"] = $n;
    $data["respuesta"] = 1;
}else{
    $data["respuesta"] = 0;
}
echo json_encode($data);