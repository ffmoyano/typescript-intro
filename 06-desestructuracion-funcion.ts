// == DESESTRUCTURACION DE ARGUMENTOS Y DEL RETORNO DE LA FUNCION

export interface Producto {
    descripcion: string;
    precio: number;
}

const telefono: Producto = {
    descripcion: "NOKIA 3310",
    precio: 110
}

const tablet: Producto = {
    descripcion: "IPAD",
    precio: 200
}

export function calculaImpuestos(productos: Producto[]):[number, number] {

    let total = 0;
// DESESTRUCTURACION DE ARGUMENTO, cogemos la propiedad que queremos y la metemos en brackets {}
    productos.forEach(  ({ precio })  => {
        total+=precio;
    })

    return [total, total * 0.15];
}

const articulos = [ telefono, tablet];
// DESESTRUCTURACION DEL RETORNO DE LA FUNCION
const [ total, impuestos ] = calculaImpuestos(articulos);

// console.log(total, impuestos)