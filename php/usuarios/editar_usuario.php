<?php
include_once '../conectar.php';
include_once '../querys.php';
//include_once '../cargar_comillas.php';
//$contra = md5($_POST['contra']);
$con = conexion();
$sql = 
    "SELECT 
        usuario, 
        contrasena, 
        correo, 
        nombre, 
        id, 
        activo, 
        tipo_usuario 
    FROM 
        users 
    WHERE 
        usuario = ".comillas($_POST['usuario']);
$resultado = cargar_sql($sql);
$data = array();
$n = 0;
foreach($resultado as $usuario){
    $data[$n]["usuario"] = $usuario[0];
    $data[$n]["correo"] = $usuario[2];
    $data[$n]["nombre"] = $usuario[3];
    $data[$n]["estado"] = $usuario[5];
    $data[$n]["admin"] = $usuario[6];
    $n++;
}
echo json_encode($data[0], JSON_NUMERIC_CHECK);
?>