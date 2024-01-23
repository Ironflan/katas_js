// Ejercicio 13

// Buscador de nombres: Crea una función que reciba por parámetro un array 
// y el valor que desea comprobar que existe dentro de dicho array - 
// comprueba si existe el elemento, 
// en caso que existan nos devuelve un true y la posición de dicho elemento 
// y por la contra un false. 
// Puedes usar este array para probar tu función:

const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];
function finderName(nameFinder, element) {
  if (nameFinder.includes(element)) {
    return `${true}; posicion: ${nameFinder.indexOf(element)}`
    
  } else {
    return false
  }

  }
  console.log(finderName(nameFinder, "Peggy"))

  //! version sin metodo (mas facil la de arriba)

  // function finderName(array, element) {
  //   for (let i = 0; i < array.length; i++) {
  //       console.log(element);
  //       console.log(array[i]);
  //       if (element === array[i]) {
  //           return `${true}, posicion: ${i}`
  //       }
  //   }
  //   return false;
  // }

  // console.log(finderName(nameFinder, "Steve"))