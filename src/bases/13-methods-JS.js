import heroes from './data/heroes';

// Method find().
// Como su nombre lo indica nos permite buscar un elemento que cumpla con nuestro criterio de búsqueda.

/* const methodFind = (
    heroes.find(hero => hero.id == 3)
    // heroes.find(hero => hero.name == 'Flash')
    // heroes.find(hero => hero.powers == 'None')
)

console.log(methodFind); */

//Method some().
//Este método nos va a devolver true o flase si existe o no lo que estamos buscando.

/* const methodSome = heroes.some(hero => hero.id == 6);

console.log(methodSome); */

//Method includes().
//Este método nos permite saber si existe dentro de un array cierta palabra. Se puede combinar con el some().

/* const methodIncludes = heroes.some(hero => hero.powers.includes('Spiderweb'));

console.log(methodIncludes); */

//Method every().
//Este método es lo contrario al método some. Comprueba si el requisito se cumple en todos los arreglos.

/* const methodEvery = heroes.every(hero => hero.owner.includes('DC'));

console.log(methodEvery); */

//Method map().
//Este método es el más habitual y más usado en React. Es como un método for pero de forma más declarativa.

/* const methodMap = heroes.map(hero => hero.powers);

console.log(methodMap); */

//Method filter().
//Este método, como su nombre lo indica, se utiliza para filtrar un array de a acuerdo con la condición de filtrado.

/* const methodFilter = heroes.filter(hero => hero?.powers);

console.log(methodFilter); */

//Method reduce().
//Este método, como su nombre lo indica, se utiliza para filtrar un array de a acuerdo con la condición de filtrado.

/* const methodReduce = heroes.reduce((allPowers, hero) => {
    return [...allPowers, ...hero.powers];
}, []);

console.log(methodReduce); */

//Operador Set: Es una estructura de datos que no tiene elementos repetidos.

const methodReduceWithSet = heroes.reduce((allPowers, hero) => {
    return Array.from(new Set([...allPowers, ...hero.powers]))
}, []);

console.log(methodReduceWithSet);