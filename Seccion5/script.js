const url = "data.json"

let reservas= []
// Función para generar IDs de reserva
const generadorIDReseva =( ()=>{
    let id = 1
    function generadorId (){
        return id++
    }
    return {
        generadorId
    } 
})()
// Función para ver reservas por nombre
const verReservas=()=>{
    let buscarReservaNombre = prompt("Ingrese el nombre completo del titular de la reserva")
    let validarNombre = buscarReservaNombre.split(" ")
    if(validarNombre.length === 2){
        let filtroReserva = reservas.filter(book => book.huesped === buscarReservaNombre )
        console.log(`Estas son las habitaciones bajo el nombre ${buscarReservaNombre} ${JSON.stringify(filtroReserva)}`) 
        return filtroReserva

    }
    else{
        console.log("Ingrese un nombre valido")
    }
  
}
// Función para modificar una reserva existente
const modifyBook =()=>{
    let reservasAmodificar = verReservas()
    console.log(JSON.stringify(reservasAmodificar))
   let checkInchange = parseInt(prompt("Ingrese la nueva fecha del check in"))
   let checkOutchange = parseInt(prompt("Ingrese la nueva fecha del check out"))
   let numReserva = parseInt(prompt("Ingrese el numero de la reserva"))
   let searchBook =reservas.find(book => book.reserva === numReserva )   
   if(searchBook && !isNaN(checkInchange) && !isNaN(checkOutchange))
   {  
        searchBook.fechaInicio = checkInchange
        searchBook.fechaFin = checkOutchange

   }
   else{
        alert("La reserva no existe en el sistema o no has ingresado los dato completos")
   }


}
// Función para cancelar una reserva
const toCancelBook= (rooms)=>{
   let reservasAcancelar =verReservas()
   console.log(JSON.stringify(reservasAcancelar))
   let reservaAcancelar = parseInt(prompt("Ingrese el numero de la reserva a a cancelar"))
   if(reservas.some(book => reservaAcancelar === book.reserva))
   {    
        let changeBackAvailable = reservasAcancelar.find(book => book.reserva ===reservaAcancelar)
        let newAvailable = rooms.find(room => room.number === changeBackAvailable.room.number)
        newAvailable.availability = true
       reservas = reservas.filter(book => book.reserva !== reservaAcancelar )
       alert("Reserva cancelada")
       return reservas
        

   }
   else{
        alert("La reserva no existe en el sistema")
   }


}
// Función para generar una nueva reserva
const generarReserva = (numeroHabitacion, fechaInicio, fechaFin, huesped,cantidadHuespued,room)=>{
    reservas.push({
        reserva:generadorIDReseva.generadorId(),
        numeroHabitacion,
        fechaInicio,
        fechaFin,
        huesped,
        cantidadHuespued,
        room
    })
}
// Función para validar fechas
const validarFecha = (fechaInicio,fechaFinal )=>{
    fechaInicio = new Date(fechaInicio)
    fechaFinal = new Date(fechaFinal)

    if(fechaFinal > fechaInicio || fechaInicio === fechaFinal){
        return true
    }
    else{
        return false
    }

}
// Función para obtener los datos del API
const getData = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            fetch(url)
            .then((response) => {
                if (!response.ok) {
                  throw new Error("Error al cargar los datos.");
                }
                return response.json();
              })
            .then(data => {
                console.log(data);
                console.log("Habitaciones:", data.rooms);
                console.log("Tipos de Habitaciones:", data.roomTypes);
                resolve(data)
            })
            .catch((error) => {
                console.error(error);
                reject(error); // Rechaza la promesa si hay un error
              });
        },1000)

    })
}
// Función principal
getData().then(({ rooms, roomTypes })=>{
    const main = ()=>{
        let continuarBucle = confirm("¿Desea continuar con el sitema hotelero?")
        if (!continuarBucle){
            return(rooms,roomTypes)
        }
        else{
            const habitacionesDisponibles = []
        alert("Bienvenido al hotel vamos a continuar con una nueva reserva")
        const numP = parseInt(prompt("Ingresa el numero de personas"))
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                if(!isNaN(numP)){
                    let tipo = roomTypes.filter(room => room.capacity >= numP)  
                    console.log(JSON.stringify(tipo))
                    
                    rooms.forEach((element)=>{
                        
                        if(tipo.some(room => room.id === element.roomTypeId && element.availability === true )){
                            habitacionesDisponibles.push(element)
                        }
                    })
                    resolve({habitacionesDisponibles,numP,rooms})
                    return ({habitacionesDisponibles,numP,rooms})
                
                  }
                  else{
                        reject("Ingrese una opcion valida")
                  }
                 
            },1000)
            
        })    
      
      .then(({habitacionesDisponibles,numP,rooms})=>{
        console.log("Habitaciones Disponibles:",habitacionesDisponibles)
        const roomTochoose = parseInt(prompt("Elige la habitacion que deseas reservar"))
        let searchRoom = habitacionesDisponibles.find(room=> room.number === roomTochoose)
        if(searchRoom){
            console.log("Habitacion"+JSON.stringify(searchRoom))
            return ({searchRoom, numP,rooms})
        }
        else{
            alert("Elige una habitacion correcta")
        }
      })
      .then(({searchRoom,numP,rooms})=>{
        let numeroPersonas = numP
        let fechaInicio = prompt("Ingresa la fecha de check in ejemplo :MM/DD/AA")
        let fechaFinal = prompt("Ingresa la check out ejemplo :MM/DD/AA")
        let huespued =  prompt("Ingrese el nombre  y apellido del huespued").toLocaleLowerCase()
        let validarHuespued = huespued.split(" ")
        let fechaValidada = validarFecha(fechaInicio,fechaFinal)
        if(validarHuespued.length === 2 && fechaValidada){
            console.log("nombre correcto")
            let newAvailable = rooms.find(room => room.number === searchRoom.number)
            generarReserva(searchRoom.number,fechaInicio,fechaFinal,huespued,numeroPersonas,newAvailable)
            console.log("lista de reservas" + JSON.stringify(reservas))
            newAvailable.availability = false 
            console.log("Reserva Aprobada" +JSON.stringify(newAvailable))
            return({reservas,rooms})
        }
        else{
            console.log("Ingrese datos validos")
        }
        
      })
      .then(({reservas,rooms})=>{
        let opcion = parseInt(prompt("Elige una opcion \n1 modificar reserva, \n2 eliminar reserva \n3 continuar"))
        if(!isNaN(opcion)){
            switch(opcion){
                case 1: 
                    modifyBook()
                    break
                case 2: 
                reservas = toCancelBook(rooms)
                    break
                case 3:  
                    break      
            }
        }
        else{
            alert("Ingrese una opcion valida")
        }
        return ({reservas,rooms})
        
       
      })
      .then(({reservas,rooms})=>{
            alert("Lista de reservas y habitaciones")
            console.table(rooms)
            console.table(reservas)
            main()
      })
      .catch((error) => {
        console.error("Error al manejar la promesa:", error);
      });
    
    
    }
            
        }
        main()    

        
})
.catch(()=>{
    alert("Lista de habitaciones y reservas")
    console.table(rooms)
    console.table(reservas)
})



