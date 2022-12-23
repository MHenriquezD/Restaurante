<?php
include_once '../php/querys_log.php';
$nombre = "marca_agua.png";
$data = array();
if(isset($_FILES["imgMarca"])){
    $revisar = getimagesize($_FILES["imgMarca"]["tmp_name"]);
    if($revisar !== false){
        $image = $_FILES['imgMarca']['tmp_name'];
        $imgContenido = comillas(addslashes(file_get_contents($image)));
        $sql_update = 
            "UPDATE logo
            SET
                imagen = $imgContenido,
                nombre = 'logo.png'
            WHERE 
                id = 2
            "; 
        //echo $sql_update;

        echo ejecutar_sql($sql_update);
    }else{
        echo 0;
    }
}else{
    echo 0;
}
?>