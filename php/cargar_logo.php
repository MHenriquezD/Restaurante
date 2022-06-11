<?php
$data = array();
$ruta = "http://".$_SERVER["HTTP_HOST"]. $_SERVER["PHP_SELF"];
$data["logo"] = str_replace("php/cargar_logo.php", "img/logos/logo.png", $ruta);
$data["marca"] = str_replace("php/cargar_logo.php", "img/logos/marca_agua.png", $ruta);
echo json_encode($data);