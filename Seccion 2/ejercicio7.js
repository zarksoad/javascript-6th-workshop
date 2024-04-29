console.log("Inicio del script");

setTimeout(() => {
  console.log("Primer setTimeout");
}, 0);

setTimeout(() => {
  console.log("Segundo setTimeout");
}, 0);

Promise.resolve("Promesa resuelta").then(console.log);

console.log("Fin del script");


// Adivima el orden de las tareas

let primera = parseInt(prompt("Que  se va a ejecutar primera \n 1 para Inicio del Script \n 2 para primer SetTimeout `\n 3 para segundo setTimeout \n 4 para Promesa resulta. \n 5 para fin del script"))
let segunda = parseInt(prompt("Que  se va a ejecutar de segundo \n 1 para Inicio del Script \n 2 para primer SetTimeout `\n 3 para segundo setTimeout \n 4 para Promesa resulta. \n 5 para fin del script"))

let tercera = parseInt(prompt("Que  se va a ejecutar de tercera \n 1 para Inicio del Script \n 2 para primer SetTimeout `\n 3 para segundo setTimeout \n 4 para Promesa resulta. \n 5 para fin del script"))

let cuarta = parseInt(prompt("Que  se va a ejecutar de cuarta \n 1 para Inicio del Script \n 2 para primer SetTimeout `\n 3 para segundo setTimeout \n 4 para Promesa resulta. \n 5 para fin del script"))

let quinta = parseInt(prompt("Que  se va a ejecutar de quinta \n 1 para Inicio del Script \n 2 para primer SetTimeout `\n 3 para segundo setTimeout \n 4 para Promesa resulta. \n 5 para fin del script"))

let contadorFelicitacion


if(primera === 1 ){
    alert(" has ingresado la Opcion correcta:Inicio del Script")
    contadorFelicitacion+=1
}
else{
    alert("la Opcion a seguir es Inicio del Script")
}
if(primera === 5 ){
    alert(" has ingresado la Opcion correcta:Fin del script")
    contadorFelicitacion+=1
}
else{
    alert("la Opcion a seguir es  5 Fin del script")
}
if(primera === 4 ){
    alert(" has ingresado la Opcion correcta:Promesa")
    contadorFelicitacion+=1
}
else{
    alert("la Opcion a seguir es 4 Promesa ")
}
if(primera === 2 ){
    alert(" has ingresado la Opcion correcta:Primer setTimeout")
    contadorFelicitacion+=1
}
else{
    alert("la Opcion a seguir es:2 Primer setTimeout")
}
if(primera === 3 ){
    alert(" has ingresado la Opcion correcta: 3 Segundo setTimeout")
    contadorFelicitacion+=1
}
else{
    alert("la Opcion a seguir es 3 Segundo setTimeout")
}

if(opcionFelicitacion === 4){
    alert("Felicidades Has acertado en tus respuestas")
}
