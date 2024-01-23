// Ejercicio 23

// Usa un bucle para crear 3 arrays de peliculas filtrados por categorias. 
// Pelicula pequeña, menos de 100 minutos, 
// pelicula mediana, mas de 100 minutos y menos de 200 y 
// pelicula grande, mas de 200 minutos. 
// Imprime cada array en por consola.

const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
];
const shortMovies = [];
const mediumMovies = [];
const longMovies = [];

for (let i = 0; i < movies.length; i++) {

  const movie = movies[i];

  if (movies[i].durationInMinutes < 100) {
    shortMovies.push(movie.name);
  }
   else if (movies[i].durationInMinutes > 200) {
    longMovies.push(movie.name);
  }
  else {
    mediumMovies.push(movie.name);
  }
  
}
console.log("Películas cortas:", shortMovies);
console.log("Películas medianas:", mediumMovies);
console.log("Películas largas:", longMovies);
