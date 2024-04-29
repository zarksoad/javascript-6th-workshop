let crearSumador = (num)=>{
    let suma = (num2)=>{
        return num  + num2
    }
    return suma

}

let sumar5 = crearSumador(5)
let sumar4 = crearSumador(4)

console.log(sumar5(3))
console.log(sumar4(6))


// // ¿Cómo mantienen las funciones su acceso a variables externas después de que la función externa ha terminado de ejecutarse?

// Las funciones mantienen su acceso a variables externas a través de closures. Un closure en Java Script es una función interna que tiene acceso a las variables de su función externa, incluso después de que la función externa haya terminado su ejecución. esto por el scope


// ¿Cuáles son las implicaciones de memoria de mantener estos closures, especialmente si se crean muchas instancias de funciones con closures? 


// Mantener closures puede tener problemas en la memoria, especialmente si se crean muchas  funciones con closures que capturan variables de scope externo. 