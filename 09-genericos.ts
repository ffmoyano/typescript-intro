// ============= GENERICOS ===============


function queTipoSoy(argumento) {
    return argumento;
}

let soyCualquiera = queTipoSoy("Hola Mundo");  // retorna any, pq la funcion queTipoSoy returna un any

function queTipoSoyGenerico<T>(argumento: T) {  // le dice que el tipo de parametro es del tipo que le proporcionemos
    return argumento;
}

let soyString = queTipoSoyGenerico("Hola");  // string
let soyNumber = queTipoSoyGenerico(523); // number

let soyExplicito = queTipoSoyGenerico<number>(100); // se le puede especificar tb el tipo al llamar al metodo

