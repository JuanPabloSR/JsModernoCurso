let videoGames = ["Mario bros", "contra", "Sonic", "1991", "Zelda"];
console.log("largo:", videoGames.length);

let first = videoGames[0];
console.log("🚀 ~ file: arreglos2.js:5 ~ first", first);
let last = videoGames[videoGames.length - 1];
console.log("🚀 ~ file: arreglos2.js:7 ~ last", last);

console.log({ first, last });

videoGames.forEach((elemento, indice, arr) => {
  console.log({ elemento, indice, arr });
});

let newPosition = videoGames.push("F-Zero");
console.log({ newPosition, videoGames });

videoGames.unshift("snowBros");
console.log({ videoGames });

let deleteGame = videoGames.pop();
console.log({ deleteGame, videoGames });

let positionDelete = 4;

let gamesDelete = videoGames.splice(positionDelete, 2);
console.log({ gamesDelete, videoGames });

let indexSonic = videoGames.indexOf("Mario bros");
console.log("🚀 ~ file: arreglos2.js:30 ~ indexSonic", indexSonic);
