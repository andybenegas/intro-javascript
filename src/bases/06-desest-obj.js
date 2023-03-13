
//Desestructuración o Asignación Desestructurante.

const persona = {
    nombre: 'Andrés',
    edad: 33,
    clave: 'Negro',
    // rango: 'Soldado'
};

//Asignación desestructurante.
//Lo que estoy diciendo aca es: extrae lo que estoy poniendo entre {} del objeto persona.
// const { nombre, edad, clave } = persona;

//Para no hacer todos estos console.log es que nos sirve la desestructuración. Si queremos extraer del objeto solo lo que nos interesa, ahi entra en juego la asignación desestructurante.

// console.log(nombre);
// console.log(edad);
// console.log(clave);

// const retornaPersona = ( user ) => {
//     const { edad, clave, nombre } = user
//     console.log( edad, clave, nombre );
// }

//Desestructuración directamente en el argumento.
//Si existe la propiedad en el objeto entonces usa esa propiedad. Si no, utiliza el valor por defecto definido en los argumentos,
// const retornaPersona = ( { nombre, edad, rango = 'Capitán' } ) => {
//     console.log( nombre, edad, rango );
// }

const iusContext = ( { clave, nombre, edad, rango = 'Capitán' } ) => {
    // console.log( nombre, edad, rango );
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.214514,
            lng: 12.325262,
        }
    }
}

//Desestructuración anidada de objetos.
const {nombreClave, anios, latlng:{ lat, lng }} = iusContext(persona);
console.log(nombreClave, anios);
console.log(lat, lng);

