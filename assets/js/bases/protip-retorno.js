// function createPerson(name, lastName) {
//   return {
//     name: name,
//     lastName: lastName,
//   };
// }

//esto es lo mismo que la funcion de arriba

const createPerson = (name, lastName) => ({ name, lastName }); //si el objeto que vamos asignar tiene el mismo nombre lo podemos dejar asi sin problema

const person = createPerson("Juan", "Sanchez");
console.log(person);

function printArguments() {
  console.log(arguments);
}

const printArguments2 = (age, ...args) => {
  //con los ... nos crea un array para imprimir multiples argumentos en una funcion flecha
  // console.log( {age, args} );
  return args;
};

const [greet, marred, life, array] = printArguments2(
  23,
  "Hi",
  true,
  false,
  [1, 2]
);
console.log({ greet, marred, life, array });

const { lastName: newLastName } = createPerson("Juan", "Rey");
console.log({ newLastName });

const tony = {
  name: "Tony Stark",
  codeName: "Ironman",
  group: "avengers",
  live: false,
  age: 40,
  suits: ["Mark I", "Mark V", "Hulkbuster"],
};

// const printPropertys = ( person ) => {
//     console.log( 'name', person.name );
//     console.log( 'codeName', person.codeName );
//     console.log( 'group', person.group );
//     console.log( 'live', person.live );
//     console.log( 'age', person.age );
//     console.log( 'suits', person.suits );
// }

const printPropertys = ( {name, codeName, live, age=23, suits} ) => {
    console.log({name});
    console.log({codeName});
    console.log({live});
    console.log({age});
    console.log({suits});
}

printPropertys (tony)