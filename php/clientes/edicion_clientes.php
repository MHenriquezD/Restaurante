<?php
include_once '../querys.php';
$nombre = comillas($_POST["nombre"]);
$rtn = comillas($_POST["rtn"]);
$correo = comillas($_POST["correo"]);
$telefono = comillas($_POST["telefono"]);
$id = comillas($_POST["id"]);
$tipo = $_POST["tipo"];
$data = array();
if($tipo == 'insert'){
    $sql_insert = 
        "INSERT INTO clientes
            ( 
                nombre, 
                rtn, 
                correo, 
                telefono
            )
        VALUES 
            (
                $nombre,
                $rtn,
                $correo,
                $telefono
            )
            ";
    //echo $sql_insert;
    $respuesta =  ejecutar_sql($sql_insert);
    if($respuesta == 1){
        $data["respuesta"] = 1;
        $data["respuesta"] = "insertado";
    }else{
        $data["cod"] = 0;
        $data["respuesta"] = "Error al insertar";
    }
}else if($tipo == 'edit'){
    $sql_edit = 
        "UPDATE clientes
        SET 
            nombre = $nombre, 
            rtn = $rtn, 
            correo = $correo, 
            telefono = $telefono
        WHERE
            id = ".$id;
    //echo $sql_edit;
    $respuesta = ejecutar_sql($sql_edit);
    if($respuesta == 1){
        if($respuesta == 1){
            $data["respuesta"] = 2;
            $data["respuesta"] = "editado";
        }else{
            $data["cod"] = 0;
            $data["respuesta"] = "Error al editar";
        }
    }
}else if($tipo = 'delete'){
    $sql_delete =
        "DELETE FROM clientes
        WHERE id = $id";
    $respuesta = ejecutar_sql($sql_delete);
    if($respuesta == 1){
        if($respuesta == 1){
            $data["cod"] = 3;
            $data["respuesta"] = "borrado";
        }else{
            $data["cod"] = 0;
            $data["respuesta"] = "Error al borrar";
        }
    }
}

$_POST["nombre"] = "";
$_POST["rtn"] = "";
$_POST["correo"] = "";
$_POST["telefono"] = "";
$_POST["id"] = "";
$_POST["tipo"] = "";
echo json_encode($data);
return;
?>