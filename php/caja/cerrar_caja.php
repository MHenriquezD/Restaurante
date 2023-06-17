<?php
include_once '../querys.php';

date_default_timezone_set('America/Tegucigalpa');
session_start();
$data = array();

$id_caja = comillas($_POST["id_caja"]);
$caja = comillas($_POST["caja"]);
$ventas = comillas($_POST["ventas"]);
$gastos = comillas($_POST["gastos"]);
$efectivo = comillas($_POST["efectivo"]);
$tarjeta = comillas($_POST["tarjeta"]);
$ganancia = comillas($_POST["ganancia"]);
$fecha = comillas(date('Y-m-d H:i:s'));
$usuario = comillas($_SESSION['usr_login']);


$sql_insert = "
    INSERT INTO cierre_caja( id_apertura, caja, ventas, gastos, efectivo, tarjeta, ganancia, fecha) 
    VALUES ($id_caja, $caja, $ventas, $gastos, $efectivo, $tarjeta, $ganancia, $fecha)
";

$respuesta =  ejecutar_sql($sql_insert);
if($respuesta){
    $sql_update = 
        "UPDATE apertura_caja
        SET
            estado = 0,
            abierto = 0,
            fecha_cierre = $fecha,
            usuario_cierre = $usuario
        WHERE 
            id = $id_caja
        ";
    $respuesta = ejecutar_sql($sql_update);
    if($respuesta){ 
        $data["cod"] = 1;
        $data["respuesta"] = "insertado con éxito";
    }
}else{
    $data["cod"] = 0;
    $data["respuesta"] = "Error al insertar";
}
echo json_encode($data);

?>