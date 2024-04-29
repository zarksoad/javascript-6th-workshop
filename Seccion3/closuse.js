let closure = (function (){
    let contador = 0
    let incrementar = ()=>{
        return contador++

    }
    let decrementar = ()=>{
        return contador--
        
    }
    let valor = ()=>{
        alert(`El contador es ${contador}`)
    }
    return{
      incrementar,decrementar,valor
    }

})()

let flag = true

while(flag){
    let opcion = parseInt(prompt("Presiona \n1 para incrementar \n2 para decrementar \n3 para ver contador  \n4 para salir"))
    if (!isNaN(opcion)){
        if (opcion ===1){
            closure.incrementar()
        }
        else if (opcion === 2){
            closure.decrementar()
        }
        else if (opcion === 3){
           closure.valor()
        }
        else if (opcion === 4){
            flag = false
        }
        else{
            alert("Ingrese una opcion valida ")
        }
       

    }
    else{
        alert("Ingrese una opcion valida ")
    }


}

