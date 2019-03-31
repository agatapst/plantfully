const searchElement = $("#search-input");
var counter = 0;
var currentPlantDescription;

var favorites = [];
if (localStorage.getItem("items") !== null) {
    $(".no-favs").addClass("d-none");
    favorites = JSON.parse(localStorage.getItem("items"));
    $(".added-favs").append(favorites);
}

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
        watering: "vase filled with water",
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

let plantName = plants.map(function(plant) {
    return plant.name;
});

// show description of the searched plant
$("#search-button").click(function() {
    $(".description").empty();
    var searchValue = searchElement.val();
    console.log("searchValue", searchValue)
    var plant = findObjectByKey(plants, "name", searchValue);
    showDescription(plant);
    console.log(plant)
});

  function findObjectByKey(array, key, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i][key] === value) {
            return array[i];
        }
    }
    return null;
}
 
// show description of some plant
function showDescription(plant){
    let plantDescription = createDescription(plant);
    $(".description").append(plantDescription);
    currentPlantDescription = plantDescription;
}

function createDescription(plant) {
    return "<li><span>name: </span>" + plant.name  + "</li><li><span>difficulty level: </span>" 
    + plant.difficulty + "</li><li><span>watering: </span>" + plant.watering + "</li><li><span>humidity: </span>" +
    plant.humidity + "</li><li><span>light: </span>" + plant.light;
}

$('#fav-icon').on("click", function(e) {
    // add to fav section
    $(".no-favs").addClass("d-none");
    e.preventDefault();
    if (favorites.indexOf(currentPlantDescription) === -1) {
        favorites.push(currentPlantDescription);
        $(".added-favs").append(currentPlantDescription);
        // add to local storage
        localStorage.setItem('items', JSON.stringify(favorites));
    }
});

$(function() {
    $("#search-input").autocomplete({
       source: plantName
    });
 });


