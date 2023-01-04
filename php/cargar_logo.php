<?php
include_once '../php/querys_log.php';
$data = array();
$n = 0;
$sql = "
    SELECT 
        logo,
        marca,
        icono
    FROM 
        logo
    WHERE 
        id = 1
";
$rs = cargar_sql($sql);

if(isset($rs)){
    $data["logo"] = base64_encode($rs[0][0]);
    $data["marca"] = base64_encode($rs[0][1]);
    $data["icono"] = base64_encode($rs[0][2]);
    //$data["logo"] = $rs[0][1];
    //echo json_encode($data);
    //$data["marca"]
}

echo json_encode($data);