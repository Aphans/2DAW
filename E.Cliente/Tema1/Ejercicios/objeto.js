const persona={
nombre:"Pedro",
apellidos:"Pereda",
};

const persona2 = {...persona};
persona2.nombre ="Rocky";
persona.nombre="Luis";
console.log(persona.nombre);
console.log(persona2.nombre);

