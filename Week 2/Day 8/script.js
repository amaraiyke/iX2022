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
  console.log(data.name);
  console.log(data.order);

  // make a new div
  const div = document.createElement("div");
  
  // add the infomation to the div

  div.innerHTML = (data.name + ":" + " " + data.order);

  document.body.appendChild(div)


  //Code no longer needed but left for reference
  //const div2 = document.createElement("div");
  
  // add the infomation to the div

  //div2.innerHTML = (data.order);

  // add the div to the body
  //document.body.appendChild(div2);

  // add the div to the body
  //;


  // make a new div
  
}