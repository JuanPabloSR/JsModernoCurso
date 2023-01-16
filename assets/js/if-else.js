let a = 5;

if (a >= 10) {
  //undefined, null, una asignacion
  console.log("a es mayor que 10");
} else {
  console.log("a es menor que 10");
}

// console.log('end')

// *el new sirve para crear una nueva instancia, oh nuevos objetos

const today = new Date();
let day = today.getDay();

console.log({ day });

if (day === 1) {
  console.log("Today is Monday");
} else if (day === 2) {
  // if(day === 2){
  //     console.log('It is tuesday')
  // } else {
  //     console.log('It is not monday or tuesday')
  // }
  console.log("Today is Tuesday");
} else if (day === 3) {
  console.log("Today is Wednesday");
} else {
  console.log("It is not Monday or Tuesday or Wednesday");
}

// switch (day) {
//   case 0:
//     day = "1";
//     console.log("Today is monday");
//     break;
//   case 1:
//     day = "2";
//     console.log("Today is Tuesday");
//     break;
//   case 3:
//     day = "4";
//     console.log("Today is wednesday");
//     break;
// }
// console.log({ day });

// *! Imprimir el dia de la semana sin usar If,Else, ElseIf, Switch
day = 6;
// *** con objetos
const daysLetter = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "wednesday",
  4: "thursday",
  5: "friday",
  6: "Satuday",
};

console.log(daysLetter[day] || "Day not defined");

// * * con Arreglos
const daysLetter2 = [
  "Sunday",
  "Monday",
  "Tuesday",
  "wednesday",
  "thursday",
  "friday",
  "Satuday",
];

console.log(daysLetter2[day] || "Day not defined");


// * el = cambia dependiendo de su uso
// *? = es asignacion
// * == es comparacion del resultado y valor interno sin importar el tipo
// * === compara que todo sea completamente igual, el resultado y el tipo, si es string, number, booleano etc
