<?php
include_once '../querys.php';
session_start();
$data = array();

if(empty($_POST["contra"]) or empty($_POST["user"])){
    if(isset($_SESSION["usr_login"])){
        $sesion = comillas($_SESSION["usr_login"]);
        $ip = comillas($_SERVER['REMOTE_ADDR']);
        $tipo = $_SESSION["usr_tipo"];
    }else{
        $sesion = "''";
        $ip = "''";
    }
    $data["tipo"] = $tipo;
}else{
    $contra = comillas(md5($_POST['contra']));
    $usuario = comillas($_POST["user"])
;    $sql = "
        SELECT  tipo_usuario 
        FROM users 
        WHERE usuario = $usuario AND contrasena = $contra";
    $resultado = cargar_sql($sql);
    if(isset($resultado[0][0])){
        $data["tipo"] = $resultado[0][0];
    }
}



echo json_encode($data);
$_POST["contra"] = "";
$_POST["user"] = "";
?>