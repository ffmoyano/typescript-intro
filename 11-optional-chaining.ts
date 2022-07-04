// ============= ENCADENAMIENTO OPCIONAL

interface Pasajero {
    nombre: string;
    hijos?: string[];
}

const pasajero1: Pasajero = {
    nombre: "Fernando"
}

const pasajero2: Pasajero = {
    nombre: "Melissa",
    hijos: ["Natalia", "Gabriel"]
}

function imprimeHijos (pasajero: Pasajero): void {
    // aqui lo que hace ? es ejecutar el length solo si hijos existe
    const cuantosHijos = pasajero.hijos?.length || 0; // si no existen que devuelva 0
    console.log( cuantosHijos)
}

imprimeHijos(pasajero1);