let url = 'https://pokeapi.co/api/v2/pokemon/';

const names = ['ditto', 'pikachu', 'charizard'];

for (let i = 0; i < names.length; i++) {
  let newUrl = url + names[i];
  fetchData(newUrl);
}

async function fetchData(newUrl) {
  const res = await fetch(newUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  console.log(data);
  printPokemonAbilities(data);
}

function printPokemonAbilities(data) {
  // grab the abilities form the data object and print it to the screen
  

  // make a new div
  // add the infomation to the div
  // add the div to the body
}