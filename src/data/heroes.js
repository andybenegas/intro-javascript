
//export default [. Asi NO. No es conveniente realizar la exportación por defecto quitando const heroes.
const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

//Exportación individual.
export const owners = ['DC', 'Marvel'];

//Exportación por defecto.
//export default. Realizarla de esta forma queda más claro.
export default heroes;

// export {
//     heroes as default,
//     owners
// }