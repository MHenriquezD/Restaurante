<?php
include_once '../querys.php';
$sql = 
    "SELECT
        id, 
        nombre, 
        descripcion, 
        TRUNCATE(ROUND((precio*100)/100),2) as precio, 
        imagen, 
        nombre_imagen, 
        fecha_creacion, 
        usuario, 
        estado,
        isv,
        ruta_imagen,
        stock
    FROM
        productos
    WHERE
        id =".$_POST["idp"];

//echo $sql;
$rs = cargar_sql($sql);
$n = 0;
if(isset($rs[0][0])){
    foreach($rs as $productos){
        $data[$n]["id"] = $productos[0];
        $data[$n]["nombre"] = $productos[1];
        $data[$n]["descripcion"] = $productos[2];
        $data[$n]["precio"] = $productos[3];
        $data[$n]["imagen"] = base64_encode($productos[4]);
        $data[$n]["nom_imagen"] = $productos[5];
        $data[$n]["fecha"] = $productos[6];
        $data[$n]["usuario"] = $productos[7];
        $data[$n]["estado"] = $productos[8];
        $data[$n]["isv"] = $productos[9];
        $data[$n]["ruta_imagen"] = $productos[10];
        $data[$n]["stock"] = $productos[11];
        $n++;
    }
}

echo json_encode($data[0], JSON_NUMERIC_CHECK);
return;
?>