// =========== FUNCIONES =================

function sumar(a: number, b:number): number {
    return a + b;
}

console.log(sumar(2, 5))

// arrow function
const sumarArrow = (a:number, b:number): number => {
    return a + b;
}

// argumentos opcionales con ? y con valor predefinido con un igual, este es el valor
// que usara este parametro si no se le pasa un argumento a la hora de llamarlo
// siempre deben ir primero los parametros obligatorios, luego pueden ir opcionales y con
// valor predefinido
function multiplicar (numero:number, opcional?:number, base:number = 20): number {
    return numero * base;
}


// no da error pq opcional no es obligatorio, y base por defecto se pone a valor 20
const multiplicacion = multiplicar(5,6);

console.log(multiplicacion)

interface PersonajeLOR {
    nombre: string;
    pv: number;
    // funciones internas en una interfaz
    mostrarHp: () => void;
}

// se pone void para no retornar nada, o hacer un return undefined
// ( que es lo que hace js por defecto en sus funciones sin retorno )
function curar( personaje: PersonajeLOR, curarX: number): void {
    personaje.pv += curarX;
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: "Strider",
    pv: 50,
    mostrarHp() {
        console.log( "Puntos de vida: ", this.pv);
    }
}

curar( nuevoPersonaje, 10);
console.log(nuevoPersonaje.pv) // 50 + 10;
nuevoPersonaje.mostrarHp()