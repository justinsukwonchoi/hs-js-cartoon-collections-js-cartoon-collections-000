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

function summonCaptainPlanet(planeteerCalls){ //<-array of strings
  for (let i = 0; i < planeteerCalls.length; i ++) {
    planeteerCalls[i] = planeteerCalls[i].toUpperCase() + '!'
  }
  
  return planeteerCalls
}

function longPlaneteerCalls(calls) {
  for (let i = 0; i < calls.length; i++) {
    let call = calls[i]
    if (call.length > 4) {
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
