let counter = 0;
let currentPlantDescription;
let currentPlantName;

// plant list
const plants = [
    {
        id: 0,
        name: "croton",
        difficulty: "low",
        watering: "moderate",
        humidity: "moderate",
        light: "bright (no direct sun)"
    },

    {
        id: 1,
        name: "lemon lime dracaena",
        difficulty: "low",
        watering: "moderate",
        humidity: "ample",
        light: "bright/medium"
    },

    {
        id: 3,
        name: "moth orchid",
        difficulty: "medium",
        watering: "moderate",
        humidity: "ample",
        light: "bright/medium"
    },

    {
        id: 4,
        name: "anthurium",
        difficulty: "medium",
        watering: "moderate",
        humidity: "high",
        light: "bright"
    },

    { 
        id: 5,
        name: "golden pothos",
        difficulty: "very low",
        watering: "moderate",
        humidity: "moderate",
        light: "bright/medium/low"
    },

    {
        id: 6,
        name: "bamboo",
        difficulty: "very low",
        watering: "medium",
        humidity: "moderate",
        light: "bright/medium/low"
    },

    {
        id: 7,
        name: "dracaena", 
        difficulty: "low",
        watering: "low",
        humidity: "moderate",
        light: "bright/medium/low"
    },

    {
        id: 8,
        name: "snake plant", 
        difficulty: "very low",
        watering: "low",
        humidity: "moderate",
        light: "bright/medium/low"
    },

    {
        id: 9,
        name: "peace lily", 
        difficulty: "low",
        watering: "moderate",
        humidity: "moderate",
        light: "bright/medium/low"
    },

    {
        id: 10,
        name: "ponytail palm", 
        difficulty: "low",
        watering: "moderate",
        humidity: "moderate",
        light: "bright/medium/low"
    },

    {
        id: 11,
        name: "monstera deliciosa", 
        difficulty: "medium",
        watering: "moderate",
        humidity: "high",
        light: "bright/medium"
    },

    {
        id: 12,
        name: "aloe vera", 
        difficulty: "low",
        watering: "low",
        humidity: "low",
        light: "bright"
    },

    {
        id: 13,
        name: "cactus", 
        difficulty: "low",
        watering: "low",
        humidity: "low",
        light: "bright"
    },

    {
        id: 14,
        name: "zamioculcas", 
        difficulty: "very low",
        watering: "moderate",
        humidity: "low",
        light: "medium/low"
    },
]

// finds object in array by specific key
function findObjectByKey(array, key, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i][key] === value) {
            return array[i];
        }
    }
    return null;
}

// returns HTML description for some plant
function createDescription(plant) {
    return "<ul><li><span>name: </span>" + plant.name  + "</li><li><span>difficulty level: </span>" 
    + plant.difficulty + "</li><li><span>watering: </span>" + plant.watering + "</li><li><span>humidity: </span>" +
    plant.humidity + "</li><li><span>light: </span>" + plant.light + "</ul>";
}

// load favourites from localStorage
let favorites = [];
if (localStorage.getItem("items")) {
    $(".no-favs").addClass("d-none");
    $("#delete-icon").removeClass("d-none");
    favorites = JSON.parse(localStorage.getItem("items"));
    favorites.forEach(function(plantName) {
        let plant = findObjectByKey(plants, "name", plantName);
        let plantDescription = createDescription(plant);
        $(".added-favs").append(plantDescription);
    });
}

// show description of some plant
function showDescription(plant) {
    $(".alert-success").addClass("d-none");
    let plantDescription = createDescription(plant);
    $(".description").append(plantDescription);
    currentPlantDescription = plantDescription;
    currentPlantName = plant.name;
}

$(function() {
    const searchElement = $("#search-input");

    // autocomplete
    let plantsNames = plants.map(function(plant) {
        return plant.name;
    });
    $("#search-input").autocomplete({
        source: plantsNames
     });

    // show description of the searched plant
    $("#search-button").click(function(e) {
        e.preventDefault();
        $("#fav-icon").removeClass("d-none");
        $(".description").empty();
        let searchValue = searchElement.val();
        console.log("searchValue", searchValue)
        let plant = findObjectByKey(plants, "name", searchValue);
        showDescription(plant);
        console.log(plant)
    });

    // add to favourites
    $('#fav-icon').on("click", function(e) {
        e.preventDefault();
        // add to fav section
        $(".no-favs").addClass("d-none");
        $("#delete-icon").removeClass("d-none");
        $(".alert-success").removeClass("d-none");
        if (favorites.indexOf(currentPlantName) === -1) {
            favorites.push(currentPlantName);
            $(".added-favs").append(currentPlantDescription);
            // add to local storage
            localStorage.setItem('items', JSON.stringify(favorites));
        }
    });

    //  delete all favorites
    $('#delete-icon').on("click", function() {
        localStorage.clear();
        $(".added-favs").addClass("d-none");
        $(".alert-danger").removeClass("d-none");
    });
 });

//  add tooltips
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

