<?php
include_once '../querys.php';
$data = array();
$id = $_POST["idp"];
$sql = 
    "SELECT
        id, 
        nombre, 
        rtn, 
        correo, 
        telefono
    FROM
        clientes
    WHERE
        id = $id";
$rs = cargar_sql($sql);
//echo $sql;
$n = 0;
if(isset($rs[0][0])){
    foreach($rs as $clientes){
        $data[$n]["id"] = $clientes[0];
        $data[$n]["nombre"] = $clientes[1];
        $data[$n]["rtn"] = $clientes[2];
        $data[$n]["correo"] = $clientes[3];
        $data[$n]["telefono"] = $clientes[4];
        $n++;
    }
}

echo json_encode($data[0]);
$_POST["idp"] = "";
return;
?>