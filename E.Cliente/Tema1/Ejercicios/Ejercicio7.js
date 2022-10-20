/*Ordena, alfabéticamente, los superHeroes por nombre (investiga)*/

const superHeroes = [
	{nombre:'Batman', tipo:'DC'},
	{nombre:'Linterna Verde', tipo:'DC'},
	{nombre:'Lobezno', tipo:'Marvel'},
	{nombre:'Spiderman', tipo:'Marvel'},
	];
    
	superHeroes.sort( (a, b) => (a.nombre > b.nombre) ? 1 : -1);

    console.log(superHeroes);