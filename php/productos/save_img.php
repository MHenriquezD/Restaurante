<?php
$nombre = $_POST["nombre"].".png";
$data = array();
if (($_FILES["file"]["type"] == "image/pjpeg")
    || ($_FILES["file"]["type"] == "image/jpeg")
    || ($_FILES["file"]["type"] == "image/png")
    || ($_FILES["file"]["type"] == "image/gif")) {
    if (move_uploaded_file($_FILES["file"]["tmp_name"], "../../img/productos/".$nombre)) {
        //more code here...
        $imagen = $_FILES["file"]["tmp_name"];
        $imgContent = addslashes(file_get_contents($imagen));
        //$data["imagen"] = $imgContent;
        $ruta = "http://".$_SERVER["HTTP_HOST"]. $_SERVER["PHP_SELF"];
        $data["ruta"] = str_replace("php/productos/save_img.php", "img/productos/".$nombre, $ruta);
        $data["imagen"] = $imgContent;
        echo json_encode($data);
    } else {
        echo 0;
    }
} else {
    echo 0;
}
?>