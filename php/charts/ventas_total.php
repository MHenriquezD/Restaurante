<?php 
include_once '../querys.php';
$data = array();
$n = 0;
$sql = "
    SELECT
        MONTH(fecha) AS MES,
        DAY(fecha) as dia,
        SUM(total_factura) as total,
        CAST(fecha AS DATE) as fecha
    FROM facturas
    WHERE month(fecha) = month(now())
    GROUP BY CAST(fecha AS DATE)
";
$rs = cargar_sql($sql);

if(isset($rs[0][0])){
    foreach($rs as $total){
        $mes = mes_letra($total[0]);
        $data[$n]["mes"] = substr($mes, 0, 3);
        $data[$n]["dia"] = $total[1];
        $data[$n]["total"] = $total[2];
        $data[$n]["fecha"] = $total[3];
        $n++;
    }
}
echo json_encode($data);
?>