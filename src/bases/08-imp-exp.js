//Codeando el import. 
// import { heroes } from './data/heroes';

//Con el snippet.
// import { heroes } from './data/heroes';

//Import por default, import individual (va entre {}).
// import heroes, { owners } from '../data/heroes';

import heroes from '../data/heroes';

//Hacer la referencia a lo que quiero (Autoimportación).
// heroes + Tab

// console.log(owners);

//.find() El método .find() recibe una función como argumento que usualmente se conoce como callback. Este se va a ejecutar con un héroe, es decir, el .find() va a barrer cada uno de los elementos internamente. Por cada iteración vamos a extraer el héroe.
// const getHeroeById = (id) => {
//     return heroes.find( ( heroe ) => {
//         if (heroe.id === id ) {
//             return true;
//         }else {
//             return false;
//         }
//     });
// }

//Vamos a optimizar y simplificar este código. Los () del heroe se pueden o no colocar. Es buena práctica ponerlos para que nos quede bien claro que es el argumento a la función.
// const getHeroeById = (id) => {
//     return heroes.find( (heroe) => heroe.id === id );
// }

//Podemos simplificar aún mas porque tenemos un único return.
export const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id );
// console.log( getHeroeById(4) );

//Ejemplo .filter().
export const getHeroesByOwner = (owner) => heroes.filter( (heroe) => heroe.owner === owner );
// console.log( getHeroesByOwner('Marvel') );