const superHeroes2 = [
	'{"nombre":"Batman", "tipo":"DC"}',
	'{"nombre":"Linterna Verde", "tipo":"DC"}',
	'{"nombre":"Lobezno", "tipo":"Marvel"}',
	'{"nombre":"Spiderman", "tipo":"Marvel"}',
	];


/*Observa que es una lista de cadenas con formato JSON, pero no es JSON.
    a) crea una nueva lista con elementos objetos JavaScript (Investiga, investiga...)
    b) filtra únicamente los elementos de Marvel*/
    
    //a)
        var x0 = JSON.parse(superHeroes2[0]);
        var x1 = JSON.parse(superHeroes2[1]);
        var x2 = JSON.parse(superHeroes2[2]);
        var x3 = JSON.parse(superHeroes2[3]);

        const Heroes = new Array();

        Heroes[0]=x0;
        Heroes[1]=x1;
        Heroes[2]=x2;
        Heroes[3]=x3;

        
    //b)
        const Marvel=Heroes.filter(marvel => marvel.tipo=="Marvel");

        console.log(Marvel);