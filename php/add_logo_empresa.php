<?php
include_once '../php/querys_log.php';
$nombre = "logo.png";
$data = array();
if (($_FILES["file"]["type"] == "image/pjpeg") || ($_FILES["file"]["type"] == "image/jpeg") || ($_FILES["file"]["type"] == "image/png") || ($_FILES["file"]["type"] == "image/gif")) {
    $revisar = getimagesize($_FILES["file"]["tmp_name"]);
    //echo json_encode($revisar);
    if($revisar !== false){
        $image = $_FILES['file']['tmp_name'];
        $imgContenido = addslashes(file_get_contents($image));
        $imgContenido = comillas($imgContenido);
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
}
return;
/*if (($_FILES["file"]["type"] == "image/pjpeg")
    || ($_FILES["file"]["type"] == "image/jpeg")
    || ($_FILES["file"]["type"] == "image/png")
    || ($_FILES["file"]["type"] == "image/gif")) {
    if (move_uploaded_file($_FILES["file"]["tmp_name"], "../img/logos/".$nombre)) {
        //more code here...
        $ruta = "http://".$_SERVER["HTTP_HOST"]. $_SERVER["PHP_SELF"];
        $data["ruta"] = str_replace("php/add_logo_empresa.php", "img/logos/".$nombre, $ruta);
        echo json_encode($data);
    } else {
        echo 0;
    }
} else {
    echo 0;
}*/
?>