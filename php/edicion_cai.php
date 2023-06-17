<?php 
include_once '../php/querys_log.php';

$cai = comillas($_POST["cai"]);
$desde = comillas($_POST["desde"]);
$hasta = comillas($_POST["hasta"]);

$sql_insert = 
    "INSERT INTO
        cai (cai, desde, hasta)
    VALUES 
        (UPPER($cai), $desde, $hasta)";

echo ejecutar_sql($sql_insert);

$cai = $_POST["cai"] = "";
$desde = $_POST["desde"] = "";
$hasta = $_POST["hasta"] = "";