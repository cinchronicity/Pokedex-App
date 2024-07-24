//obj is in the curly braces, and the key value pairs are separated by commas, the keys are strings  (name, height, type), and the values (which are the preoperties of the pokemon) can be any data type (string, number, boolean, array, object, function)

let pokemonRepository = (function () {
  //IIFE
  let pokemonList = [
    { name: "Bulbasaur", height: 0.7, type: ["grass", "poison"] },
    { name: "Ivysaur", height: 1, type: ["grass", "poison"] },
    { name: "Venusaur", height: 2, type: ["grass", "poison"] },
  ]; //array of objects
  function add(pokemon) {
    //function to add a new pokemon to the pokemonList array
    if (
      typeof pokemon === "object" &&
      "name" in pokemon && 
      "height" in pokemon &&
      "type" in pokemon
    ) {
      //check if the object has the required keys
      pokemonList.push(pokemon); //add the pokemon to the pokemonList array
    } else {
      console.log("pokemon is not correct"); //log an error message to the console
    }
  }
  function getAll() {
    //function to return the pokemonList array
    return pokemonList; //return the array
  }
  return {
    //new object has getAll and add-return an object with two keys, add and getAll
    add: add, //add key has a value of the add function
    getAll: getAll, //getAll key has a value of the getAll function
  }; //end of return
})(); //end of IIFE

pokemonRepository.getAll().forEach(function (pokemon) {
  // use getAll function to return the pokemonList array and use forEach method to iterate over the array
  document.write("<p>" + pokemon.name + " (height: " + pokemon.height + ")");
  if (pokemon.height > 1.0) {
    document.write("  - Wow, that’s big!");
  }
  document.write("</p>"); // It's also good practice to close your paragraph tags.
});

function filterName(name) {
  return pokemonRepository
    .getAll()
    .filter((pokemon) => pokemon.name.toLowerCase() === name.toLowerCase()); //filter the pokemonList array to return the pokemon with the name that matches the name argument, the comparison is case-insensitive
}
