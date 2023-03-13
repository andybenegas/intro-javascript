
//Objetos Literales.

//En gral los objetos trabajan con pares de valores.
//La llave nombre, y el valor al que apunta esa llave es 'Tony'.
const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion:{
        ciudad: 'New York',
        zip: 147852937,
        lat: 15.685858,
        lng: 13.54747
    }
};

//Si yo quiero recuperar el nombre Tony, coloco persona.nombre
//console.log(persona.nombre);

//Si se colocan {} estamos creando un nuevo objeto, que tiene una propiedad llamada persona y el valor al que apunta es a mi objeto. Pero en JS desde el ecmascript 6, cuando uds tienen una propiedad en un objeto y esa propiedad tiene el mismo nombre que su valor, se puede obviar ponerlo asi persona:persona.

//Esta es una forma de imprimir en consola que ayuda a tener el nombre de la variable por si tenemos muchas.
//console.log( {persona} );

//console.table(persona);
//console.log(persona);

//Ahora quiero clonar un objeto, quiero crear una persona2.

//const persona2 = persona; //Esta asignación no hay que hacerla jamás.
//console.log(persona2);

//Haciendo una asignación de este tipo, no estamos copiando el valor de la misma, estamos copiando la referencia al espacio en memoria de esta variable persona. Lo podemos comprobar de esta manera.

//persona2.nombre = 'Julián';
//console.log(persona);
//console.log(persona2);

//Esto puede generar un falso positivo. Si muevo el clg arriba del de clg de persona2, obtengo en consola 2 objetos con el nombre Julián y eso demuestra que lo que se copia es la referencia al espacio en memoria.

//Lo que se debe hacer es crear un objeto nuevo, asi apunta a un espacio de memoria nuevo. Esto se hace utilzando el operador spread (...).

const persona2 = { ...persona };
persona2.apellido = 'Agnic';
console.log(persona);
console.log(persona2);