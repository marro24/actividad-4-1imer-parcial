const fs = require('fs'); // Módulo para manejar archivos

class Evento {
    constructor(nombre, fecha, lugar, costoEntrada) {
        this.nombre = nombre;
        this.fecha = fecha;
        this.lugar = lugar;
        this.costoEntrada = costoEntrada;
    }

    cambiarFecha(nuevaFecha) {
        this.fecha = nuevaFecha;
    }
}

// Crear una lista de eventos
const eventos = [
    new Evento("Concierto de Rock", "2025-06-15", "Estadio Nacional", 50),
    new Evento("Feria del Libro", "2025-07-10", "Centro de Convenciones", 10),
    new Evento("Carrera 10K", "2025-05-20", "Parque Central", 5),
    new Evento("Festival de Comida", "2025-08-25", "Plaza Mayor", 20),
    new Evento("Obra de Teatro", "2025-09-05", "Teatro Municipal", 30),
];

// Cambiar la fecha de un evento como ejemplo
eventos[0].cambiarFecha("2025-06-20");

// Guardar los eventos en un archivo JSON
fs.writeFileSync("eventos.json", JSON.stringify(eventos, null, 2));

console.log("Eventos guardados en eventos.json");
