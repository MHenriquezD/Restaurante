<?php
include_once '../php/querys_log.php';
$data = array();
if(isset($_FILES["imgLogo"])){
    $revisar = getimagesize($_FILES["imgLogo"]["tmp_name"]);
    if($revisar !== false){
        $image = $_FILES['imgLogo']['tmp_name'];
        $imgLogo = comillas(addslashes(file_get_contents($image)));
        
    }
}
$data = array();
if(isset($_FILES["imgMarca"])){
    $revisar = getimagesize($_FILES["imgMarca"]["tmp_name"]);
    if($revisar !== false){
        $image = $_FILES['imgMarca']['tmp_name'];
        $imgMarca = comillas(addslashes(file_get_contents($image)));
    }
}

if(isset($_FILES["imgIco"])){
    $revisar = getimagesize($_FILES["imgIco"]["tmp_name"]);
    if($revisar !== false){
        $image = $_FILES['imgIco']['tmp_name'];
        $imgIco = comillas(addslashes(file_get_contents($image)));
    }
}


$sql_update = 
    "UPDATE logo
    SET
        logo = $imgLogo,
        marca = $imgMarca,
        icono = $imgIco
    WHERE 
        id = 1
    "; 
//echo $sql_update;

echo ejecutar_sql($sql_update);

?>