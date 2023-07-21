const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 300,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 530,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 420,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];
//
//Las pizzas que tengan un id impar.//

const pizzasImpares = pizzas.filter((pizza) => {
  return pizza.id % 2 !== 0;
});
console.log(pizzasImpares);

pizzasImpares.forEach((pizza) => {
  console.log(`La ${pizza.nombre} es impar ${pizza.id}`);
});

//¿Hay alguna pizza que valga menos de $600?//

const pizzasMenosDe600 = pizzas.filter((pizza) => {
  return pizza.precio < 600;
});
console.log(pizzasMenosDe600);

pizzasMenosDe600.forEach((pizza) => {
  console.log(`Precio de las pizzas mas economicas  $${pizza.precio} `);
});

// El nombre de cada pizza con su respectivo precio.//

pizzas.forEach((pizza) => {
  console.log(
    `La ${pizza.nombre} tiene un precio de $${pizza.precio} pesos 💸`
  );
});

// (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene una propiedad "ingredientes" cuyo valor es un array con ingredientes.//

pizzas.forEach((pizza) => {
  console.log(`${pizza.nombre} :`);
  if (pizza.nombre) {
    pizza.ingredientes.forEach((ingrediente) => {
      console.log(`-${ingrediente}`);
    });
  } else console.log(`No se encontraron los ingredientes`);
});
