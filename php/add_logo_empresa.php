<?php
include_once '../php/querys_log.php';
$nombre = "logo.png";
$data = array();
if(isset($_FILES["imgLogo"])){
    $revisar = getimagesize($_FILES["imgLogo"]["tmp_name"]);
    if($revisar !== false){
        $image = $_FILES['imgLogo']['tmp_name'];
        $imgContenido = comillas(addslashes(file_get_contents($image)));
        $sql_update = 
            "UPDATE logo
            SET
                imagen = $imgContenido,
                nombre = 'logo.png'
            WHERE 
                id = 1
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