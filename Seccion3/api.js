const apiButton = document.getElementById('apiButton')
const apiInfo = document.getElementById('apiInfo')
let flag = true 

while(true){
    let tiempo = parseInt(prompt("Ingrese el intervalo de tiempo que deseas esperar en segundos ejempos :1"))
    tiempo*=1000
    
    if(!isNaN(tiempo)){
        
    const callBack = () => {
        setTimeout(()=>{
            fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json() )
            .then(data => {
                console.log(data)
                apiInfo.innerText = "La informacion esta montada en la consola";
              
            })
            .catch(error => alert("Hay un error",error))

        },tiempo)
        
    }

    apiButton.addEventListener('click',callBack)
    flag = false
    if(!flag)break;

    }
    else{
        alert("Ingrese un valor valido")
    }
}

alert("Da click en el boton")





