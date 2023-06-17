<?php
include_once '../querys.php';
$data = array();
$n = 0;
if(isset($_POST["nombre"])){
    $nombre = $_POST["nombre"];
}

if(empty($nombre)){
    $sql = 
        "SELECT
            id, 
            nombre, 
            rtn, 
            correo, 
            telefono
        FROM
            clientes
        ORDER BY nombre";
    $rs = cargar_sql($sql);
    if(isset($rs[0][0])){
        foreach($rs as $clientes){
            $data[$n]["id"] = $clientes[0];
            $data[$n]["nombre"] = $clientes[1];
            $data[$n]["rtn"] = $clientes[2];
            $data[$n]["correo"] = $clientes[3];
            $data[$n]["telefono"] = $clientes[4];
            $n++;
        }
        echo json_encode($data);
        return;
    }
}else{
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
            nombre like('%$nombre%')";
    $rs = cargar_sql($sql);
    echo $sql;
    if(isset($rs[0][0])){
        foreach($rs as $clientes){
            $data[$n]["id"] = $clientes[0];
            $data[$n]["nombre"] = $clientes[1];
            $n++;
        }
        
    }
}
echo json_encode($data[0],JSON_NUMERIC_CHECK);
$_POST["nombre"] = "";
return;
?>