<?php
include_once '../querys.php';
$data = array();

$sql = "
    SELECT
         id,
         fecha,
         caja,
         estado,
         abierto
    FROM
        apertura_caja
    WHERE
        abierto = 1
";
$rs = cargar_sql($sql);

if(isset($rs[0][0])){
    $data["estado"] = 1;
    $data["respuesta"] = "abierta";
    $data["id_caja"] = $rs[0][0];
}else{
    $data["estado"] = 0;
    $data["respuesta"] = "cerrada";  
}

echo json_encode($data);

?>