<?php
include_once '../php/conectar.php';

function comillas($str){
    $str = "'$str'";
    return $str;
} 

function ejecutar_sql($sql){
    $db = conexion();
    $resultado = $db->exec($sql);
    //$sql->closeCursor(); // opcional en MySQL, dependiendo del controlador de base de datos puede ser obligatorio
    $sql = null; // obligado para cerrar la conexión
    $db = null;
    return $resultado;
}

function cargar_sql($sql){
    $db = conexion();
    $query = $db->prepare($sql);
    $query->execute();
    $resultado = $query->fetchAll();
    //$query->closeCursor(); // opcional en MySQL, dependiendo del controlador de base de datos puede ser obligatorio
    $query = null; // obligado para cerrar la conexión
    $db = null;
    return $resultado;
}
?>