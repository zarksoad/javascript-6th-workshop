let prediccionA = prompt("Predice el valor de 'a' antes de ser declarada:"); 
let prediccionB = prompt("Predice el valor de 'b' antes de ser declarada:");
let prediccionC = prompt("Predice el valor de 'c' antes de ser declarada:");

// Predicciones para las funciones llamadas antes de ser declaradas
let prediccionFuncionDeclarada = prompt("Predice el resultado de funcionDeclarada() antes de ser declarada:");
let prediccionFuncionExpresada = prompt("Predice el resultado de funcionExpresada() antes de ser declarada:");


console.log("Valor de a:", a);
alert("valor a valor :undefined")
console.log("Valor de b:", b);
alert("va indicar reference error debido esta siendo llamada antes de ser declarada")
console.log("Valor de c:", c);
alert("va indicar reference error debido esta siendo llamada antes de ser declarada")

// functions call
console.log("Resultado de funcionDeclarada:", funcionDeclarada());
alert("La funcion va ser llamada debida houisting")
console.log("Resultado de funcionExpresada:", funcionExpresada());
alert("La no puede ser llamada antes de ser declarada")

// vars declaration
var a = 1;
let b = 2;
const c = 3;

// functions declarations
function funcionDeclarada() {
  return "Función declarada ha sido llamada.";
}

const funcionExpresada = function () {
  return "Función expresada ha sido llamada.";
};