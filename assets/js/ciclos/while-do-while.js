const cars = ["Ford", "mazda", "honda", "toyota"];
 
let i = 0;

// while (i < cars.length) {    // si i es menor que 3, se imprime i y se aumenta en 1
//     console.log( cars[i] );
//     i++;
// }

// undefined
// null
// false 
// estos valores son falsos y no se va ejecutar, ya que el while es solo con true

//para ejecutar oh validar solo una parte hacemos uso del break oh continue;
console.warn('While');
while( cars[i] ) {
    if ( i === 2) {
        i++;
        //break
        continue;
    }
    console.log( cars[i] );
    i++
}

console.warn('Do While');
let j  = 0;

do {
    console.log( cars[j] );
    j++;
} while( cars[j] );