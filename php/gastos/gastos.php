<?php
include_once '../querys.php';
date_default_timezone_set('America/Tegucigalpa');
$data = array();
$fecha = $_POST["fecha"];
$cantidad = comillas($_POST["cantidad"]);
$descripcion = comillas($_POST["descripcion"]);
$gasto = comillas($_POST["gasto"]);
$fecha = comillas(date($fecha.' H:i:s'));
//echo $cantidad;
//return;
$sql_insert = "
    INSERT INTO gastos( fecha, detalle, cantidad, gasto) 
    VALUES ($fecha,$descripcion,$cantidad,$gasto)
";
//echo $sql_insert;
$respuesta =  ejecutar_sql($sql_insert);
if($respuesta){
    $data["cod"] = 1;
    $data["respuesta"] = "insertado con éxito";
}else{
    $data["cod"] = 0;
    $data["respuesta"] = "Error al insertar";
}
echo json_encode($data);


?>