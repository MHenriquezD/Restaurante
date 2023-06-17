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

function mes($mes){
        
    if(!empty($mes) && is_numeric($mes)){

        if($mes == 1){
            $mes = 'Enero';
        }else if($mes == 2){
            $mes = 'Febrero';
        }else if($mes == 3){
            $mes = 'Marzo';
        }else if($mes == 4){
            $mes = 'Abril';
        }else if($mes == 5){
            $mes = 'Mayo';
        }else if($mes == 6){
            $mes = 'Junio';
        }else if($mes == 7){
            $mes = 'Julio';
        }else if($mes == 8){
            $mes = 'Agosto';
        }else if($mes == 9){
            $mes = 'Septiembre';
        }else if($mes == 10){
            $mes = 'Octubre';
        }else if($mes == 11){
            $mes = 'Noviembre';
        }else if($mes == 12){
            $mes = 'Diciembre';
        }

        return $mes;

    }

}

?>