// Estudiante: FERNANDO DAVID CONTRERAS MORAN
function factorial(x: number): number{
    if(x<=0)return 1
    return x*factorial(x-1);
}

const prueba = factorial(4);

console.log(prueba);