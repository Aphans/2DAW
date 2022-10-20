const superHeroes = [ 
	{nombre:'Batman', tipo:'DC'},
	{nombre:'Linterna Verde', tipo:'DC'},
	{nombre:'Lobezno', tipo:'Marvel'},
	{nombre:'Spiderman', tipo:'Marvel'},
	];


superHeroes.map(elemento>={
    if(elemento.tipo==='DC'){
        return elemento.nombre=`CAMBIADO ${elemento.nombre}`;
    }
}
