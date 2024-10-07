// Imprime el número 100 y su tipo de dato
console.log(100, typeof 100); // Imprime: 100 'number'

// Imprime el BigInt 100n y su tipo de dato
console.log(100n, typeof 100n); // Imprime: 100n 'bigint'

// Imprime la cadena "100" y su tipo de dato
console.log("100", typeof "100"); // Imprime: '100' 'string'

// Imprime el valor booleano false y su tipo de dato
console.log(false, typeof false); // Imprime: false 'boolean'

// Imprime el valor undefined y su tipo de dato
console.log(undefined, typeof undefined); // Imprime: undefined 'undefined'

// Imprime un array y su tipo de dato (notar que el tipo de un array es 'object')
console.log([100, 200, 300, "hola"], typeof [100, 200, 300, "hola"]); // Imprime: [100, 200, 300, "hola"] 'object'

// Imprime un objeto y su tipo de dato (el tipo de un objeto también es 'object')
console.log({ nombre: "Julian" }, typeof { nombre: "Julian" }); // Imprime: { nombre: 'Julian' } 'object'

// Creamos un objeto 'user' con una propiedad 'name'
let user = { name: 'John' };

// Creamos una referencia al mismo objeto en la variable 'admin'
let admin = user;

// Cambiamos la propiedad 'name' del objeto referenciado por 'admin'
admin.name = 'Pete'; // Cambiado por la referencia "admin"

// Imprimimos la propiedad 'name' del objeto referenciado por 'user'
// Como ambas variables apuntan al mismo objeto, se refleja el cambio
console.log(user.name); // Imprime: 'Pete'

// Ejemplo de uso de Number() y String() (aunque no se utiliza en este contexto)
console.log(Array.isArray("Juan")); // Verifica si "Juan" es un array (imprimirá false)
console.log(Array.isArray([1, 2, 3, 4])); // Verifica si [1, 2, 3, 4] es un array (imprimirá true)

// Definimos un array llamado 'heroes' que contiene objetos con información sobre superhéroes
let heroes = [
    {
        id: 1,
        name: 'Spider-Man',
        alias: 'Peter Parker',
        team: 'Avengers',
        publisher: 'Marvel',
    },
    {
        id: 2,
        name: 'Superman',
        alias: 'Clark Kent',
        team: 'Justice League',
        publisher: 'DC',
    },
    {
        id: 3,
        name: 'Iron Man',
        alias: 'Tony Stark',
        team: 'Avengers',
        publisher: 'Marvel',
    },
    {
        id: 4,
        name: 'Wonder Woman',
        alias: 'Diana Prince',
        team: 'Justice League',
        publisher: 'DC',
    },
    {
        id: 5,
        name: 'Black Widow',
        alias: 'Natasha Romanoff',
        team: 'Avengers',
        publisher: 'Marvel',
    },
    {
        id: 6,
        name: 'Batman',
        alias: 'Bruce Wayne',
        team: 'Justice League',
        publisher: 'DC',
    },
    {
        id: 7,
        name: 'Aquaman',
        alias: 'Arthur Curry',
        team: 'Justice League',
        publisher: 'DC',
    },
    {
        id: 8,
        name: 'Captain America',
        alias: 'Steve Rogers',
        team: 'Avengers',
        publisher: 'Marvel',
    },
    {
        id: 9,
        name: 'Flash',
        alias: 'Barry Allen',
        team: 'Justice League',
        publisher: 'DC',
    },
    {
        id: 10,
        name: 'Black Panther',
        alias:'TChalla',
        team:'Avengers',
        publisher:'Marvel'
    },
    {
      id : 11,
      name : "Green Lantern",
      alias : "Hal Jordan",
      team : "Justice League",
      publisher : "DC"
    },
    {
      id : 12,
      name : "Thor",
      alias : "Thor Odinson",
      team : "Avengers",
      publisher : "Marvel"
    },
    {
      id : 13,
      name : "Batwoman",
      alias : "Kate Kane",
      team : "Bat Family",
      publisher : "DC"
    },
    {
      id : 14,
      name : "Hulk",
      alias : "Bruce Banner",
      team : "Avengers",
      publisher : "Marvel"
    },
    {
      id : 15,
      name : "Zatanna",
      alias : "Zatanna Zatara",
      team : "Justice League Dark",
      publisher : "DC"
    },
    {
      id : 16,
      name : "Doctor Strange",
      alias : "Stephen Strange",
      team : "Defenders",
      publisher : "Marvel"
    },
    {
      id : 17,
      name : "Green Arrow",
      alias : "Oliver Queen",
      team : "Justice League",
      publisher : "DC"
    },
    {
      id : 18,
      name : "Scarlet Witch",
      alias : "Wanda Maximoff",
      team : "Avengers",
      publisher : "Marvel"
    },
    {
      id : 19,
      name : "Martian Manhunter",
      alias :"Jonn Jonzz",
      team :"Justice League",
      publisher :"DC"
    },
     {
       id :20,
       name :"Deadpool",
       alias :"Wade Wilson",
       team :"None",
       publisher :"Marvel"
     }
];

// Definimos una variable llamada nombre y le asignamos el valor "Pedro"
let nombre = "Pedro";

// Llamamos al método toLocaleUpperCase() sobre la cadena nombre,
// aunque no se almacena el resultado en ninguna variable (no tiene efecto aquí)
nombre.toLocaleUpperCase();

// Usamos forEach para iterar sobre el array heroes e imprimir el nombre de cada héroe
heroes.forEach(h => console.log(h.name)); // Imprime los nombres de todos los héroes en el array