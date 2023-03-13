
//Template String.
//Backticks ``.

const nombre = 'Andrés';
const apellido = 'Benegas';

//const nombreCompleto = nombre + ' ' + apellido;
//Esto ${} es código de JS.
const nombreCompleto = `${ nombre } ${ apellido }`;

console.log(nombreCompleto);

function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

//Cualquier valor que no se especifique en JS, cualquier variable que no se inicialice, va a tener el valor de undefined. En el caso de las funciones si no hay un return explícito va a retornan undefined.

console.log(`Este es un saludo: ${ getSaludo(apellido) }`);