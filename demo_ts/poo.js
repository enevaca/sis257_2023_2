"use strict";
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
class Estudiante extends Persona {
    constructor(cedulaIdentidad, nombre, primerApellido, fechaNacimiento, carnetUniversitario) {
        super(cedulaIdentidad, nombre, primerApellido, fechaNacimiento);
        this.carnetUniversitario = carnetUniversitario;
    }
    saludar() {
        console.log(`Soy ${this.nombre} y mi CU es ${this.carnetUniversitario}`);
    }
}
