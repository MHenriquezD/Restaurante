<?php
include_once '../querys.php';

$data = array();
$n = 0;
$sql = "
    SELECT
         id,
         fecha,
         caja,
         estado,
         abierto
    FROM
        apertura_caja
    WHERE
        abierto = 1
";
$rs = cargar_sql($sql);
if(isset($rs[0][0])){
    $caja = $rs[0][0];
}else{
    $caja = -1;
}
$sql = "
    SELECT
        SUM(total_factura)
    FROM
        facturas
    WHERE
        caja = $caja AND cai <> ''
";

$rs = cargar_sql($sql);
if (isset($rs[0][0])) {
    $data["apertura"] = $rs[0][0];
}
echo json_encode($data);
