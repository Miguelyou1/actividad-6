function sumar(a, b) {
    return a + b;
}
function restar(a, b) {
    return a - b;
}
function multiplicar(a, b) {
    return a * b;
}
function dividir(a, b) {
    if (b === 0) {
        console.log("No se puede dividir por cero ");
        return;
    }
    return a / b;
}
var Numero1 = parseInt(prompt("Introduzca el primer número:"));
var Numero2 = parseInt(prompt("Introduzca el segundo número:"));
console.log("La suma es " + sumar(Numero1, Numero2));
console.log("La resta es " + restar(Numero1, Numero2));
console.log("La multiplicación es " + multiplicar(Numero1, Numero2));
console.log("La división es " + dividir(Numero1, Numero2));