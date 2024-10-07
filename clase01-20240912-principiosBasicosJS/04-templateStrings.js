// Se declara una variable 'texto' y se le asigna el valor "hola".
let texto = "hola";

// Se declara una variable 'texto1' y se le asigna el valor 'hola  asdfsadf'.
let texto1 = 'hola  asdfsadf';

// Imprime los valores de 'texto' y 'texto1' en la consola.
console.log(texto, texto1); // Imprime: hola hola  asdfsadf

// Se declara una variable 'nombre' y se le asigna el valor "Pedro".
let nombre = "Pedro";

// Imprime la concatenación de 'texto' y 'nombre', separados por un espacio.
console.log(texto + " " + nombre); // Imprime: hola Pedro

// Se declara una variable 'texto3' usando template literals (backticks).
let texto3 = `hola...!!!

como están???
me llamo ${nombre}, y soy de Perú

`;

// Imprime el contenido de 'texto3' en la consola. 
// Los template literals permiten incluir saltos de línea y expresiones dentro de `${}`.
console.log(texto3); 
/*
Imprime:
hola...!!!

como están???
me llamo Pedro, y soy de Perú
*/

// Se define una función llamada 'factura' que toma dos parámetros: 'nombre' y 'total'.
const factura = (nombre, total) => {
    // Retorna un string HTML que incluye el nombre y el total utilizando template literals.
    return `Hola ${nombre}.
    Se generó tu factura por un total de $${total}
    
    `;
}

// Llama a la función 'factura' con los argumentos "José" y 32000, e imprime el resultado en la consola.
console.log(factura("José", 32000)); 
/*
Imprime:
Hola José.
Se generó tu factura por un total de $32000
*/