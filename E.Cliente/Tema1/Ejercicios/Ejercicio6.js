/*Añade otros dos superHeroes al inicio de la lista*/

const superHeroes = [
	{nombre:'Batman', tipo:'DC'},
	{nombre:'Linterna Verde', tipo:'DC'},
	{nombre:'Lobezno', tipo:'Marvel'},
	{nombre:'Spiderman', tipo:'Marvel'},
	];
    

superHeroes.unshift({nombre:'y',tipo:"DC"},{nombre:"z",tipo:"Marvel"});

console.log(superHeroes);