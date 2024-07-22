//obj is in the curly braces, and the key value pairs are separated by commas, the keys are strings  (name, height, type), and the values (which are the preoperties of the pokemon) can be any data type (string, number, boolean, array, object, function)
let pokemonList = [
  { name: "Bulbasaur", height: 0.7, type: ["grass", "poison"] },
  { name: "Ivysaur", height: 1, type: ["grass", "poison"] },
  { name: "Venusaur", height: 2, type: ["grass", "poison"] },
];

for (let i = 0; i < pokemonList.length; i++) {
  let pokemon = pokemonList[i];
  document.write("<p>" + pokemon.name + " (height: " + pokemon.height + ")");
  if (pokemon.height > 1.0) {
    document.write("  - Wow, that’s big!");
  }
}
