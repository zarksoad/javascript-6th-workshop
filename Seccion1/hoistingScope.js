// Global Scope
var globalVariable = "Soy una variable global.";

function testScope() {
  // Function Scope
  var functionVariable = "Soy una variable local.";

  if (true) {
    // Block Scope
    let blockVariable = "Soy una variable de bloque.";
    console.log("Dentro del bloque:", blockVariable);
  }

  console.log("Dentro de la función:", functionVariable);
}

console.log("Fuera de la función:", globalVariable);
testScope();

// game
let variableGlobal = parseInt(prompt("Hola soy una variable global puedes ingresar, \n1 para 2 , cualquier para no"))
let porQue = prompt("Ingresa el por que de tu desicion")
if(variableGlobal === 1){
    
    alert(globalVariable)
    alert(`Si puedes ingresar en mi por ${porQue}`)


}
else{
    alert(globalVariable)
    alert(`Como soy global puedes llamarme desde cualquier parte de tu codigo , tu respuesta: ${porQue}`)

}
let variableDeFuncion = parseInt(prompt("Hola Soy una variable local, puedes ingresar \n1 para 2 , cualquier para no"))
porQue = prompt("Ingresa el por que de tu desicion")
if(variableDeFuncion === 1){
    try {
        alert(functionVariable);
    } catch (error) {
        // Maneja el error
        if (error instanceof ReferenceError) {
            alert(`Lo siento no puedes ingresar solo puedes hacerlo dentro de la funcion , tu respuesta: ${porQue}`)
        } else {
            
            console.error('Se produjo un error:', error.message);
        }
    }

}
else{
    try {
        alert(functionVariable);
    } catch (error) {
        // Maneja el error
        if (error instanceof ReferenceError) {
            alert(`Es correcto no puedes ingresar a  mi , tu respuesta: ${porQue}`)
        } else {
            console.error('Se produjo un error:', error.message);
        }
    }

    

}
let variableDeBloque = parseInt(prompt("Soy una variable de bloque, puedes ingresar \n1 para 2 , cualquier para no"))
porQue = prompt("Ingresa el por que de tu desicion")
if(variableDeBloque === 1){
    try{
        alert(blockVariable)
        
    } catch(error){
        if(error instanceof ReferenceError)
        alert(`Lo siento no puedes ingresar solo puedes hacerlo dentro de la bloque , tu respuesta: ${porQue}`)
        else{
            alert("Otro error")
        }
    }


}
else{

    try{
        alert(blockVariable)
    }
    catch(error){
        if(error instanceof ReferenceError){
            alert("Es correcto no puedes ingresar a mi , tu respuesta: " + porQue)
        }

    }  

}

