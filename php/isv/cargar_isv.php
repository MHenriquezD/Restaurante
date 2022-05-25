<?php
include_once '../querys.php';
$sql = 
    "SELECT
        id, 
        impuesto,
        porcentaje
    FROM
    impuestos";
$resultado = cargar_sql($sql);
//echo json_encode($resultado);
//return;
$n = 0;
foreach($resultado as $isv){
    $data[$n]["id"] = $isv[0];
    $data[$n]["nombre"] = $isv[1];
    $data[$n]["porcentaje"] = $isv[2];
    $n++;
}
echo json_encode($data, JSON_NUMERIC_CHECK);
return;
?>