<?php
include_once '../php/querys_log.php';

$data = array();
$n = 0;
$sql = "
    SELECT 
        id,
        numero,
        fecha,
        desde,
        hasta,
        total_factura,
        cai,
        nombre_cliente,
        CASE 
            WHEN rtn_cliente = 0 THEN ''
            ELSE rtn_cliente
            END AS rtn_cliente
    FROM
        facturas
    WHERE 
        cai <> ''
";
$rs = cargar_sql($sql);
if(isset($rs[0][0])){
    foreach($rs as $fac){
        $data[$n]["id"] = $fac[0];
        $data[$n]["numero"] = $fac[1];
        $fecha = strtotime($fac[2]);
        $data[$n]["fecha"] = date("d/m/Y H:i:s",$fecha);
        $data[$n]["desde"] = $fac[3];
        $data[$n]["hasta"] = $fac[4];
        $data[$n]["total"] = $fac[5];
        $data[$n]["cai"] = $fac[6];
        $data[$n]["nombre"] = $fac[7];
        $data[$n]["rtn"] = $fac[8];
        $n++;
    }
}
echo json_encode($data);
?>