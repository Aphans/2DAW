console.log('INICIO');

function saludar(nombre){
    console.log(`Hola ${nombre}`);
}

function entrarAFiesta(){
    abrirPuerta();
    saludar('Juan');
    saludar('Maria');
    saludar('Antonio');
    saludar('Laura');
}

function abrirPuerta(){
    console.log('ABRIR PUERTA');
}

entrarAFiesta();


console.log('FIN');