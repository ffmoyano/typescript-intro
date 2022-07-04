// ============= CLASES ====================

// al contrario que las interfaces, en las clases se puede definir como funcionan los metodos
// y crear instancias

class Heroe {
    private alterEgo: string;  // private visible solo dentro de la clase
    public edad: number;    // public se puede ver desde fuera de la clase tb (NIVEL POR DEFECTO)
    static nombreReal: string;  // se puede acceder al valor sin crear una instancia de la clase

    constructor() { // este metodo se llama al crear una instancia
        console.log('hey');
    }

    imprimirNombre() {
        return this.alterEgo + ' ' + this.edad;
    }
}

class HeroeDefinidoConstructor {  // se pueden definir las propiedades directamente en el constructor
    constructor(
        public alterEgo: string,
        public edad?: number,
        public nombreReal?: string
    ) {
    }
}

class PersonaNormal extends HeroeDefinidoConstructor {  // extend como en java
    constructor(
        public nombre: string,
        public direccion: string
    ) {
        super("superman");  // si extiendes una clase hay que llamarla en el constructor
    }
}

interface HeroeInterface {
    alterEgo: string;  // no hay modificadores de acceso
    edad: number;
    nombreReal: string;

    // no hay constructor pq la interface no genera instancias de un objeto

    imprimirNombre: () => string;  // solo la definicion de los argumentos y resultado
}

console.table(new HeroeDefinidoConstructor("Monchito", 20, "Macharius"))