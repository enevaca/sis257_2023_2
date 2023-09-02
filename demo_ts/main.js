"use strict";
// Esto es un comentario
/* Esto es un comentario
  en múltiples líneas */
//console.log('Hola TypeScript!!!');
// Tipos de Datos
// Boolean
let esActivo = true; // El ámbito es local, funciona dentro del scope (función, ciclo, if, {})
var esActivo2 = false; // El ámbito es todo el archivo
const esActivo3 = false; // Utilizado para constantes
// Number
let entero = 73;
let real = 7.5;
let binario = 0b101;
let octal = 0o11;
let hexadecimal = 0xF;
let entroLargo = 245465466611;
// String
let sigla = 'SIS257';
let materia = 'Desarrollo de Aplicación Int/Internet II ';
let concatenado = sigla + ' - ' + materia;
let concatenado2 = `${sigla} - ${materia}`;
let mayuscula = materia.toUpperCase();
let minuscula = materia.toLocaleLowerCase();
let reemplazo = materia.replace(/ /g, '#');
let subcadena = materia.substring(0, 6);
let repetir = sigla.repeat(3);
let sinEspaciosExtremos = materia.trim();
let longituCadena = sigla.length;
let separar = materia.split(' ');
// Array
let array = ['uno', 'dos', 'tres'];
let arrayNumerico = [1, 2, 3, 4, 5];
let longitudArray = arrayNumerico.length;
let doble = arrayNumerico.map(n => n * 2);
let factorial = arrayNumerico.reduce((prev, curr) => prev * curr);
let impares = arrayNumerico.filter(n => n % 2 !== 0);
array.push('cuatro');
// Tuple
let tuple = [true, 5.6, 'Hola', [15, 7, 9]];
// Enum
var sexo;
(function (sexo) {
    sexo["M"] = "Masculino";
    sexo["F"] = "Femenino";
})(sexo || (sexo = {}));
;
var color;
(function (color) {
    color["red"] = "Rojo";
    color["yellow"] = "Amarillo";
    color["green"] = "Verde";
})(color || (color = {}));
;
var tipo;
(function (tipo) {
    tipo[tipo["par"] = 0] = "par";
    tipo[tipo["impar"] = 1] = "impar";
})(tipo || (tipo = {}));
;
// Any
let cualquiera = 4546;
cualquiera = 'Hola SIS257';
// Object
let objeto = { nombre: 'Juan', apellidos: 'Pérez López' };
// Estructuras de control
let contiene;
if (materia.includes('Aplicación'))
    contiene = true;
else if (materia.startsWith('Desarrollo'))
    contiene = true;
else
    contiene = false;
for (let i in array)
    console.log(i); // Obtiene posiciones
for (let j of array)
    console.log(j); // Obtiene valores
array.forEach(v => console.log(v)); // Obtiene valores
;
let juan = { nombre: 'Juan', semestre: 2 };
// Funciones
function saludar(nombre) {
    console.log(`Hola ${nombre}`);
}
saludar('Maria');
console.log(juan);
