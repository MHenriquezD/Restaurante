<?php
include_once '../querys.php';
$data = array();
$sql = 
    "SELECT
        id, 
        nombre
    FROM
        productos
    WHERE
        nombre like('%".$_POST["nombre"]."%')";
$rs = cargar_sql($sql);
//echo $sql;
$n = 0;
if(isset($rs[0][0])){
    foreach($rs as $productos){
        $data[$n]["id"] = $productos[0];
        $data[$n]["nombre"] = $productos[1];
        $n++;
    }
}
echo json_encode($data[0], JSON_NUMERIC_CHECK);
return;
?>