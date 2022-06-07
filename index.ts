// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

let personas = [
  {
    id: 1,
    nombre: 'Milton',
    edad: 27,
    apellido: 'Guevara',
  },
  {
    id: 2,
    nombre: 'Fredy',
    edad: 32,
    apellido: 'Guevara',
  },
  {
    id: 3,
    nombre: 'Evelyn',
    edad: 30,
    apellido: 'Guevara',
  },
  {
    id: 4,
    nombre: 'Rossy',
    edad: 16,
    apellido: 'Guevara',
  },
  {
    id: 5,
    nombre: 'Glenda',
    edad: 35,
    apellido: 'Guevara',
  },
  {
    id: 6,
    nombre: 'patricia',
    edad: 32,
    apellido: 'Guevara',
  },
];

//for each
console.log('---------- Foreach-----');
personas.forEach((p) => {
  console.log(p.nombre);
});

//map
console.log('---------- map-----');
var newList = personas.map(function (persona) {
  return `${persona.nombre} ${'Guevara'}`;
});
console.log(newList);

//filter
console.log('---------- Filter-----');
var newListFilter = personas.filter(
  (persona) => persona.nombre === 'Rossy' && persona.edad < 18
  );
  let nombrePersona = newListFilter[0].nombre;
  console.log(newListFilter);
  console.log(nombrePersona);
  
  //find
  console.log('---------- Find(Busca un elemento y al econtrar el primero se detiene)-----');
  
 var findPerson = personas.find((persona) => 
  persona.apellido === 'Guevara'
);
console.log('I have Find: ', findPerson);
