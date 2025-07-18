// ##############################
// ######## Dia 1 ##########
// ###############################

/* Primer comando */
console.log('Hola mundo!');

// Number
let myNumber = 10;
let ID = 123456

// String
var first_name = "Alexi";
let last_name = "Duran";

// Objeto
const myObject = {
    "Nombre": first_name,
    "Apellido": last_name,
    "ID": ID
};
// Acceso al objeto
console.log(myObject.Nombre);
console.log(myObject.Apellido);
console.log(myObject.ID);

// Revisar el tipo de dato
console.log(typeof myObject);
console.log(typeof first_name);
console.log(typeof ID);

// Concatenación
console.log("Nombre: ", first_name, "\nApellido: ", last_name);
console.log("Nombre: " + first_name + "\nApellido: " + last_name);
console.log(`Nombre: ${first_name} \nApellido: ${last_name}`);

// Booleanos
let booleanito1 = true;
let booleanito2 = false;

// Condionales
if (booleanito1 == true) {
    console.log("Es verdadero!!");
} else {
    console.log("No es verdadero :sadfais:")
}

// Ciclos 
//  - For
for (let index = 0; index < 10; index++) {
    console.log(index+1);
    
}

//  - While
let i = 0;
while (i == 10) {
    console.log(i++);
}

// Array
let myArray = ["Alexi", "Duran", 20];

// Funciones
//  - Función con retorno y parametro
function firstFunction(params) {
    return params;
}

//  - Funciones sin parametros y sin retorno
function secondFunction() {
    console.log('Hola desde la segunda función');
}

//  - Foreach

myArray.forEach((element) => {
    console.log(element);
});

// Desarrollado por : Alexi Durán