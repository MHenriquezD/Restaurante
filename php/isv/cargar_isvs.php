<?php
include_once '../querys.php';
$sql = 
    "SELECT
        id, 
        impuesto
    FROM
        impuestos
    WHERE 
        id =".$_POST["id"];
$resultado = cargar_sql($sql);
$n = 0;
foreach($resultado as $isv){
    $data[$n]["id"] = $isv[0];
    $data[$n]["nombre"] = $isv[1];
    $n++;
}
$_POST["isv"] = "";
echo json_encode($data[0], JSON_NUMERIC_CHECK);
return;
?>