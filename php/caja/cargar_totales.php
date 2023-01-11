<?php
include_once '../querys.php';

$data = array();
$n = 0;
$sql = "
    SELECT
         id,
         caja
    FROM
        apertura_caja
    WHERE
        abierto = 1
";
$rs = cargar_sql($sql);
//total de facturas mhenriquez 10/01/2023
if(isset($rs[0][0])){
    $caja = $rs[0][0];
    $data["id_caja"] = $caja;
    $data["caja"] = $rs[0][1];
}else{
    $caja = -1;
}
$sql = "
    SELECT
         SUM(total_factura)
    FROM
        facturas
    WHERE
        caja = $caja
";
$rs = cargar_sql($sql);
if(isset($rs[0][0])){
    $data["total_facturas"] = $rs[0][0];
}else{
    $data["total_facturas"] = 0;
}

//total efectivo mhenriquez 10/1/2023
$sql = "
    SELECT
        SUM(total_pago - suelto)as efectivo
    FROM 
        tipo_pago
    WHERE 
        caja = $caja AND tipo_pago = 1
";
$rs = cargar_sql($sql);
if(isset($rs[0][0])){
    $data["total_efectivo"] = $rs[0][0];
}else{
    $data["total_efectivo"] = 0;
}

//total tarjeta mhenriquez 10/1/2023
$sql = "
    SELECT
        SUM(total_pago - suelto)as efectivo
    FROM 
        tipo_pago
    WHERE 
        caja = $caja AND tipo_pago = 2
";
$rs = cargar_sql($sql);
if(isset($rs[0][0])){
    $data["total_tarjeta"] = $rs[0][0];
}else{
    $data["total_tarjeta"] = 0;
}

//total tarjeta mhenriquez 10/1/2023
$sql = "
    SELECT
        SUM(gasto)as efectivo
    FROM 
        gastos
    WHERE 
        caja = $caja
";
$rs = cargar_sql($sql);
if(isset($rs[0][0])){
    $data["total_gasto"] = $rs[0][0];
}else{
    $data["total_gasto"] = 0;
}

echo json_encode($data);
?>