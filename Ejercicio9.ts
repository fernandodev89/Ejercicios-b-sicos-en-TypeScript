import {Persona} from './Ejercicio8';

let persona1 = new Persona("Fernando", 25, "Guatemala");

console.log("Nombre inicial:", persona1.getNombre());
console.log("Edad inicial:", persona1.getEdad());
console.log("Ciudad inicial:", persona1.getCiudad());

persona1.setNombre("Duglas");
persona1.setEdad(30);
persona1.setCiudad("Peten Norte");
console.log('--------------------------------------------------')
console.log("Nuevo nombre:", persona1.getNombre());
console.log("Nueva edad:", persona1.getEdad());
console.log("Nueva ciudad:", persona1.getCiudad());
