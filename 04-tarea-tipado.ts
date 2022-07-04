interface SuperHeroe {
    nombre: string;
    edad: number;
    direccion: Direccion;
}

interface Direccion {
    calle: string;
    pais: string;
    ciudad: string;
    mostrarDireccion: () => string;
}

const superHeroe: SuperHeroe = {
    nombre: "Spiderman",
    edad: 30,
    direccion: {
        calle: "Main St",
        pais: "USA",
        ciudad: "NY",
        mostrarDireccion() {
            return this.calle + ", " + this.ciudad + ", " + this.pais;
        }
    },
}


console.log(superHeroe.direccion.mostrarDireccion());