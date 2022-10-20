<!DOCTYPE html>
<html lang="en">
<head>
</head>
<body>
<?php
            $a=15;
            $b=20;
            echo "El valor de la variable a es:",$a."<br>";
            echo "El valor de la  variable b es ".$b."<br>"."<br>";
            $temp=$a;
            $a=$b;
            $b=$temp;
            echo "Cambiando el valor de las variables:"."<br>"."<br>";
            echo "El valor de la variable a ahora:".$a."<br>";
            echo "El valor de la  variable b ahora:".$b;
        ?>
</body>
</html>