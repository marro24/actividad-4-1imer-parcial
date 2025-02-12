const fs = require('fs'); // Módulo para manejar archivos

class Cliente {
    constructor(nombre, telefono, email, saldo) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.email = email;
        this.saldo = saldo;
    }

    realizarCompra(monto) {
        if (monto > this.saldo) {
            console.log(`Saldo insuficiente para la compra de ${this.nombre}.`);
        } else {
            this.saldo -= monto;
        }
    }
}

// Crear una lista de clientes
const clientes = [
    new Cliente("Juan Pérez", "555-1234", "juan@example.com", 500),
    new Cliente("María Gómez", "555-5678", "maria@example.com", 300),
    new Cliente("Carlos López", "555-9012", "carlos@example.com", 700),
    new Cliente("Ana Martínez", "555-3456", "ana@example.com", 1000),
    new Cliente("Luis Ramírez", "555-7890", "luis@example.com", 250),
];

// Realizar compras como ejemplo
clientes[0].realizarCompra(200); // Juan compra por 200
clientes[1].realizarCompra(400); // María intenta comprar por 400 (saldo insuficiente)
clientes[2].realizarCompra(150); // Carlos compra por 150

// Guardar los clientes en un archivo JSON
fs.writeFileSync("clientes.json", JSON.stringify(clientes, null, 2));

console.log("Clientes guardados en clientes.json");
