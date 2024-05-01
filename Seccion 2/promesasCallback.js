con



let manejarAsincronia = (callback,promesa)=>{
    promesa.then(()=>{
        callback("hola")
    })
    .catch(error=>{
        alert("Error")
    })
   
}

let miPromesa = new Promise((resolve,reject)=>{
    setTimeout(()=>{
    resolve()
    },2000)
    if(callback.toString().length > 2){
        reject(new Error("Datos no existen"))
    }
    
})

manejarAsincronia(mensaje => {alert(mensaje)},miPromesa)

//¿Qué sucede si cambias el tiempo de resolución de la promesa a 5 segundos o a 1 segundo? 
// Cambia el lapso de tiempo en el que se ejecuta 
//¿Cómo se comporta la función si la promesa es rechazada en lugar de resuelta?
//Ese genera un mensaje de error y evita el tiempo de espera 
// ¿Puedes modificar la función para que el callback maneje diferentes tipos de información dependiendo del resultado de la promesa?
// Si

