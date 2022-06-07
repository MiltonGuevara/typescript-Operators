// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

let personas = [
  {
    id: 1,
    nombre: 'Milton',
    edad: 27
  },
  {
    id: 2,
    nombre: 'Fredy',
    edad: 32
  },
  {
    id: 3,
    nombre: 'Evelyn',
    edad: 30
  },
  {
    id: 4,
    nombre: 'Rossy',
    edad: 16
  },
  {
    id: 5,
    nombre: 'Glenda',
    edad: 35
  },
];

//for each
console.log('---------- Foreach-----')
personas.forEach( p  => {
  console.log(p.nombre);
}); 

//map
console.log('---------- map-----')
var newList = personas.map( function(persona){
  return  `${persona.nombre} ${'Guevara'}`
});
console.log(newList);

//filter
console.log('---------- Filter-----')
var newListFilter = personas.filter(function(persona){
  return persona.nombre === 'Rossy' && persona.edad <18;
})
console.log(newListFilter);