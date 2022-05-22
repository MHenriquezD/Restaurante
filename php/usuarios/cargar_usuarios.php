<?php
include_once '../querys.php';

$sql = 
    "SELECT 
        usuario, 
        correo, 
        nombre, 
        activo, 
        tipo_usuario 
    FROM 
        users
    WHERE 1";
$result = cargar_sql($sql);
$data = array();
$n = 0;
foreach($result as $usuarios){
    $data[$n]["usuario"] = $usuarios[0];
    $data[$n]["correo"] = $usuarios[1];
    $data[$n]["nombre"] = $usuarios[2];
    $data[$n]["estado"] = $usuarios[3];
    $data[$n]["admin"] = $usuarios[4];
    $n++;
}
echo json_encode($data, JSON_NUMERIC_CHECK);
return;
?>