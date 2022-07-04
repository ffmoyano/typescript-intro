// ========DECORADORES

// los decoradores sirven para añadir o expandir funcionalidades, realmente son funciones
// y se usan con @midecorador de un modo parecido a las anotaciones de java

function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        reportingURL = "http://www...";
    };
}

@reportableClassDecorator
class BugReport {
    type = "report";
    title: string;

    constructor(t: string) {
        this.title = t;
    }
}
const miClase = new BugReport("TITULO");  // se le añade el reportingUrl del decorador
console.log(miClase);
