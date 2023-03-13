
//Variables y Constantes.
//var NO se debe de usar.

const nombre = 'Andrés';
let apellido = 'Benegas';

let valorDado = 5;
valorDado = 4;

console.log(nombre, apellido, valorDado);

//Este valorDado va a existir solo dentro de este scope. NO pueden haber 2 constantes en el mismo scope que se llamen igual.

if (true) {
    const nombre = 'Peter';
    console.log(nombre);
}

//Con este console.log el valorDado del scope de arriba ya dejo de existir, se elimina la variable, se limpia la memoria. Entonces valorDado ahora vale 4.

console.log(valorDado);