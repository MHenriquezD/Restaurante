<?php 
function conexion(){
    //$con = mysqli_connect('localhost','mhenriquez','Pa$$w0rd2022','mhenriquez') or die ('error en la conexion del servidor');
    //$conn = new mysqli('localhost','mhenriquez','Pa$$w0rd2022','mhenriquez');
    $usuario = 'mhenriquez';
    $pass = 'Pa$$w0rd2022';
    //$pass = '';
    $db = new PDO('mysql:host=localhost;dbname=mhenriquez', $usuario, $pass);
    return $db;
}
?>