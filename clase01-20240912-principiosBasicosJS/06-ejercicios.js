// ejemplo 1
// Se declara una variable 'nombre1' y se le asigna el valor 'Diego'.
// let nombre1 = 'Diego'; // Esta línea está comentada y no se ejecutará.

// Se declara una variable 'cantLetras' e inicializa en 0.
// let cantLetras = 0; // Esta línea también está comentada y no se ejecutará.

// Se define una función llamada 'cuentaCaracteres' que toma un parámetro 'palabra'.
/*
const cuentaCaracteres = (palabra) => {
    // Dentro de la función, se declara una variable 'cantLetras' que almacena la longitud de la palabra.
    let cantLetras = palabra.length;
    // La función retorna la cantidad de letras de la palabra.
    return cantLetras;
}

// Se llama a la función 'cuentaCaracteres' pasando 'nombre1' como argumento,
// y se asigna el resultado a la variable 'cantLetras'.
cantLetras = cuentaCaracteres(nombre1);

// Imprime en consola la cantidad de letras de 'nombre1'.
console.log(cantLetras); // Imprime: 5 (la longitud de "Diego")
*/

// ejemplo 2
// Se declara una variable 'numero1' y se le asigna el valor 104.
let numero1 = 104;

// Se define una función llamada 'suma5' que toma un parámetro 'numero'.
const suma5 = (numero) => {
    // Dentro de la función, se declara una variable 'agrega' que almacena el valor 5.
    let agrega = 5;
    // La función retorna la suma del número pasado como argumento y el valor de 'agrega'.
    return numero + agrega; 
}

// Se llama a la función 'suma5' pasando 'numero1' como argumento.
// Sin embargo, el resultado no se almacena ni se imprime.
suma5(numero1); // Llama a la función pero no guarda el resultado

// Imprime en consola el valor de 'numero1', que sigue siendo 104.
console.log(numero1); // Imprime: 104

/*
1-Paso por Valor:
    En JavaScript, los tipos primitivos (como números, cadenas, booleanos, etc.) se pasan por valor. 
    Esto significa que cuando pasas numero1 a la función suma5, se pasa una copia del valor de numero1 
    (que es 104), no la variable en sí.
    Por lo tanto, cualquier cambio que realices dentro de la función suma5 no afectará a numero1.
2-Resultado No Almacenado:
    La función suma5 calcula el resultado (104 + 5 = 109) y lo retorna. 
    Sin embargo, este resultado no se almacena ni se utiliza en ninguna parte del código.
    Si deseas ver el resultado de la suma, 
    deberías almacenar el valor retornado en una variable o imprimirlo directamente:
const resultado = suma5(numero1);
console.log(resultado); // Esto imprimiría 109
*/