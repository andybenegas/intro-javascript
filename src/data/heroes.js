
//export default [. Asi NO. No es conveniente realizar la exportación por defecto quitando const heroes.
const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC',
        alter_ego:'Bruce Wayne',
        powers:['None']
    },{
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel',
        alter_ego:'Peter Parker',
        powers: ['Spider Sense', 'Spiderweb', 'Wall-Climbing']
    },{
        id: 3,
        name: 'Superman',
        owner: 'DC',
        alter_ego:'Kal-El',
        powers: ['Fly','Super Strong', 'Vision X-Ray']
    },{
        id: 4,
        name: 'Flash',
        owner: 'DC',
        alter_ego: 'Jay Garrick',
        powers: ['Super Speed', 'Quickly Heal', 'Go through solid objects']
    },{
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel',
        alter_ego:'James Howlett',
        powers: ['Regeneration', 'Retractable claws', 'Tuned senses']
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