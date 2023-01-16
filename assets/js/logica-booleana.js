const returnTrue = () => {
  console.log("Return True");
  return true;
};

const returnFalse = () => {
  console.log("Return false");
  return false;
};

console.warn("not or the negation");
console.log(true); //* true
console.log(!true); //*! false
console.log(!!false); //? se puede realizar la negacion en cualquier booleano

// *? el operador AND es &&  y nos sirve para evaluar 2 opciones

console.warn("AND"); //* todo debe ser VERDADERO para que retorne el ultimo valor
console.log(true && true); //* true
console.log(true && false); //*! false
console.log(true && !false); //* * True

console.log("-------------");
console.log(returnFalse() && returnTrue()); // *! Falso
console.log(returnTrue() && returnFalse()); // *! Falso

console.log("-------&&-------");
returnFalse() && returnTrue;

console.log(true && true && true && false);

console.log("OR");

console.warn("OR"); // * para que || regrese TRUE al menos una condicion debe regresar verdadera

console.log(true || false); //* Verdadero
console.log(false || true); //* Verdadero
console.log(false || false); //* Verdadero

console.log(true || true || true || false);

console.warn("Asignacione");

const iAmUndefined = undefined;
const iAmNull = null;
const iAmFalse = false;

const a1 = true && "Hola Mundo" && 100; //* en este caso nos retorna el ultimo valor
const a2 = false && "Hola Mundo" && 100; //* en este caso por ser falso, retorna falso de una
const a3 = "Hola" && "Mundo" && iAmFalse && true; //*! en este caso al todas no ser verdaderas retorna falso 
const a4 = iAmFalse || 'Ya no soy falso'; //* en este caso retorna la ultima "ya no soy verdadero"

console.log({a1})
console.log({a2})
console.log({a3})
console.log({a4})

