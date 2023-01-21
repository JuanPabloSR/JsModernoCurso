const theLargest = (a, b) => (a > b ? a : b);

const hasMembership = (member) => (member ? "2 dollars" : "10 dollars");

console.log(theLargest(15, 10));
console.log(hasMembership(false));

const friend = false;
const friendsArr = [
  "Toro",
  "Sebas",
  "Picon",
  "Sergio",
  friend ? "Thor" : "Loki",
  (() => "Nick Fury")(),
];

console.log(friendsArr);

const grade = 95;
const degrees =
  grade >= 95
    ? "A+"
    : grade >= 90
    ? "A"
    : grade >= 85
    ? "B+"
    : grade >= 80
    ? "B"
    : "F";

console.log( { grade, degrees } )