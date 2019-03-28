const searchElement = $("#search-input");

const objArray = [
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

$("#search-button").click(function() {
    var searchValue = searchElement.val();
    console.log("searchValue", searchValue)
    var plant = findObjectByKey(objArray, "name", searchValue);
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
  
function showDescription(plant){
    var name = plant.name;
    var difficulty = plant.difficulty;
    var watering = plant.watering;
    var humidity = plant.humidity;
    var light = plant.light;
    console.log(watering);
    $( ".description" ).append("name: " + name + "<br>" + "difficulty level: " 
    + difficulty + "<br>" + "watering: " + watering + "<br>" + "humidity: " +
     humidity + "<br>" + "light: " + light);
}

// var obj = objArray.find(function(plant) { return plant.name === searchValue })
// var obj = objArray.filter(function(plant) { return plant.name === searchValue })
// var obj = $.grep(objArray, function(plant) { return plant.name === searchValue })


