const num1 = parseInt(prompt("Introduce un número "));
const num2 = parseInt(prompt("Introduce otro número"));

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
  if (b !== 0) {
    return a / b;
  } else {
    console.log("No se puede dividir entre cero.");
  }
}

const numeroConvertido1 = Number(num1);
const numeroConvertido2 = Number(num2);

alert(`La suma de ${numeroConvertido1} y ${numeroConvertido2} es ${sumar(numeroConvertido1, numeroConvertido2)}`);
alert(`La resta de ${numeroConvertido1} y ${numeroConvertido2} es ${restar(numeroConvertido1, numeroConvertido2)}`);
alert(`La multiplicación de ${numeroConvertido1} y ${numeroConvertido2} es ${multiplicar(numeroConvertido1, numeroConvertido2)}`);
alert(`La división de ${numeroConvertido1} y ${numeroConvertido2} es ${dividir(numeroConvertido1, numeroConvertido2)}`);
