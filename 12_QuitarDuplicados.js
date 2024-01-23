// Ejercicio 12

// Valores únicos: Crea una función que reciba por parámetro un array
//  compruebe si existen elementos duplicados 
//  en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:

// pista (cuando eliminamos algo de un array, su longitud se verá afectada)

const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];
function removeDuplicates(duplicates) {

  for (let i = 0; i < duplicates.length; i++) {
    const comida1 = duplicates[i];

   for (let j = i + 1; j  < duplicates.length; j ++) {
    const comida2 = duplicates[j];
    if (comida1 === comida2) {
      duplicates.splice(j, 1);
      j--;
      
    }
   } 
  }
console.log(duplicates);
}
removeDuplicates(duplicates);

// Explicación Ejercicio 12

// Para este ejercicio hemos optado por utilizar dos bucles, uno dentro de otro, pero ambos recorren el mismo array, hemos pensado esto para que cuando estemos en el bucle1, apuntemos a una palabra y la guardemos en una variable, entonces es cuando ocurre el bucle2 y pasa por el resto de palabras, comparando la que hemos seleccionado en el bucle1 con todas las demás.

// Continuación Ejercicio 12

// Una vez entendido eso ya sólo nos queda eliminar los elementos que hayamos comprobado que están duplicados, para ello utilizamos el método splice pasándole la posición que queremos eliminar, en este caso la encontrada duplicada, y la eliminamos.

// A continuación tenemos que tener cuidado de no saltarnos la siguiente, así que "denegamos" el paso hacia delante que da el bucle de manera automática puesto que si eliminamos "mundo" la posición 1 ahora será ocupada por otro valor, y por lo tanto tenemos que volver a comprobar la posición 1, no podemos avanzar al la siguiente puesto que nos estaríamos saltando 1