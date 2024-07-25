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
      Object.keys(pokemon).includes("name") &&
      Object.keys(pokemon).includes("height") &&
      Object.keys(pokemon).includes("type")
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
  function filterName(name) {
    return pokemonList.filter(
      (pokemon) => pokemon.name.toLowerCase() === name.toLowerCase()
    );
  }
  function addListItem(pokemon) {
    let pokemonDisplay = document.querySelector(".pokemon-list");
    let listItem = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name; //button text is the pokemon name
    button.classList.add("button-class");
    listItem.appendChild(button); //calling listItem to append button to listItem as its child
    pokemonDisplay.appendChild(listItem); //append listItem to container
    button.classList.add("button-class"); //add a class to the button element
    button.addEventListener("click", () => showDetails(pokemon)); //when clicked, showDetails fn called w pokemon as obj.
  }
  function showDetails(pokemon) {
    console.log(pokemon);
  }
  return {
    //new object has getAll and add-return an object with two keys, add and getAll
    add: add, //add key has a value of the add function
    getAll: getAll, //getAll key has a value of the getAll function
    filterName: filterName,
    addListItem: addListItem,
  }; //end of return
})(); //end of IIFE

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon); //call the addListItem function to display the pokemon
});
