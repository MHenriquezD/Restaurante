<?php
include_once '../php/querys_log.php';

session_start();
date_default_timezone_set("America/Tegucigalpa");
$numero_factura = $desde = $fac_desde = $fac_hasta = "";
$id_cliente = comillas($_POST["id_cliente"]);
$nombre_cliente = comillas($_POST["nombre_cliente"]);
$rtn_cliente = comillas($_POST["rtn_cliente"]);
$tipo_pago = $_POST["tipo_pago"];
$productos = $_POST["productos"];
$total_factura = $_POST["total_factura"];
$suelto_factura = $_POST["suelto"];
$caja = comillas($_POST["caja"]);
$usr_login = comillas($_SESSION["usr_login"]);
$data = array();

//return;
$sql = 
    "SELECT id, correo, direccion, nombre_empresa, rtn_empresa, local, correlativo_factura, emision
    FROM informacion_empresa as i
    WHERE 1;";
$ie = cargar_sql($sql);

//echo json_encode($ie);
//return;

if(isset($ie[0][0])){
    $id_empresa = $ie[0][0];
    $nombre_empresa = $ie[0][3];
    $direccion_empresa = $ie[0][2];
    $correo_empresa = $ie[0][1];
    $rtn = $ie[0][4];
    $local = $ie[0][5];
    $correlativo = $ie[0][6];
    $punto_emision = $ie[0][7];
    $sql = "
        SELECT cai, desde, hasta
        FROM cai
        WHERE 
            desde <= $correlativo
            AND 
            hasta >= $correlativo
    ";
    $cai = cargar_sql($sql);
    if(isset($cai[0][0])){
        $n_cai = comillas($cai[0][0]);
        $desde = $cai[0][1];
        $hasta = $cai[0][2];
    }
    $numero_factura_r = str_pad($punto_emision,3,"0",STR_PAD_LEFT)."-".str_pad($local,3,"0",STR_PAD_LEFT)."-".str_pad(1,2,"0",STR_PAD_LEFT)."-".str_pad($correlativo,8,"0",STR_PAD_LEFT);
    $numero_factura = comillas(str_pad($punto_emision,3,"0",STR_PAD_LEFT)."-".str_pad($local,3,"0",STR_PAD_LEFT)."-".str_pad(1,2,"0",STR_PAD_LEFT)."-".str_pad($correlativo,8,"0",STR_PAD_LEFT));
    $fac_desde = comillas(str_pad($punto_emision,3,"0",STR_PAD_LEFT)."-".str_pad($local,3,"0",STR_PAD_LEFT)."-".str_pad(1,2,"0",STR_PAD_LEFT)."-".str_pad($desde,8,"0",STR_PAD_LEFT));
    $fac_hasta = comillas(str_pad($punto_emision,3,"0",STR_PAD_LEFT)."-".str_pad($local,3,"0",STR_PAD_LEFT)."-".str_pad(1,2,"0",STR_PAD_LEFT)."-".str_pad($hasta,8,"0",STR_PAD_LEFT));
    $fecha = comillas(date("Y-m-d H:i:s"));
}

$sql_insert = "
    INSERT INTO 
    facturas (
        numero, fecha, usuario, estado, desde, hasta, id_cliente, nombre_cliente,rtn_cliente,total_factura,suelto_factura, cai, caja
    )
    VALUES (
        $numero_factura, $fecha, $usr_login, 1, $fac_desde, $fac_hasta, $id_cliente, $nombre_cliente, $rtn_cliente, $total_factura, $suelto_factura, $n_cai, $caja
    )
";
//echo $sql_insert;
//return;
$resultado = ejecutar_sql($sql_insert);
if($resultado){
    $sql_check = "
        SELECT MAX(id)
        FROM facturas
    ";
    $fac = cargar_sql($sql_check);
    if(isset($fac[0][0])){
        $id_factura = $fac[0][0];
        foreach($tipo_pago as $pago){
            $tipo = $pago["tipo"];
            $total_pago = $pago["total_pago"];
            $suelto = $pago["suelto"];

            $sql_insert = "
                INSERT INTO 
                    tipo_pago (
                        id_factura, tipo_pago, total_pago, suelto
                    )
                    VALUES (
                        $id_factura, $tipo, $total_pago, $suelto
                    )
            ";
            ejecutar_sql($sql_insert);
        }

        //echo json_encode($productos);
        foreach($productos as $producto){
            $id_producto = comillas($producto["id_prod"]);
            $nombre_producto = comillas($producto["nombre"]);
            $precio_producto = comillas($producto["precio_producto"]);
            $precio_unitario = comillas($producto["precio_unitario"]);
            $total_producto = comillas($producto["total"]);
            $cantidad_productos = comillas($producto["cantidad_productos"]);
            $isv_producto = comillas($producto["isv"]);

            $sql_insert = "
                INSERT INTO factura_detalle (
                    id_factura, id_producto, nombre_producto,precio_producto, precio_unitario, total, cantidad, isv
                )
                VALUES (
                    $id_factura, $id_producto, $nombre_producto, $precio_producto, $precio_unitario, $total_producto, $cantidad_productos, $isv_producto
                )
            ";
            ejecutar_sql($sql_insert);
        }
        $correlativo++;
        $sql_update = "
            UPDATE informacion_empresa
            SET correlativo_factura = $correlativo
            WHERE id = $id_empresa
        ";
        ejecutar_sql($sql_update);
    }
    $data["respuesta"] = 1;
    $data["comentario"] = $numero_factura_r;
}
echo json_encode($data);
//echo $numero_factura_r;

$id_cliente = $_POST["id_cliente"] = "";
$nombre_cliente = $_POST["nombre_cliente"] = "";
$rtn_cliente = $_POST["rtn_cliente"] = "";
$tipo_pago = $_POST["tipo_pago"] = "";
$productos = $_POST["productos"] = "";
$caja = $_POST["caja"] = "";


?>