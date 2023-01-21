let a = 10,
  b = a;

a = 30;
console.log({ a, b });

let juan = { name: "Juanito" };
let pablo = { ...juan }; // spread operator
pablo.name = "pablito";

console.log({ juan, pablo });

const changeName = ({ ...person }) => {
  person.name = "Steve";
  return person;
};

let parker = { name: "Parker" };
let steve = changeName(parker);

console.log({ parker, steve });

//Arreglos

const fruits = ["apple", "pear", "pineapple"];


console.time('spread')
const otherFruits2 = [...fruits]  //corta el arreglo
console.timeEnd('spread')


console.time('slice')
const otherFruits = fruits.slice();  //corta el arreglo
console.timeEnd('slice')


otherFruits.push("Mango");

console.table({ fruits, otherFruits });
