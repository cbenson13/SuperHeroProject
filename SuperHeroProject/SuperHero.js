const avengers = [ 
    { 
       "name": "Iron Man", 
       "alter_ego": "Tony Stark", 
       "primary_power": 
       "Powered Armor", "universe": 
       "Marvel Cinematic Universe", "age": 48 
    },
    {
        "name": "Captain America", 
        "alter_ego": "Steve Rogers", 
        "primary_power": "Super Soldier Serum", 
        "universe": "Marvel Cinematic Universe", "age": 105 
    }, 
    { 
        "name": "Thor", 
        "alter_ego": "Thor Odinson",
        "primary_power": "Super Strength", 
        "universe": "Marvel Cinematic Universe", 
        "age": 1500 
    },
    {
        "name": "The Hulk", 
        "alter_ego": "Bruce Banner",
        "primary_power": "Super Strength",
        "universe": "Marvel Cinematic Universe",
        "age": 49 
    },
    { 
        "name": "Black Widow",
         "alter_ego": "Natasha Romanoff",
        "primary_power": "Expert Spy and Assassin",
        "universe": "Marvel Cinematic Universe",
        "age": 37
    },
    {
        "name": "Hawkeye", 
        "alter_ego": "Clint Barton",
        "primary_power": "Expert Marksman",
        "universe": "Marvel Cinematic Universe",
        "age": 51
     }
  ];
  
// Function to display superheroes in the provided HTML element
function displaySuperheroes(element) {
    let output = "";
    for (let i = 0; i < avengers.length; i++) {
      output += avengers[i].name + "<br>";
    }
    element.innerHTML += "<h2>All Superheroes:</h2>" + output;
  }
  
  // Function to display superheroes with super strength in the provided HTML element
  function displaySuperheroesWithSuperStrength(element) {
    let output = "";
    for (let i = 0; i < avengers.length; i++) {
      if (avengers[i].primary_power === "Super Strength") {
        output += avengers[i].name + "<br>";
      }
    }
    element.innerHTML += "<h2>Superheroes with Super Strength:</h2>" + output;
  }
  
  // Function to display superheroes above age 50 in the provided HTML element
  function displaySuperheroesAboveAge50(element) {
    let output = "";
    for (let i = 0; i < avengers.length; i++) {
      if (avengers[i].age >= 50) {
        output += avengers[i].name + " - " + avengers[i].age + "<br>";
      }
    }
    element.innerHTML += "<h2>Superheroes Above Age 50:</h2>" + output;
  }
  