<?php
    $temp = 0;
    $valor = $_GET['valor'];
    if (empty($valor)) { //Compruebo si esta vacío, si esta vacío le dejo por defecto el valor
       $temp=$temp; 
    }
    else{
    $temp = $valor;
    }
    echo "EL valor de la variable temp es: ".$temp;
?>