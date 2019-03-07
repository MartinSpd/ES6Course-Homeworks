'use strict';

/*
    Homework Assignment #15: The Fetch API

*/

// define events
document.getElementById('fetchButton1').
  addEventListener('click', (event) => {
  event.preventDefault();
  fetchPokeData();
});
document.getElementById('fetchButton1').
  addEventListener('onkeypress', (event) => {
  event.preventDefault();
  fetchPokeData();
});

  /**
   * formats and shows data about pokémon
   * 
   */
   
function showPokeData(pokeData) {
  
  // formats name
  const name = pokeData.name.charAt(0).toUpperCase()
    + pokeData.name.slice(1);
    
  // format types
  let types = [];
    for (let i = 0; i < pokeData.types.length; i++) {
      types.push(pokeData.types[i].type.name);
    }
  types = types.join(' and ');
    
  // format abilities
  let abilities = [];
    for (let i = 0; i < pokeData.abilities.length; i++) {
      abilities.push(pokeData.abilities[i].ability.name
        .charAt(0).toUpperCase() + pokeData.abilities[i]
        .ability.name.slice(1));
    }
  abilities.length>0 ? abilities.length : abilities.push('none');
  
  // format stats
  let stats = [];
    for (let i = 0; i < pokeData.stats.length; i++) {
      
      stats.push('<li>'+pokeData.stats[i].stat.name.charAt(0)
        .toUpperCase() + pokeData.stats[i].stat.name.slice(1)
        +': '+ pokeData.stats[i].base_stat + ' Exp;</li>');
    }
  
  // write out data about pokémon
  const description = `
    <UL>
    <li>Pokémon <strong>${name}</strong> is a ${types} 
    pokémon, ${pokeData.height} cm tall and weights 
    ${pokeData.weight} g.
    </li><li>
    ${name}'s basic experience is 
    ${pokeData.base_experience} HP, helds 
    ${pokeData.held_items.length>0 ? pokeData.held_items.
    length : 'no '} item(s) and masters 
    ${pokeData.moves.length} moves.
    </li><li>
    ${name} has following abilities: 
    ${abilities.join(', ')}.
    </li><li>
    ${name} has following starting stats: <ul>
    ${stats.join('')}</ul></li></ul>`;
    
    // add innerHTML
  document.getElementById('fetchDiv').innerHTML = 
    '<button id="fetchButton2">refresh</button><br /><br />'
    + description;
    
    // define events
  document.getElementById('fetchButton2').
    addEventListener('click', (event) => {
    event.preventDefault();
    fetchPokeData();
  });
  document.getElementById('fetchButton2').
    addEventListener('onkeypress', (event) => {
    event.preventDefault();
    fetchPokeData();
  });
}


  /**
   * fetch data about pokémon from external API
   * 
   */
   
function fetchPokeData() {
  
  // depending on random decides multiplication
  // ammount
  let multiply = Math.random();
    if (multiply < 0.3) { multiply = 10; }
      else if (multiply >= 0.3 && multiply <= 0.6) 
      { multiply = 100; } else { multiply = 1000; }
      
  let number = Math.round(Math.random()*multiply);
    if (number === 0) { number = 1; }
    if (number > 807) { number = 807; }

  fetch(`https://pokeapi.co/api/v2/pokemon/${number}/`)
    .then((data) => data.json() )
    .then(fetchedData => showPokeData(fetchedData) )
    .catch(err => alert('sorry, we couldn\'t access '
      +'the API') );
}

