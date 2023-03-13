
//Promises.

import { getHeroeById } from "./bases/08-imp-exp";

//Las Promesas se crean con un argumento que es un callback. Este callback a su vez recibe 2 argumentos: resolve y reject
// const promesa = new Promise( (resolve, reject) => {
//     setTimeout( () => {
//         const p1 = getHeroeById(5);
//         resolve( p1 );
//         // reject('No se pudo encontrar el héroe')
//     }, 2000 )
// });

// promesa.then(( heroe ) => {
//     console.log('Héroe', heroe);
// })

// .catch(err => console.warn(err));

const getHeroeByIdAsync = (id) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            const p1 = getHeroeById(id);
            if ( p1 ) {
                resolve( p1 )
            } else {
                reject('No se pudo encontrar el héroe')                
            }
        }, 2000 )
    });
}

//Tip. Si uds tienen el catch que recibe el argumento y dicho argumento es enviado a otra función, entonces pueden dejar solo la referencia a la función que quieren ejecutar cuando suceda ese error.

getHeroeByIdAsync(5)
    .then( console.log )
    .catch( console.warn );