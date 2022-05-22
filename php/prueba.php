<?php 
session_start();
date_default_timezone_set("America/Tegucigalpa");
echo date("Y-m-d H:i:s", time());
echo "<br>";
echo $_SERVER['REMOTE_ADDR'];
?>