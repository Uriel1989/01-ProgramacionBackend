// Definimos una función llamada 'suma' que toma dos parámetros: 'a' y 'b'.
function suma(a, b) {
    // Imprime el resultado de la suma de 'a' y 'b' en la consola.
    console.log("El resultado es ", a + b);
}

// Llamamos a la función 'suma' con diferentes pares de argumentos.
suma(10, 5); // Imprime: El resultado es 15
suma(120, 5); // Imprime: El resultado es 125
suma(4, 5); // Imprime: El resultado es 9

// La siguiente línea está comentada y no se ejecutará.
// suma="es la adición de 2 valores" // Esto sobrescribiría la función 'suma', lo cual no es recomendable.

// Las siguientes líneas están comentadas. Si se descomentan, llamarán a la función 'suma' con nuevos argumentos.
// suma(14, 5);
// suma(24, 5);

// Se define una variable 'suma2' que almacena una función anónima que toma dos parámetros.
const suma2 = function(a, b) {
    // Imprime la suma de 'a' y 'b'.
    console.log(a + b);
};

// La siguiente línea está comentada y no se ejecutará.
// suma2="otra suma..." // Esto sobrescribiría la función 'suma2', lo cual no es recomendable.

// Llamamos a la función 'suma2' con argumentos.
suma2(10, 10); // Imprime: 20

// Definimos una función de flecha llamada 'sumaFlecha' que toma dos parámetros y retorna su suma.
const sumaFlecha = (a, b) => a + b;

// La siguiente línea está comentada. Si se descomenta, calculará el resultado y lo imprimirá.
// let resultado = sumaFlecha(8, 8);
// console.log(resultado);

// Llamamos a la función 'sumaFlecha' con argumentos y mostramos el resultado en la consola.
console.log(sumaFlecha(8, 8)); // Imprime: 16

// Definimos una función de flecha llamada 'cuadrado' que toma un parámetro y retorna su cuadrado.
const cuadrado = a => a * a;

// Llamamos a la función 'cuadrado' con un argumento y mostramos el resultado en la consola.
console.log(cuadrado(9)); // Imprime: 81

// Definimos una función llamada 'saludo' que no tiene parámetros.
const saludo = () => {
    // La siguiente línea está comentada y no se ejecutará.
    // return "hola...!!!" // Esta línea retornaría un saludo si se descomenta.
}

// Llamamos a la función 'saludo' y mostramos el resultado en la consola.
// Como no hay un valor retornado (la línea está comentada), imprimirá undefined.
console.log(saludo()); // Imprime: undefined



