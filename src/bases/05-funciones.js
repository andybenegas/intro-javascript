
//Funciones en JS.

//Asi se deben crear las funciones, con const. 
const saludar = function(nombre) {
    return `Hola, ${ nombre }`;
}

//También hay otra forma, las funciones flecha o arrow functions. Para transformarla quitamos la palabra function y colocamos => luego de los (argumentos). 
const saludar2 = (nombre) => {
    return `Hola, ${ nombre }`;
}

// Una de las ventajas de las arrow functions es que si solo tenemos 1 return en el cuerpo de la misma, podemos simplificarla aún más. Esta función es mucho más ligera, más fácil de leer y más fácil de mantener.
const saludar3 = (nombre) => `Hola, ${ nombre }`;

//Función flecha sin ningún argumento.
const saludar4 = () => 'Hola Mundo';

// console.log(saludar('Goku'));
console.log(saludar);
console.log(saludar2('Vegeta'));
console.log(saludar3('Goku'));
console.log(saludar4());

// const getUser = () => {
//     return {
//         uid: 'ABC123',
//         username: 'Tu_Papi1502',
//     }
// }

//Vamos a intentar simplificar esta arrow function. Le tenemos que indicar a JS que esas llaves no son el cuerpo de la f sino que lo que quiero es retornar un objeto. Para ello lo que hay que hacer es encerrar todo lo que quiero retornar entre ().

const getUser = () => ({
        uid: 'ABC123',
        username: 'Tu_Papi1502',
});

const user = getUser();
console.log(user);

//Tarea

// function getUsuarioActivo(nombre) {
//     return {
//         uid: 'ABC567',
//         username: nombre
//     }
// };

// const usuarioActivo = getUsuarioActivo('Andrés');
// console.log(usuarioActivo);

//Tarea
//1. Transformen a una arrow function.
//2. Tiene que retornar un objeto implícito.
//3. Pruebas.

const getUserActivo = (nombre) => ({
        uid: 'ABC567',
        username: nombre
});

console.log(getUserActivo('Fernando'));