// using class syntax to make consstructor function

// old way

// var spaceShuttle = function(targetPlanet){
//     this.targetPlanet= targetPlanet;
// }

// var zeus = new spaceShuttle("Jupiter");
// console.log(zeus.targetPlanet);



// new way

class spaceShuttle {
    constructor(targetPlanet){
        this.targetPlanet = targetPlanet;
    }
};

var zeus = new spaceShuttle('Jupiter');
console.log(zeus.targetPlanet);

