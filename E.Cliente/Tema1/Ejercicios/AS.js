const asc = (pos,list)=>{
    return new Promise((resolve,reject)=>{
        if(pos>list.length){
            reject("Error, no se encuentra la posición");
        }
        setTimeout(()=>{
            console.log("Estoy espeando");
        },2000)
        return resolve(list[pos]);
    })
}

asc(5,["hola","hello"])
.then(data=>console.log(data))
.catch(error=>console.log(error))