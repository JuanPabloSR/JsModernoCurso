/**
 *? Weekdays we open at 11am (eleven o'Clock)
 *
 * *but on weekends we are open at 9am (nice o'clock)
 *
 */

// * Enter a website, to check if it's open today

const day = 0; //? domingo
const actualTime = 11;

let hourOpening;
let message;

// if (day === 0 || day === 6) {
// if ( [0,6].includes(day) ) {
//   console.log("Weekends");
//   hourOpening = 9;
// } else {
//   console.log("weekdays");
//   hourOpening = 11;
// }

hourOpening = [0, 6].includes(day) ? 9 : 11;

message =
  actualTime >= hourOpening
    ? "This is open"
    : `This is closed, today open at: ${hourOpening}`;

// if (actualTime >= hourOpening) {
//   message = "This is open";
// } else {
//   message = `This is closed, today open at: ${hourOpening}`;
// }

console.log({ hourOpening, message });
