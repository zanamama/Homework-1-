var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";

// WRITE YOUR CODE BELOW

//First Task
console.log("Added Canis Major to constellations array: " + constellations.unshift("Canis Major"));

//Second Task
var venusBye = planets.indexOf("Venus");
planets.splice(venusBye, 1);
console.log("Venus index is: " + venusBye);
console.log(planets);

//third task
var galaxy = constellations.concat (planets);
console.log(galaxy);

//4th task
var capStar = star.toUpperCase();
console.log(capStar);