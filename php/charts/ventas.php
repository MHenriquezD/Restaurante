<?php 
include_once '../querys.php';
$data = array();
$colores = array("#6CB7DA","#D75725","#00225D","#7B533E","#4B3A51");
$cantidad_vendida = "";
$n = 0;
$sql = "
SELECT 
	p.id,
    p.nombre,
	SUM(cantidad) as cantidad,
    SUM(total)as total
FROM
	facturas as f
INNER JOIN factura_detalle as fd
	ON fd.id_factura = f.id
INNER JOIN productos as p 
ON p.id = fd.id_producto
WHERE cantidad <> 0 AND month(f.fecha) = month(CURDATE())
GROUP BY fd.id_producto
ORDER BY cantidad DESC LIMIT 5
";
$rs = cargar_sql($sql);
if(isset($rs[0][0])){
    foreach($rs as $productos){
        
        $data[$n]["id"] = $productos[0];
        $data[$n]["nombre"] = $productos[1];
        $data[$n]["cantidad"] = $productos[2];
        $data[$n]["total"] = $productos[3];
        $data[$n]["colores"] = $colores[$n];
        if($productos === end($rs)){
            $cantidad_vendida .= $productos[2];
        }else{
            $cantidad_vendida .= $productos[2]."/";
        }
        $n++;
    }
    //$data["cantidad"] = $cantidad_vendida;
}
echo json_encode($data, JSON_NUMERIC_CHECK);