// looking at objects

// checking if obj has a property

function checkObj(obj, checkprop){
    if (obj.hasOwnProperty(checkprop)){
        return obj[checkprop]
    } else{
        return "Not found"
    }
}

var ourDog ={
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["Everything!"],
    "favourite food": "Pizza"
};

var name = ourDog.name;
var legs = ourDog.legs;

// bracket notation needed for attributes with spaces
var favFood = ourDog["favourite food"];

ourDog["favourite food"] = "Pasta";
// console.log(ourDog["favourite food"])

ourDog.bark = "bowow";
// console.log(ourDog)

delete ourDog.bark;

console.log(checkObj(ourDog, "name"));
console.log(checkObj(ourDog, "bark"));

