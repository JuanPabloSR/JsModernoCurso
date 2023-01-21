const day = 5; //* Domingo

switch (day) {
  case 0:
    console.log("Sunday");
    break; //? cada condicion necesita su break
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("not is the day"); //* el default se va ejecutar cuando no cumpla ninguna condicion de las mencionadas
}
