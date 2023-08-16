"use strict";
class Comprador {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    presentacion() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
    }
}
class Vendedor {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    presentacion2() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
    }
}
class Automoviles extends Vendedor {
    constructor(nombre, edad, modelo, precio) {
        super(nombre, edad);
        this.modelo = modelo;
        this.precio = precio;
    }
    vendiendo() {
        console.log(`${this.nombre} esta vendidendo un auto ${this.modelo} con un precio de ${this.precio}`);
    }
}
/* --------------CAMPRADOR--------------------- */
const comprador1 = new Comprador("Jose", 23);
const comprador2 = new Comprador("Andres", 20);
const comprador3 = new Comprador("Jisus", 19);
/* --------------VENDEDOR--------------------- */
const Vendedor1 = new Vendedor("Julian", 33);
const Vendedor2 = new Vendedor("Juan", 27);
const Vendedor3 = new Vendedor("Antonio", 40);
/* --------------AUTOMOVILES--------------------- */
const auto1 = new Automoviles("Julian", 28, "chevrolet Onix Turbo", "69 millones");
const auto2 = new Automoviles("Juan", 25, "mustang Gt Shelby", "210 millones");
const auto3 = new Automoviles("Antonio", 36, "Mercedez c180", "130 millones");
//------------------------------
comprador1.presentacion();
Vendedor1.presentacion2();
auto1.vendiendo();
//------------------------------
comprador2.presentacion();
Vendedor2.presentacion2();
auto2.vendiendo();
//------------------------------
comprador3.presentacion();
Vendedor3.presentacion2();
auto3.vendiendo();
