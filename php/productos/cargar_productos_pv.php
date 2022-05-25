<?php
include_once '../querys.php';
$nombre = $_POST["prd_nom"];
$data = array();
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
        nombre like ('%$nombre%')";
//echo $sql;
$resultado = cargar_sql($sql);
$n = 0;
foreach($resultado as $productos){
    $data[$n]["id"] = $productos[0];
    $data[$n]["nombre"] = $productos[1];
    $data[$n]["value"] = $productos[1];
    $data[$n]["estado"] = $productos[2];
    $data[$n]["precio"] = $productos[4];
    $data[$n]["descripcion"] = $productos[5];
    $data[$n]["id_isv"] = $productos[6];
    $sql = "SELECT id, impuesto, porcentaje FROM impuestos WHERE id =". comillas($productos[6]);
    $isv = cargar_sql($sql);
    $data[$n]["isv_name"] = $isv[0][1];
    $data[$n]["isv_porcentaje"] = "0.".$isv[0][2];
    $n++;
}
echo json_encode($data, JSON_NUMERIC_CHECK);
return;
?>