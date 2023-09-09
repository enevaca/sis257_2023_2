// Esto es un comentario
/* Esto es un comentario
  en múltiples líneas */
//console.log('Hola TypeScript!!!');

import { Estudiante, Persona } from "./poo";

// Tipos de Datos
// Boolean
let esActivo: boolean = true;     // El ámbito es local, funciona dentro del scope (función, ciclo, if, {})
var esActivo2: boolean = false;   // El ámbito es todo el archivo
const esActivo3: boolean = false; // Utilizado para constantes

// Number
let entero: number = 73;
let real: number = 7.5;
let binario: number = 0b101;
let octal: number = 0o11;
let hexadecimal: number = 0xF;
let entroLargo: number = 245465466611;

// String
let sigla: string = 'SIS257';
let materia: string = 'Desarrollo de Aplicación Int/Internet II ';
let concatenado: string = sigla + ' - ' + materia;
let concatenado2: string = `${sigla} - ${materia}`;
let mayuscula: string = materia.toUpperCase();
let minuscula: string = materia.toLocaleLowerCase();
let reemplazo: string = materia.replace(/ /g, '#');
let subcadena: string = materia.substring(0, 6);
let repetir: string = sigla.repeat(3);
let sinEspaciosExtremos: string = materia.trim();
let longituCadena: number = sigla.length;
let separar: string[] = materia.split(' ');

// Array
let array: string[] = ['uno', 'dos', 'tres'];
let arrayNumerico: number[] = [1, 2, 3, 4, 5];
let longitudArray: number = arrayNumerico.length;
let doble: number[] = arrayNumerico.map(n => n *2);
let factorial: number = arrayNumerico.reduce((prev, curr) => prev * curr);
let impares: number[] = arrayNumerico.filter(n => n % 2 !== 0);
array.push('cuatro');

// Tuple
let tuple = [true, 5.6, 'Hola', [15, 7, 9]];

// Enum
enum sexo { M = 'Masculino', F = 'Femenino' };
enum color { red = 'Rojo', yellow = 'Amarillo', green = 'Verde' };
enum tipo { par = 0, impar = 1 };

// Any
let cualquiera: any = 4546;
cualquiera = 'Hola SIS257';

// Object
let objeto: Object = { nombre: 'Juan', apellidos: 'Pérez López' }

// Estructuras de control
let contiene: boolean;
if (materia.includes('Aplicación')) contiene = true;
else if (materia.startsWith('Desarrollo')) contiene = true;
else contiene = false;

for(let i in array) console.log(i); // Obtiene posiciones
for(let j of array) console.log(j); // Obtiene valores
array.forEach(v => console.log(v)); // Obtiene valores

// Interface
interface Docente { 
  nombre: string, 
  semestre: number 
};
let juan: Docente = { nombre: 'Juan', semestre: 2 };

// Funciones
function saludar(nombre: string): void {
  console.log(`Hola ${nombre}`);
}
saludar('Maria');
console.log(juan);

// POO
let persona: Persona = new Persona('123', 'Juan', 'Pérez', new Date('1999-08-06'));
persona.saludar();

let estudiante: Estudiante = new Estudiante('369', 'Carlos', 'Gil', new Date(), '24-256');
estudiante.saludar();
