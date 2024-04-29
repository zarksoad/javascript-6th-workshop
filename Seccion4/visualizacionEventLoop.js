
console.log("Inicio del script");

// Macrotarea: setTimeout
setTimeout(() => {
  console.log("Macrotarea 1 second (setTimeout)");
}, 1000);

setTimeout(() => {
  console.log("Macrotarea 0 seconds (setTimeout)");
}, 0);

// Microtarea: Promesa
Promise.resolve()
  .then(() => {
    setTimeout(() => {
      console.log("Macrotarea (setTimeout) inside Microtarea 1");
      return "from micro 1";
    }, 0);
  })
  .then((message) => {
    console.log("Microtarea 2 (Promesa)");
  });

// Microtarea: Promesa
Promise.resolve()
  .then(() => {
    console.log("Microtarea 3 (Promesa)");
  })
  .then(() => {
    console.log("Microtarea 4 (Promesa)");
  });

console.log("Fin del script");

// ¿Qué tareas se consideran macrotareas y cuáles son microtareas?

// Microtarea 4 (Promesa)
// Microtarea 2 (Promesa)
// Macrotarea 1 segundo (setTimeout)
// Macrotarea 0 segundos (setTimeout)
// Macrotarea (setTimeout) dentro Microtarea 1



// ¿Cómo se relacionan las macrotareas y microtareas con el event loop?

//las macro tareas y las micro tareas se organizan en diferentes colas  en el event loop, y el event loop se encarga de ejecutar estas tareas de segun su tipo de tarea, asegurando que las microtareas se resuelvan antes que  las macrotareas

// ¿Qué sucede cuando una microtarea genera una nueva macrotarea dentro de ella?
// Se agregara en la cola de macro tareas y se ejecutara despues de que las micro tareas se hayan ejecutado, en su orden en la cola de macro tareas


// ¿Cómo se manejan las promesas y los setTimeout en relación con el event loop?

// Las promesas se consideraria micro tareas, y el setTimeour una macro tarea