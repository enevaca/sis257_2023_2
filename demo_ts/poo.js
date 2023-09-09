"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estudiante = exports.Persona = void 0;
class Persona {
    constructor(cedulaIdentidad, nombre, primerApellido, fechaNacimiento) {
        this.cedulaIdentidad = cedulaIdentidad;
        this.nombre = nombre;
        this.primerApellido = primerApellido;
        this.fechaNacimiento = fechaNacimiento;
    }
    saludar() {
        console.log(`Soy ${this.nombre} y mi CI es ${this.cedulaIdentidad}`);
    }
}
exports.Persona = Persona;
class Estudiante extends Persona {
    constructor(cedulaIdentidad, nombre, primerApellido, fechaNacimiento, carnetUniversitario) {
        super(cedulaIdentidad, nombre, primerApellido, fechaNacimiento);
        this.carnetUniversitario = carnetUniversitario;
    }
    saludar() {
        console.log(`Soy ${this.nombre} y mi CU es ${this.carnetUniversitario}`);
    }
}
exports.Estudiante = Estudiante;
