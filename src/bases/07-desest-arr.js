
//Desestructuración de Arrays.

const personajes = ['Goku', 'Vegeta', 'Trunks'];
//Como los arreglos vienen en posiciones, con la (,) le voy a decir que el primer elemento del arreglo lo ignore. Con (, ,) que el 1er y 2do elemento sean ignorados.  
const [ , , p1 ] = personajes;
console.log( p1 );

//Ejemplo.
const retornaArrays = () => {

    return ['ABC', 345];
}

const [letras, numeros] = retornaArrays();
console.log(letras, numeros);

//Tarea
//1. El 1er valor del arr se llamará nombre.
//2. El 2do valor del arr se llamará setNombre.
const iusState = ( valor ) => {
    return [valor, () => {console.log('Hola Mundo')}];
}

const [nombre, setNombre] = iusState('Goku');

console.log(nombre);
setNombre();