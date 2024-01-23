// Ejercicio 22

// Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas. 
// Recuerda no usar frutas duplicadas. 
// Finalmente, imprime el array resultante.

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

for (let i = 0; i < foodSchedule.length; i++) {

  const food = foodSchedule[i];

  if (foodSchedule[i].isVegan === false) {

    //! estoy comprobando antes de ejecutar, si hay alguna fruta disponible
    if (fruits.length > 0) {
    food.name = fruits.shift();
    food.isVegan = true;
  } else console.log("¡No hay más frutas disponibles!");
}
}
console.log(foodSchedule);


//! otra solucion
// for (let i = 0; i < foodSchedule.length; i++) {
    
//   if (foodSchedule[i].isVegan === false) {
//       foodSchedule[i].name = fruits.splice(0, 1)[0];
//       foodSchedule.isVegan = true;
//   }
  
// }

// console.log(foodSchedule);

// En el ejercicio anterior nos aprovechamos del método splice, que nos devuelve un array de los elementos eliminados del array frutas, en este caso estamos cogiendo desde la primera posición siempre y la eliminamos del array fruits para no volver a usarlo más.

// Al extraerlo splice nos devuelve un array con una única posición, por eso el [0] del final.