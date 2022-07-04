// IMPORTACIONES

import {calculaImpuestos, Producto} from "./06-desestructuracion-funcion";


const carritoCompras: Producto[] = [
    {
        descripcion: "Telefono 1",
        precio: 100
    },
    {
        descripcion: "Telefono 2",
        precio: 100
    }
];

const [total, impuestos] = calculaImpuestos(carritoCompras);

console.log(total, impuestos);