<?php 
include_once '../php/querys_log.php';

$data = array();
$n= 0;
$sql = 
    "SELECT 
        id,
        cai,
        desde,
        hasta
    FROM cai
    ";
$rs = cargar_sql($sql);
if(isset($rs[0][0])){
    foreach($rs as $cai){
        $data[$n]["id"] = $cai[0];
        $data[$n]["cai"] = $cai[1];
        $data[$n]["desde"] = $cai[2];
        $data[$n]["hasta"] = $cai[3];
        $n++;
    }
}
echo json_encode($data);
