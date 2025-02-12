const fs = require('fs'); // Módulo para manejar archivos

class OrdenDeCompra {
    constructor(id, cliente, productos) {
        this.id = id;
        this.cliente = cliente;
        this.productos = productos; // Array de objetos { nombre, precio }
        this.total = this.calcularTotal();
    }

    calcularTotal() {
        return this.productos.reduce((suma, producto) => suma + producto.precio, 0);
    }
}

// Crear una lista de órdenes de compra
const ordenes = [
    new OrdenDeCompra(1, "Juan Pérez", [
        { nombre: "Laptop", precio: 800 },
        { nombre: "Mouse", precio: 20 }
    ]),
    new OrdenDeCompra(2, "María Gómez", [
        { nombre: "Smartphone", precio: 600 }
    ]),
    new OrdenDeCompra(3, "Carlos López", [
        { nombre: "Tablet", precio: 300 },
        { nombre: "Teclado", precio: 50 },
        { nombre: "Funda", precio: 25 }
    ]),
    new OrdenDeCompra(4, "Ana Martínez", [
        { nombre: "Monitor", precio: 250 }
    ]),
    new OrdenDeCompra(5, "Luis Ramírez", [
        { nombre: "Impresora", precio: 200 },
        { nombre: "Tinta", precio: 50 }
    ]),
];

// Guardar las órdenes en un archivo JSON
fs.writeFileSync("ordenes.json", JSON.stringify(ordenes, null, 2));

console.log("Órdenes de compra guardadas en ordenes.json");
