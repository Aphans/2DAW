const persona={
nombre:'Pedro',
apellidos:'Pereda Mellado',
edad:53,
profesion:'Informatico',
}
let{nombre,apellidos,...otrosDatos}=persona;
nombre='Luis';
otrosDatos.edad=43;
console.log(nombre,apellidos,otrosDatos);

