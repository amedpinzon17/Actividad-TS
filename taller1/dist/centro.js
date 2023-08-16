"use strict";
class Centro1 {
    constructor(name) {
        this.name = name;
        this.campers = [];
    }
    //! añado un nuevo camper al conjusnto de Camper
    agregarCamper(camper) {
        this.campers.push(camper);
    }
    //! doy el numero  total de camper agregados
    cantidadCamper() {
        return this.campers.length;
    }
}
/* ----------------------------------------------- */
class Ruta1 {
    constructor(name) {
        this.name = name;
        this.niveles = [];
    }
    //! añado una nueva ruta al conjunto de Ruta
    agregarNivel(nivel) {
        this.niveles.push(nivel);
    }
}
/* ----------------------------------------------- */
class Nivel1 {
    constructor(nombre) {
        this.nombre = nombre;
        this.camperTermino = [];
    }
    //! añado un nuevo camper al conjusnto de Camper
    agregarCamperTerminado(camper) {
        this.camperTermino.push(camper);
    }
}
/* ----------------------------------------------- */
class Camper5 {
    constructor(name, nivelInicial) {
        this.name = name;
        this.nivelActual = nivelInicial;
        this.contrato = Contrato.SinContrato1;
    }
    //! registro la finalizacion de de nivel por parte del camper
    terminalNivel() {
        this.nivelActual.agregarCamperTerminado(this);
    }
    obtenerContrato() {
        return this.contrato;
    }
}
/* ----------------------------------------------- */
var Contrato;
(function (Contrato) {
    Contrato["SinContrato1"] = "No contratado";
    Contrato["Remoto1"] = "Contrato remoto";
    Contrato["presencial"] = "Contrato presencial";
})(Contrato || (Contrato = {}));
/* ----------------------------------------------- */
//CLASE CENTRO
const medellin = new Centro1("Medellin");
const bucara = new Centro1("Bucaramanga");
// CLASE RUTA
const node = new Ruta1("Node JS");
const Javascrip = new Ruta1("JavaScript");
const python = new Ruta1("Python");
// CLASE NIVEL
const Intermedio = new Nivel1("Intermedio");
const Avanzado = new Nivel1("Avanzado");
const Basico = new Nivel1("Basico");
//CLASE CAMPER
const Amed = new Camper5("Amed", Intermedio);
const Jose = new Camper5("Jose", Intermedio);
const Migue = new Camper5("Migue", Avanzado);
//! Agregar niveles a rutas
node.agregarNivel(Intermedio);
node.agregarNivel(Avanzado);
node.agregarNivel(Basico);
//! Agregar campers a los niveles
Intermedio.agregarCamperTerminado(Amed);
Basico.agregarCamperTerminado(Jose);
Basico.agregarCamperTerminado(Migue);
//! Agregar campers a los centros
medellin.agregarCamper(Amed);
bucara.agregarCamper(Jose);
medellin.agregarCamper(Migue);
//! Cgestion de contratos
Amed.contrato = Contrato.Remoto1;
Jose.contrato = Contrato.presencial;
Migue.contrato = Contrato.Remoto1;
const camperRemoto = medellin.campers.filter(camper1 => camper1.obtenerContrato() === Contrato.Remoto1);
const camperPresencial = bucara.campers.filter(camper1 => camper1.obtenerContrato() === Contrato.presencial);
console.log("Campers con contratos remotos: ", camperRemoto.map(camper => camper.name));
console.log("Campers con contratos Presenciales: ", camperPresencial.map(camper => camper.name));
//! ahora buscar el centro con mayor y menor cantidad de campers
let centroMayor = medellin;
let centroMenor = bucara;
if (bucara.cantidadCamper() > medellin.cantidadCamper()) {
    centroMayor = medellin;
    centroMenor = bucara;
}
else if (medellin.cantidadCamper() > medellin.cantidadCamper()) {
    centroMayor = bucara;
    centroMenor = medellin;
}
console.log(`El centro con mayor cantidad de campers es: ${centroMayor.name}`);
console.log(`El centro con menor cantidad de campers es: ${centroMenor.name}`);
