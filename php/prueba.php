<?php 
/*session_start();
date_default_timezone_set("America/Tegucigalpa");
echo date("Y-m-d H:i:s", time());
echo "<br>";
echo $_SERVER['REMOTE_ADDR'];
*/

echo $_POST["nombre"];
if (($_FILES["file"]["type"] == "image/pjpeg")
    || ($_FILES["file"]["type"] == "image/jpeg")
    || ($_FILES["file"]["type"] == "image/png")
    || ($_FILES["file"]["type"] == "image/gif")) {
    if (move_uploaded_file($_FILES["file"]["tmp_name"], "../img/productos/".$_FILES['file']['name'])) {
        //more code here...
        echo "img/".$_FILES['file']['name'];
    } else {
        echo 0;
    }
} else {
    echo 0;
}/*
$data = array();
if (($_FILES["file"]["type"] == "image/pjpeg")
|| ($_FILES["file"]["type"] == "image/jpeg")
|| ($_FILES["file"]["type"] == "image/png")
|| ($_FILES["file"]["type"] == "image/gif")) {
    //more code here...

    $data["n_temp"] = $_FILES["file"]["tmp_name"];
    $data["n_img"] = $_FILES["file"]["name"];
    $data["n_tipo"] = $_FILES["file"]["type"];
    //echo "img/".$_FILES['file']['name'];
}

echo json_encode($data);*/
//echo $nombre_img;

//echo json_encode($_POST["image"]["tmp_name"]);
?>