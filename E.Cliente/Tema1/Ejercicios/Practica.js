const carro= {
    productos:[
    {
        nombre:'Papel',
        unidades:2,
        precio:3,
    },
    {
        nombre:'Tijeras',
        unidades:3,
        precio:5
    }
],
    get precioTotal(){
    let resultado=0;
    for(let i=0;i<this.productos.length;i++){
        resultado +=this.productos[i].unidades*this.productos[i].precios;
    }
        return resultado;
   }
}
    console.log(carro.precioTotal);
 

    
