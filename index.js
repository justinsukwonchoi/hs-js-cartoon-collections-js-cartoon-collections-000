function dwarfRollCall(dwarves) {
  var result = ''
  
  for (let i = 0; i < dwarves.length; i++) {
    var num = i + 1;
    var name = dwarves[i];
    var string = `${num}. ${name} `;
    result += string;
  }
  
  return result
}

function summonCaptainPlanet(planeteerCalls){
  for (let i = 0; i < planeteerCalls.length; i ++) {
    planeteerCalls[i] = planeteerCalls[i].toUpperCase() + '!'
  }
  
  return planeteerCalls
}

function longPlaneteerCalls(words) {
  for (let i = 0; i < words.length; i++) {
    if (words.length > 4) {
      return true
    }
  }
  return false
}

function findTheCheese (foods) {
  var cheeses = ["cheddar", "gouda", "thyme"]
  
  console.log(foods)
  
  for (let i = 0; i < foods.length; i++) {
    if (cheeses.includes(foods[i])) {
      return foods[i];
    }
  }
  
  return "no cheese!"; 
}
