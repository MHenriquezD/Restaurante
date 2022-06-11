<?php
include_once '../php/querys_log.php';
$sql = "SELECT ruta_imagen FROM productos WHERE id = 26";
echo $sql;
$rs = cargar_sql($sql);
$ruta = "http://".$_SERVER["HTTP_HOST"]. $_SERVER["PHP_SELF"];
$ruta = str_replace("http://", "", $rs[0][0]);
echo $ruta;
return;
$host= $_SERVER["HTTP_HOST"];
$url= $_SERVER["REQUEST_URI"];
echo $url= $_SERVER["SCRIPT_FILENAME"];
//phpinfo();
//echo "http://" . $host ;