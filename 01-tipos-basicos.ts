//====== STRINGS, NUMBERS Y BOOLEANOS


let nombre: string = "Strider";
let hp: number = 95;
// hp = "FULL"; Error, no se puede castear directamente de string a number
let tipoVariable: number | string = 42;
tipoVariable = "cadena";  // No da error al pasar a string pq la variable puede tener los dos tipos

let estaVivo: boolean = true;  // no se puede usar en un boolean el 1 y el 0

console.log(nombre, hp);