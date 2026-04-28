

// Shallow Copy - Example

var fruits = ["apple","orange","grapes"];
var newfruits = fruits;

newfruits.push("pineapple")
newfruits.push("papaya")

console.log("fruits ===>",fruits)
console.log("newfruits ===>",newfruits)


// Deep Copy - Example - Spread Operator

var fruits = ["apple","orange","grapes"];
var newfruits = [...fruits];

newfruits.push("kiwi")
newfruits.push("lichi")

console.log("fruits ===>",fruits)
console.log("newfruits ===>",newfruits)