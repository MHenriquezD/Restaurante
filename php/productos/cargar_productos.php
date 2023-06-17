<?php
include_once '../querys.php';
$data = array();
$sql = 
    "SELECT
        id,
        nombre,
        estado,
        imagen,
        precio,
        descripcion,
        isv,
        ruta_imagen,
        stock
    FROM
        productos
    WHERE
        estado = 1";
$resultado = cargar_sql($sql);
$n = 0;
foreach($resultado as $productos){
    $data[$n]["id"] = $productos[0];
    $data[$n]["nombre"] = $productos[1];
    $data[$n]["label"] = $productos[1];
    $data[$n]["estado"] = $productos[2];
    $data[$n]["precio"] = $productos[4];
    $data[$n]["descripcion"] = $productos[5];
    $data[$n]["id_isv"] = $productos[6];
    $data[$n]["stock"] = $productos[8];
    $sql = "SELECT id, impuesto, porcentaje FROM impuestos WHERE id =". comillas($productos[6]);
    $isv = cargar_sql($sql);
    if(isset($isv[0][0])){
        $data[$n]["isv_name"] = $isv[0][1];
        $data[$n]["isv_porcentaje"] = "0.".$isv[0][2];
    }else{
        $data[$n]["isv_name"] = "";
        $data[$n]["isv_porcentaje"] = "";
    }
    $data[$n]["ruta_img"] = $productos[7];
    $n++;
}
echo json_encode($data, JSON_NUMERIC_CHECK);
return;
?>