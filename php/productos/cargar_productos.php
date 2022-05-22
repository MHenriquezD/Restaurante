<?php
include_once '../querys.php';
$sql = 
    "SELECT
        id,
        nombre,
        estado,
        imagen,
        precio,
        descripcion,
        isv
    FROM
        productos
    WHERE
        estado = 1";
$resultado = cargar_sql($sql);
$n = 0;
foreach($resultado as $productos){
    $data[$n]["id"] = $productos[0];
    $data[$n]["nombre"] = $productos[1];
    $data[$n]["estado"] = $productos[2];
    $data[$n]["precio"] = $productos["precio"];
    $data[$n]["descripcion"] = $productos["descripcion"];
    $sql = "SELECT id, impuesto FROM impuestos WHERE id =". comillas($productos[6]);
    $isv = cargar_sql($sql);
    $data[$n]["isv_name"] = $isv[0][1];
    $n++;
}
echo json_encode($data, JSON_NUMERIC_CHECK);
return;
?>