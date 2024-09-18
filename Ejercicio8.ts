export class Persona {
    private nombre: string;
    private edad: number;
    private ciudad: string;

    // Constructor
    constructor(nombre: string, edad: number, ciudad: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.ciudad = ciudad;
    }

    // Getters
    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getEdad(): number {
        return this.edad;
    }

    //Setters
    public setEdad(edad: number): void {
        this.edad = edad;
    }

    public getCiudad(): string {
        return this.ciudad;
    }

    public setCiudad(ciudad: string): void {
        this.ciudad = ciudad;
    }
}

const persona : Persona = new Persona('Fernando David Contreras Moran',20,'Quiche');

console.log('Nombre:',persona.getNombre())
console.log('Edad:',persona.getEdad())
console.log('Ciudad:',persona.getCiudad())

persona.setNombre('David Contreras');
persona.setEdad(21);
persona.setCiudad('Quetzaltenango');

console.log('------------------------------------------------------------')
console.log('Nombre:',persona.getNombre())
console.log('Edad:',persona.getEdad())
console.log('Ciudad:',persona.getCiudad())

