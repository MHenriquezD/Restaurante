<?php
include_once '../querys.php';
date_default_timezone_set('America/Tegucigalpa');
$data = array();
$n = 0;

$sql = "
    SELECT
        id,
        DATE(fecha),
        detalle,
        cantidad,
        gasto
    FROM
        gastos
    WHERE
        DAY(fecha) = DAY(NOW())
";
$resultado = cargar_sql($sql);
if(isset($resultado[0][0])){
    foreach($resultado as $gastos){
        $data[$n]["id"] = $gastos[0];
        $data[$n]["fecha"] = $gastos[1];
        $data[$n]["detalle"] = $gastos[2];
        $data[$n]["cantidad"] = $gastos[3];
        $data[$n]["gasto"] = $gastos[4];
        $n++;
    }
}

echo json_encode($data);
?>