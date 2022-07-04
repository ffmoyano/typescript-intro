//===== ANY, OBJETOS, ARRAYS E INTERFACES =======

let cualquiera: any;  // any hace que la variable admita cualquier tipo de dato

let habilidades: (string | boolean | number)[]  = ["Bash", "Counter", "Healing", 100];

habilidades.push(true);

// objetos
// podriamos poner al lado del nombre del objeto el tipo de datos,
// pero todas sus propiedades tendrian que ser de ese tipo
// a no ser que usemos any, que no es recomendable
const personaje = {
    nombre: "Strider",  // no le podemos definir aqui el tipo de dato
    hp: 100,
    habilidades: ["Bash", "Counter", "Healing"]
}


// interface define el blueprint de un tipo de objeto
interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;  // la interrogacion significa que este parametro opcional
}

const personajeConInterfaz: Personaje = {
    nombre: "Strider",
    hp: 100,
    habilidades: ["Bash", "Counter", "Healing"]
    // no necesitamos definir puebloNatal pq lo hemos marcado opcional, sino protestaria
}

console.table(personajeConInterfaz)