<?php
	$input1 = $_POST['Nombre'];
	$input2 = $_POST['Apellidos'];
	$input3 = $_POST['CheckEdad'];
	
	// Validar nombre
    if ( preg_match ( "/^(?=.{3,18}$)[a-zñA-ZÑ](\s?[a-zñA-ZÑ])*$/" , $input1 )) { 
        echo  'El nombre es: '.$input1 ; 
    } 
    else { 
        echo  'Nombre inválido' ; 
    }
    echo "<br>";

    //Validar apellidos
    if(preg_match ("/^(?=.{3,36}$)[a-zñA-ZÑ](\s?[a-zñA-ZÑ])*$/",$input2)){
        echo 'Los apellidos son: '.$input2;
    }
    else{
        echo 'Apellidos inválidos';
    }
    
    echo "<br>";
?>