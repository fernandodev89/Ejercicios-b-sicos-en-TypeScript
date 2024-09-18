// Estudiante: FERNANDO DAVID CONTRERAS MORAN
const numeros:number[] = [1,56,3,2,6];

console.log('Estos son los numeros dentro del arreglo:');
for (let a in numeros){
    console.log(numeros[a]);
}

let suma : number = 0;
for (let a in numeros){
    suma += numeros[a];
}

console.log('----------------------------------------------------------------');
console.log('| Esta es la suma total de todos los elementos del arreglo:',suma,'|');
console.log('----------------------------------------------------------------');