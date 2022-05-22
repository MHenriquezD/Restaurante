<?php 
session_start();
unset($_SESSION["usr_login"],$_SESSION["usr_mail"],$_SESSION["usr_mail"]);
session_destroy();
echo 1;
?>