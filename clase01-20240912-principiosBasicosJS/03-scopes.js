// Se declara una variable 'nombre' y se le asigna el valor "Maria".
let nombre = "Maria";

// Se inicia un bloque if que siempre es verdadero (true).
if (true) {
    // Se declara una variable 'apellido' dentro del primer bloque if.
    let apellido = "Perez";
    
    // Se inicia otro bloque if que también es verdadero (true).
    if (true) {
        // Se declara una nueva variable 'apellido' dentro del segundo bloque if.
        let apellido = "Garcia"; // Esta variable 'apellido' oculta la anterior en este ámbito.
        let edad = 42; // Se declara una variable 'edad' dentro de este bloque.
        
        // Imprime el valor de 'apellido' en la consola. 
        // La 'apellido' aquí es "Garcia" porque está en el ámbito del segundo bloque if.
        console.log(apellido); // Imprime: Garcia
    }
    
    // Imprime el valor de 'apellido' en la consola. 
    // La 'apellido' aquí es "Perez" porque estamos fuera del segundo bloque if.
    console.log(apellido); // Imprime: Perez
}

// La siguiente línea está comentada. Si se descomenta, causará un error porque 'apellido' no está definido en este ámbito.
// console.log(apellido); // ReferenceError: apellido is not defined        

