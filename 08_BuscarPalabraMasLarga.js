// Buscar la palabra más larga 
//Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.
// Puedes usar este array para probar tu función:

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(avengers) {
  let longestWord = avengers[0];

  for (let i = 1; i < avengers.length; i++) {
    const element = avengers[i];

    if (element.length > longestWord.length) {
      longestWord = element;
    }
  }

  return longestWord;
}

const longestAvenger = findLongestWord(avengers);

console.log(longestAvenger);

// Para saber cual es la palabra más larga en este caso hemos optado por crear una variable de apoyo donde guardaremos la palabra más larga actual, es como un rey de la pista, sólo cambiará el valor de la variable si el elemento que estemos mirando en x vuelta es más largo que el elemento guardado en la variable.

// En este caso hemos pensado que podríamos empezar teniendo como palabra más larga al principio la primera palabra, y por lo tanto comenzamos el bucle en 1 en vez de en 0 porque no nos hará falta comprobar la 0, ya que es la misma que ya está