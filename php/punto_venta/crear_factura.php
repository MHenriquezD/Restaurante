<?php
include_once '../querys.php';
$datos_productos = $_POST["productos"];
if(isset($datos_productos)){
    //print_r($datos_productos);
}

echo json_encode($datos_productos);
?>