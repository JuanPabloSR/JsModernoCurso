const character = {
  name: "Tony Stark",
  codeName: "Ironman",
  group: "avengers",
  live: "False",
  lastMovie: "Infinity War",
  age: 30,
  coords: {
    lat: 34.034,
    lng: -118.7,
  },
  suits: ["Mark I", "Mark V", "Hulkbuster"],
  address: {
    zip: "10880, 90265",
    location: "Malibu, California",
  },
};

console.log(character);
console.log("Name: ", character.name);
console.log("Name: ", character["name"]);
console.log("Age: ", character["age"]);

console.log("Coords: ", character.coords);
console.log("Lat: ", character.coords.lat);

console.log("No. Suits: ", character.suits.length);
console.log("Last Suit: ", character.suits[character.suits.length - 1]);

const x = "live";

console.log("Live", character[x]);

console.log(character.lastMovie);

//More details

delete character.age;
console.log(character.age);

character.married = true;

// character = 123; se pueden cambiar los valores dentro del objeto, pero no se puede modificar en si el objeto

const entriesPairs = Object.entries(character);
console.log(entriesPairs);

console.log(character);

Object.freeze(character); // esta impidiento que modifiquemos el contenido del objeto, lo "congela"
//congela las asignaciones directas, pero no a los objetos que estan dentro del objeto

character.married = false;
character.money = 10000000000000;
console.log(character);

character.address.location = "Colombia Bga";
console.log(character);

const properties = Object.getOwnPropertyNames( character )
const values = Object.values( character )
console.log("🚀 ~ file: objetos-literales.js:61 ~ properties and values", properties, values)
