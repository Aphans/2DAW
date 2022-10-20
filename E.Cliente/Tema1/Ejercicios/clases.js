class Alumno{

constructor(nombre,apellido,nota){
this.nombre=nombre;
this.apellido=apellido;
this.nota=nota;
}

get nombre(){
return ${this.nombre};
}
set cambiarNota(nota){
this.nota=nota;
}


mostrarResultado(){
  console.log(`EL alumno con nombre ${this.nombre},apellido ${this.apellido},tiene la nota ${this.nota}`);
}
}

let alumno1 = new Alumno("Ángel","Ramirez",10);

alumno1.cambiarNota(3);

alumno1.mostrarResultado();

