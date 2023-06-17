<?php
include_once '../php/querys_log.php';
$sql = "SELECT imagen FROM productos WHERE id = 27";
//echo $_SERVER['DOCUMENT_ROOT'];
echo "<br>";
$rs = cargar_sql($sql);
echo "<img src='".$rs[0][0]."'>";
//echo $rs[0][0];
return;
$ruta = "http://".$_SERVER["HTTP_HOST"]. $_SERVER["PHP_SELF"];
$ruta = str_replace("http://", "", $rs[0][0]);
echo $ruta;
return;
$host= $_SERVER["HTTP_HOST"];
$url= $_SERVER["REQUEST_URI"];
echo $url= $_SERVER["SCRIPT_FILENAME"];
//phpinfo();
//echo "http://" . $host ;