/*Ordena, alfabéticamente, los superHeroes por tipo (Bueno, ya lo habías investigado antes…)*/

const superHeroes = [
	{nombre:'Batman', tipo:'DC'},
	{nombre:'Linterna Verde', tipo:'DC'},
    {nombre:'Linterna Verde', tipo:'AC'},
	{nombre:'Lobezno', tipo:'Marvel'},
	{nombre:'Spiderman', tipo:'Marvel'},
	];

    superHeroes.sort( (a, b) => (a.tipo > b.tipo) ? 1 : -1);

    console.log(superHeroes);
