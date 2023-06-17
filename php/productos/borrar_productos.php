<?php
include_once '../querys.php';
$sql = "SELECT ruta_imagen FROM productos WHERE id=".comillas($_POST["idp"]);
//echo $sql;
$rs = cargar_sql($sql);
if(isset($rs[0][0]) && $rs[0][0] != ""){
    $ruta = str_replace("http://localhost/Restaurante", "../..", $rs[0][0]);;
    if(unlink($ruta)){
        $sql_delete = 
            "DELETE FROM productos
            WHERE id = ".comillas($_POST["idp"]);
        //echo $sql_delete;
        echo ejecutar_sql($sql_delete);
        return;
    }
}else{
    $sql_delete = 
        "DELETE FROM productos
        WHERE id = ".comillas($_POST["idp"]);
    //echo $sql_delete;
    echo ejecutar_sql($sql_delete);
    return;
}


?>