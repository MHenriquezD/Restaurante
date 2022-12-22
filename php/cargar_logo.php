<?php
include_once '../php/querys_log.php';
$data = array();
$n = 0;
$sql = "
    SELECT 
        imagen,
        nombre
    FROM 
        logo
";
$rs = cargar_sql($sql);

if(isset($rs)){
    foreach($rs as $logos){
        $data[$n]["imagen"] = base64_encode($logos[0]);
        $data[$n]["nombre"] = $logos[1];
        $n++;
    }
    //$data["logo"] = $rs[0][1];
    echo json_encode($data);
    //$data["marca"]
    return;
}

$ruta = "http://".$_SERVER["HTTP_HOST"]. $_SERVER["PHP_SELF"];
$data["logo"] = str_replace("php/cargar_logo.php", "img/logos/logo.png", $ruta);
$data["marca"] = str_replace("php/cargar_logo.php", "img/logos/marca_agua.png", $ruta);
echo json_encode($data);