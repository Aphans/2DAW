const objeto1 = {
    campo1: 1,
    campo2: "hola",
    campo3: {
        campo3_1:'campo3_de objeto1',
    },
};
//structuredClone permite realizar un clonado de campos de segundo y que los cambios
//relizados en un objeto no se propagen al otro objeto
//const objeto2 = structuredClone(objeto1);

//Si realizamos la "clonaciÃ³n" con el spread operator lo que viene a continuaciÃ³n
//modifica el contenido del objeto origen tambiÃ©n
const objeto2 = {...objeto1};
objeto2.campo3.campo3_1 ="esto es el campo de objeto2";

console.log(objeto2);
console.log('------');
console.log(objeto1);
