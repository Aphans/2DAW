/*const superHeroes = [ 
	{nombre:'Batman', tipo:'DC'},
	{nombre:'Linterna Verde', tipo:'DC'},
	{nombre:'Lobezno', tipo:'Marvel'},
	{nombre:'Spiderman', tipo:'Marvel'},
	];
	
const result = superHeroes.filter(Heroe => Heroe.tipo ='DC');

console.log(result);*/


const superHeroes = [ 
	{nombre:'Batman', tipo:'DC'},
	{nombre:'Linterna Verde', tipo:'DC'},
	{nombre:'Lobezno', tipo:'Marvel'},
	{nombre:'Spiderman', tipo:'Marvel'},
	];
	

function Ejercicio1(lista,tipo){
    for(let i=0;i<lista.length;i++){
        if(lista[i].tipo!=tipo)return;
           console.log(lista[i]);
    }
};

console.log(Ejercicio1(superHeroes,'DC'));
