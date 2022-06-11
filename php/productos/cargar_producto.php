<?php
include_once '../querys.php';
$sql = 
    "SELECT
        id, 
        nombre, 
        descripcion, 
        precio, 
        imagen, 
        nombre_imagen, 
        fecha_creacion, 
        usuario, 
        estado,
        isv,
        ruta_imagen
    FROM
        productos
    WHERE
        id =".$_POST["idp"];
$rs = cargar_sql($sql);
$n = 0;
if(isset($rs[0][0])){
    foreach($rs as $productos){
        $data[$n]["id"] = $productos[0];
        $data[$n]["nombre"] = $productos[1];
        $data[$n]["descripcion"] = $productos[2];
        $data[$n]["precio"] = $productos[3];
        $data[$n]["imagen"] = $productos[4];
        $data[$n]["nom_imagen"] = $productos[5];
        $data[$n]["fecha"] = $productos[6];
        $data[$n]["usuario"] = $productos[7];
        $data[$n]["estado"] = $productos[8];
        $data[$n]["isv"] = $productos[9];
        $data[$n]["ruta_imagen"] = $productos[10];
        $n++;
    }
}

echo json_encode($data[0], JSON_NUMERIC_CHECK);
return;
?>