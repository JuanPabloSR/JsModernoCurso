const heroes = ["Batman", "Superman", "wonder Woman", "Aquaman"];

console.warn("For Traditional");

for (let i = 0; i < heroes.length; i++) {
  console.log(heroes[i]);
}

console.warn("For In");
for (let i in heroes) {
  console.log(heroes[i]);
}

console.warn("For Of");
for (let heroe of heroes) { // extrae el valor que se encuentra dentro del arreglo
  console.log(heroe);
}
