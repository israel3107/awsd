function trono(min,max) {
var numero;
do {
  numero = prompt("ingresar un numero entre " + min + " y " + max + ":");
  numero = Number(numero);
} while (numero < min || numero > max);

  return numero;
}
