//obj is in the curly braces, and the key value pairs are separated by commas, the keys are strings  (name, height, type), and the values (which are the preoperties of the pokemon) can be any data type (string, number, boolean, array, object, function)

let pokemonRepository = (function () {
  //IIFE
  let pokemonList = []; // empty array of objects
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150"; //url to fetch the pokemon data
  function add(pokemon) {
    //function to add a new pokemon to the pokemonList array
    if (
      typeof pokemon === "object" &&
      Object.keys(pokemon).includes("name") //&&
      // Object.keys(pokemon).includes("height") &&
      // Object.keys(pokemon).includes("type")
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
    addListener(button, pokemon); //call the addListener function with the button and pokemon as arguments

  }
  function loadList() {
    //function to fetch the pokemon data
    return fetch(apiUrl)
      .then(function (response) {
        //fetch data and get the promise
        return response.json(); //return the response as json
      })
      .then(function (json) {
        //then call the json function
        json.results.forEach(function (item) {
          //run forEach on the results array in the json object -
          let pokemon = {
            //create a pokemon object with the name and detailsUrl properties
            name: item.name,
            detailsUrl: item.url,
          };
          add(pokemon); //call the add function with the pokemon object as an argument
          console.log(pokemon); //log all the pokemon objects to the console
        });
      })
      .catch(function (e) {
        //catch any errors and log them to the console
        console.error(e); //log the error to the console
      });
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        // Now we add the details to the item
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types; // modify typoes w a for loop to iterate thru the object and push the type u want into an empty array of types to the userrs 
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  // function showDetails(pokemon) { 
  //   loadDetails(pokemon).then(function () {
  //     console.log(pokemon);
  //   });
  // }
  function showDetails(item) {  //uses the pokemon repo to log the details of the pokemon to the console 
    pokemonRepository.loadDetails(item).then(function () {  //loadDetails fn called w item as an argument
      console.log(item);
    });
  }

  function addListener(button, pokemon) {
    //function to add an event listener to the button
    button.addEventListener("click", () => showDetails(pokemon)); //when clicked, showDetails fn called w pokemon as obj.
  }
  return {
    //new object has getAll and add-return an object with two keys, add and getAll
    add: add, //add key has a value of the add function
    getAll: getAll, //getAll key has a value of the getAll function
    filterName: filterName,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
  }; //end of return
})(); //end of IIFE

// pokemonRepository.add({name: "Charmander", height: 0.6, type: ["fire"]}); //add a new pokemon to the pokemonList array

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon); //call the addListItem function to display the pokemon
  });
});
