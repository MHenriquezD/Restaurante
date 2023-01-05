<?php
include_once '../php/querys_log.php';
//$GLOBALS $usr_name, $usr_mail;
session_start();
date_default_timezone_set("America/Tegucigalpa");
if(empty($_POST["contra"]) or empty($_POST["user"])){
    echo 2;
    return;
}
$contra = comillas(md5($_POST['contra']));
$usuario = comillas($_POST['user']);
//$con = conexion();
$sql = "SELECT usuario, contrasena, correo, nombre, id, activo, tipo_usuario FROM users WHERE usuario = $usuario AND contrasena = $contra";
$resultado = cargar_sql($sql);
$data = array();
//echo $sql;

if(!$resultado){
    echo 2;
}else{
    if($resultado[0][5] == 1){
        $_SESSION['usr_login'] = $resultado[0][0];
        $_SESSION['usr_mail'] = $resultado[0][2];
        $_SESSION['usr_name'] = $resultado[0][3];
        $_SESSION['usr_tipo'] = $resultado[0][6];
        $sql_check = 
            "SELECT usr_login, fecha, activo 
            FROM usr_log 
            WHERE usr_login = ".comillas($_SESSION['usr_login'])."
            ORDER BY id DESC LIMIT 1";
        $sesion = cargar_sql($sql_check);
        if($sesion[0][2] == 1){
            echo 3;
        }else{
            $sql_insert = 
                "INSERT INTO 
                    usr_log (usr_login,fecha,activo, usr_ip)
                VALUES
                    (".comillas($_SESSION["usr_login"]).",".comillas(date("Y-m-d H:i:s")).",1, ".comillas($_SERVER['REMOTE_ADDR']).")
                ";
            ejecutar_sql($sql_insert);
            echo 1;
        }
        
    }else{
        echo 0;
    }
    
   
}
?>