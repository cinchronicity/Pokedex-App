//obj is in the curly braces, and the key value pairs are separated by commas, the keys are strings  (name, height, type), and the values (which are the preoperties of the pokemon) can be any data type (string, number, boolean, array, object, function)

let pokemonRepository = (function () {
  //IIFE
  let pokemonList = []; // empty array of objects
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150"; //url to fetch the pokemon data
  let modalContainer = document.querySelector(".modal");

  function add(pokemon) {
    //function to add a new pokemon to the pokemonList array
    if (
      typeof pokemon === "object" &&
      Object.keys(pokemon).includes("name") &&
      // Object.keys(pokemon).includes("height") &&
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
    return pokemonList;
  }

  function addListItem(pokemon) {
    let pokemonList = $(".pokemon-list");
    let listItem = $("<li></li>").addClass("list-group-item");
    let button = $("<button></button>")
      .text(pokemon.name)
      .addClass("btn btn-primary btn-block");

    button.attr("data-toggle", "modal");
    button.attr("data-target", "#pokemonModal");

    listItem.append(button);
    pokemonList.append(listItem);
    button.on("click", function () {
      showDetails(pokemon);
    });
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
            type: item.types,
            detailsUrl: item.url,
          };
          add(pokemon); //call the add function with the pokemon object as an argument
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
        item.name = details.name;
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        //item.type = details.types; // modify typoes w a for loop to iterate thru the object and push the type u want into an empty array of types to the userrs
        item.types = details.types.map((type) => type.type.name); //extract the type name from the type object in the details.types array, and store it in the item.types array. map() method creates a new array with thhe results of details.types array and the new array assigned to item.types????
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon);
      // $('#pokemonName').text(pokemon.name);
      // $('#pokemonHeight').text('Height: ' + pokemon.height);
      // $('#pokemonImage').attr('src', pokemon.imageUrl);
      // $('#pokemonModal').modal('show');
    });
  }

  function showModal(item) {
    let modalBody = $(".modal-body");
    let modalTitle = $(".modal-title");
    // let modalHeader = $(".modal-header");

    modalTitle.empty();
    modalBody.empty();

    let nameElement = $("<h1>" + item.name + "</h1>");
    let imageElement = $('<img class="modal-img">');
    imageElement.attr("src", item.imageUrl);
    let heightElement = $("<p>" + "Height: " + item.height + "</p>");
    let typesElement = $("<p>" + "Type: " + item.types + "</p>");

    modalTitle.append(nameElement);
    modalBody.append(imageElement);
    modalBody.append(heightElement);
    modalBody.append(typesElement);

    // $("#pokemonModal").modal("show");
  }
  // when user types in the search bar, pokemon list will filter based on the search query
  $(document).ready(function () {
    $("#searchBar").on("input", function () {
      let searchQuery = $(this).val().toLowerCase();
      $(".pokemon-list li").each(function () {
        let pokemonName = $(this).text().toLowerCase();
        if (pokemonName.includes(searchQuery)) {
          $(this).show();
        } else {
          $(this).hide();
        }
      });
    });
  });

  $("#pokemonList").on("click", "li", function () {
    const pokemonId = $(this).attr("id");
    window.location.hash = pokemonId;
  });

  return {
    //new object has getAll and add-return an object with two keys, add and getAll
    add: add, //add key has a value of the add function
    getAll: getAll, //getAll key has a value of the getAll function
    // filterName: filterName, will use later for search bar functionality
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
    showModal: showModal,
  }; //end of return
})(); //end of IIFE

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon); //call the addListItem function to display the pokemon
  });
});
