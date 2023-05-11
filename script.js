console.log("a continuación podrás escribir dos números para poderlos sumar, restar, multiplicar o dividir");
console.log("escriba el primer número");
let primernum = prompt();
let num1 = parseInt(primernum);
console.log("escriba el seguno número");
let segundonum = prompt();
let num2 = parseInt(segundonum);

suma(num1, num2);
function suma(suma1, suma2) {
    let resultado = suma1 + suma2;
    console.log("la suma de " + suma1 + " y " + suma2 + " es: " + resultado);
    return resultado;
}

resta(num1, num2);
function resta(minuendo, sustraendo) {
    let resultado = minuendo - sustraendo;
    console.log("la resta de " + minuendo + " y " + sustraendo + " es: " + resultado);
    return resultado;
}

producto(num1, num2);
function producto(Fact1, Fact2) {
    let resultado = Fact1 * Fact2;
    console.log("la multiplicación de " + Fact1 + " y " + Fact2 + " es: " + resultado);
    return resultado;
}

division(num1, num2);
function division(Divi, div) {
    let resultado = Divi / div;
    console.log("la división de " + Divi + " y " + div + " es: " + resultado);
    return resultado;
}
