
//Operador condicional ternario.
//Es una manera corta de hacer una decisión.

const activo = true;
// let mensaje = '';

// if (!activo) {
//     mensaje = 'Activo'
// } else {
//     mensaje = 'Inactivo'   
// }
// console.log(mensaje);

// const mensaje = ( activo ) ? 'Activo' : 'Inactivo';
// const mensaje = ( activo ) ? 'Activo' : null;
const mensaje = !activo && 'Activo';

console.log(mensaje);
