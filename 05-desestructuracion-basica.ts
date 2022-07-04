// ===== DESESTRUCTURACIÓN DE OBJETOS

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anno: number;
}

const reproductor: Reproductor = {
    volumen: 20,
    segundo: 30,
    cancion: "Tsubasa o Kudasai",
    detalles: {
        autor: "Michio Yamagami",
        anno: 1970,
    }
}

// desestructuracion => crea un grupo de variables a partir de un objeto creado
const {volumen, segundo, cancion, detalles} = reproductor;
// const { autor } = detalles;  // sacaria el autor de la constante que acabamos de sacar de la primera desestructuracion

console.log(cancion, detalles)

// desestructuracion de objetos anidados en una sola linea
const {detalles: {autor}} = reproductor;

console.log("AUTOR: ", autor);

// desestructuracion cambiando el nombre de la variable resultante
const {volumen: sonido, detalles: {autor: autorDetalle}} = reproductor;

console.log("VOLUMEN ", sonido, "AUTOR: ", autorDetalle);

// ==== DESESTRUCTURACION DE ARRAYS

const dbz: any[] = ["Goku", "Vegeta", "Trunks", ["androide17", "androide18"]];

// aqui no hace falta renombrar las variables ya que no hay ningun nombre de variable que heredar,
// se pone directamente el que se quiera respetando el orden del array para cada variable
const [goku, vegeta, trunks, [androide17, androide18]] = dbz;
// se podria poner el array de androides en una sola variable
// const [goku, vegeta, trunks, androides] = dbz;