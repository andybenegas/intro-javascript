
//Arrays en JS.
//Un arreglo es una colección de información que se encuentra dentro de una misma variable.

//ES muy raro encontrarse con algo asi pero es necesario saber por lo menos que existe.
//const arreglo = new Array(100);

const arreglo = [1,2,3,4];
//No es recomendable utilizar el .push porque modifica el objeto/arreglo principal.
//arreglo.push(1); 
//arreglo.push(2);
//arreglo.push(3);
//arreglo.push(4);

//Uitilizo el operador spread (...) para copiar 1 x 1 todos los elementos del arreglo.
let arreglo2 = [...arreglo, 5];
// arreglo2.push(5);

//Operador map. Esa función se ve rara pero es lo que se conoce como callback, una función que se va a ejecutar dentro del método map. Ésta se va a ejecutar por c/u de los elementos que este dentro de arreglo2. El argumento que va a recibir esta función va a ser el nro individual.
const arreglo3 = arreglo2.map(function(numero) {
    return numero * 2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);
