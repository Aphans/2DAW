const superHeroes = [ 
	{nombre:'Batman', tipo:'DC'},
	{nombre:'Linterna Verde', tipo:'DC'},
	{nombre:'Lobezno', tipo:'Marvel'},
	{nombre:'Spiderman', tipo:'Marvel'},
	];


const fl =(list,type,time=2)=>{
    return new Promise((resolve,reject)=>{
    if(type==="DC" || type==="Marvel"){
    resolve(superHeroes.filter(Heroe => Heroe.tipo ==type))
    }
    else{
        reject(new Error("No se encuentra el tipo"))
    }
    setTimeout(()=>{
        console.log("Estoy espeando");
    },time*1000);
})
}

fl(superHeroes,'D')
.then(data=>console.log(data))
.catch(error=>console.log(error))