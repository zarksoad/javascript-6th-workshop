
mensaje1 = " Js"
mensaje2= "MacroTarea"
mensaje3 = "MicroTarea"

setTimeout(()=>
    console.log(mensaje2)
,0)
console.log(mensaje1)

setTimeout(()=>
    console.log(mensaje2)
,1000)
Promise.resolve().then(()=>{
    console.log(mensaje3)
})
Promise.resolve().then(()=>{
    console.log(mensaje3)
})

console.log(mensaje1)

//¿Por qué "Mensaje 2: Con timeout de 0 segundos" no se muestra inmediatamente después de "Mensaje 1: Inmediatamente", a pesar de tener un retardo de 0 segundos? 

// En este caso es porque la ejecucion se realiza segun su prioridad cuando el JavaScript hace el recorrido toma como prioridad a ejecutar sus propias tareas mientras setTimeout la considera una tarea de webApi por lo cual su ejecucion va ser despues del mensaje 1 , 
// si ponemos una promesa sera considerada como una micro task y este se ejecutara antes de la macrotarea (seTimmeout)