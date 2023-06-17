<?php
include_once '../querys.php';
$data = array();
if(isset($_POST["nombre"])){
    $nombre = $_POST["nombre"];
    $sql = 
        "SELECT
            id, 
            nombre,
            rtn,
            CONCAT(nombre, ' (', rtn,')')
        FROM
            clientes
        WHERE
            nombre like('%$nombre%')";
    $rs = cargar_sql($sql);
    $n = 0;
    if(isset($rs[0][0])){
        foreach($rs as $cliente){
            /*$data[] = array(
                "cl_id"=>$cliente[0],
                "cl_nomber"=>$cliente[1],
                "rtn"=>$cliente[2]
            );*/
            $data[$n]["value"] = $cliente[0];
            $data[$n]["nombre"] = $cliente[1];
            $data[$n]["rtn"] = $cliente[2];
            $data[$n]["label"] = $cliente[1];
            $n++;
        }
    }
}else if(isset($_POST["rtn"])){
    $rtn = $_POST["rtn"];
    $sql = 
        "SELECT
            id, 
            rtn,
            nombre,
            CONCAT(rtn, ' (', nombre,')')
        FROM
            clientes
        WHERE
            rtn like('%$rtn%')";
    //echo $sql;
    $rs = cargar_sql($sql);
    $n = 0;
    if(isset($rs[0][0])){
        foreach($rs as $cliente){
            /*$data[] = array(
                "cl_id"=>$cliente[0],
                "cl_nomber"=>$cliente[1],
                "rtn"=>$cliente[2]
            );*/
            $data[$n]["value"] = $cliente[0];
            $data[$n]["label"] = $cliente[3];
            $data[$n]["nombre"] = $cliente[2];
            $data[$n]["rtn"] = $cliente[1];
            $n++;
        }
    }
}



echo json_encode($data);
$_POST["nombre"] = "";
return;
?>