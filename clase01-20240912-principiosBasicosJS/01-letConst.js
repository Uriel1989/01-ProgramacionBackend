// console.log(nombre) // Esta línea está comentada, por lo que no se ejecutará.

// Se declara una variable 'nombre' y se le asigna el valor "Juan".
let nombre = "Juan";

// La siguiente línea está comentada, pero si se descomenta, causaría un error porque 'nombre' ya está declarado.
// let nombre="Juan"

// Imprime el valor de la variable 'nombre' en la consola.
console.log(nombre); // Imprime: Juan

// Intenta imprimir el valor de 'domicilio', pero como no está definido, causará un error.
console.log(domicilio); // ReferenceError: domicilio is not defined

// Se inicia un bloque if que siempre es verdadero (true).
if (true) {
    // Se declara una variable 'apellido' dentro del bloque if.
    let apellido = "Juarez";
    // Imprime el valor de 'apellido' en la consola.
    console.log(apellido); // Imprime: Juarez
}

// La siguiente línea está comentada. Si se descomenta, causará un error porque 'apellido' no está definido fuera del bloque if.
// console.log(apellido); // ReferenceError: apellido is not defined

// Definimos una función f1 que imprime un mensaje y llama a f2.
const f1 = () => {
    console.log("f1..."); // Imprime: f1...
    f2(); // Llama a la función f2
}

// Definimos una función f2 que imprime un mensaje y llama a f3.
const f2 = () => {
    console.log("f2..."); // Imprime: f2...
    f3(); // Llama a la función f3
}

// Definimos una función f3 que imprime un mensaje y trata de imprimir 'apellido'.
const f3 = () => {
    console.log("f3..."); // Imprime: f3...
    console.log(apellido); // Intentará imprimir 'apellido', pero causará un error porque no está definido aquí.
}

// La siguiente línea está comentada. Si se descomenta, llamará a la función f1 y ejecutará la cadena de funciones.
// f1(); 

// Se declara una constante 'codigo' y se le asigna el valor "ABC123".
const codigo = "ABC123";
console.log(codigo); // Imprime: ABC123

// La siguiente línea está comentada. Si se descomenta, causará un error porque no se puede reasignar una constante.
// codigo = 300; // TypeError: Assignment to constant variable.

const numeros = [1, 2, 3, 4, 5]; // Se declara una constante 'numeros' como un array.
console.log(numeros); // Imprime: [1, 2, 3, 4, 5]

// La siguiente línea está comentada. Si se descomenta, causará un error porque no se puede reasignar una constante.
// numeros = [3, 4, 5]; // TypeError: Assignment to constant variable.

// Agrega el número 6 al final del array 'numeros'.
numeros.push(6);
// Agrega el número 7 al final del array 'numeros'.
numeros.push(7);
// Agrega el número 9 al final del array 'numeros'.
numeros.push(9);
console.log(numeros); // Imprime: [1, 2, 3, 4, 5, 6, 7, 9]

// Cambia el primer elemento del array 'numeros' a "Juan".
numeros[0] = "Juan";
console.log(numeros); // Imprime: ["Juan", 2, 3, 4, 5, 6, 7, 9]

// Declara una variable 'edad' y le asigna el valor 34.
var edad = 34;
// Vuelve a declarar la misma variable 'edad' y le asigna el valor 35. Esto es posible con var.
var edad = 35;
// Vuelve a declarar la misma variable 'edad' y le asigna el valor 90. Esto también es posible con var.
var edad = 90;
console.log(edad); // Imprime: 90

// Declara una variable 'domicilio' y le asigna un valor.
var domicilio = "calle 8d8d8d";