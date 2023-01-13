function greet(name) {
  console.log(arguments);
  console.log("Hi " + name);
  return [2, 4];
  console.log("esto nunca se va retornar, el codigo acaba en el return");
}

const greet2 = function greet(name) {
  console.log("Hi world and " + name);
};

const greetArrow = (name) => {
  console.log("Hi " + name);
};

// greet("Juan");
// greet2("Juan");
// greetArrow("Pablo");

const returnTheGreet = greet("Torito", 33, true); // usando el return nos devolvera el valor indicado

console.log(
  "🚀 ~ file: funciones.js:18 ~ returnTheGreet",
  returnTheGreet[0],
  returnTheGreet[1]
);

function add(a, b) {
  return a + b;
}

// const add2 = (a,b) => {
//     return a + b;
// }

const add2 = (a, b) => a + b;

function getRandom() {
  return Math.random();
}

const getRandom2 = () => Math.random();

console.log(getRandom());
console.log(getRandom2());

console.log(add(10, 5));
console.log(add2(12, 5));
