// Ejercicio 26

// Usa un bucle para recorrer el products de productos (products) 
// y añade al products goodProducts los que tengan más de 20 ventas (sellCount) 
// y al products badProducts los que tengan menos.

const goodProducts = [];
const badProducts = [];
const products = [
  { name: "Funko Dr. Strange", sellCount: 10 },
  { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
  { name: "Sable laser FX", sellCount: 23 },
  { name: "Varita de Voldemort", sellCount: 6 },
];

for (let i = 0; i < products.length; i++) {
  const product = products[i];

  if (product.sellCount < 20) {
    badProducts.push(product.name)  
  } else {
    goodProducts.push(product.name)
  }
  
}
console.log(goodProducts);
console.log(badProducts);