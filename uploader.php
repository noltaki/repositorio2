<?php

//var_dump es como el console.log de php
//muestra el formdata en colsola en cada 
//llada de la funcion uploader
var_dump($_FILES);
$name = $_FILES["file"]["name"];
$tmpfile = $_FILES["file"]["tmp_name"];
$folder1 = "folder1/$name";
move_uploaded_file($tmpfile, $folder1);
echo "archivo " . $name . " movido";
    
 
