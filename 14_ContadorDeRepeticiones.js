// Ejercicio 14

// Contador de repeticiones: 
// Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma. 
// Puedes usar este array para probar tu función:

const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
];
  function repeatCounter(counterWords) {
    const count = {}
    for (let i = 0; i < counterWords.length; i++) {
        
        if(count[counterWords[i]] >= 1) {
            count[counterWords[i]]++;
        } else {
            count[counterWords[i]] = 1;
        }
        
    }

    console.log(count);
  }

  repeatCounter(counterWords) // { code: 4, repeat: 1, eat: 1, sleep: 2, enjoy: 2, upgrade: 1 }




  // Explicación ejercicio 14

  // En el código anterior podemos ver cómo estamos utilizando los corchetes para acceder a una propiedad de un objeto mediante una variable, algo que ya hemos hecho con anterioridad.
  
  // Si esa propiedad del objeto es mayor o igual que 1, es decir, existe, entonces le sumaremos 1 más, puesto que significará que ya habíamos encontrado una y ahora otra.
  
  // Si no es mayor o igual que 1, la creamos con el valor inicial 1.