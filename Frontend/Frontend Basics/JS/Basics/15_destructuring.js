// looking ar destructuring

let aDog = {
    "legs": 4,
    "color": "white",
    "nature": "friendly"
};

const {legs: a, color: b, nature: c} = aDog;
// field name: new variable name
// these inner variables are const in this case
console.log(a,b,c);

let forecast = {
    today: {"max": 25, "min": 17},
    tomorrow: {"max": 27, "min": 18}
};


// destructuring a nested object
let {today: {max: todmax, min: todmin}, tomorrow: {max: tommax, min: tommin}} = forecast;
console.log(todmax,todmin,tommax,tommin);

// destructuring an array
let arr = [1,2,3,4,5];
let [x,y, ,z, ] = arr;
console.log(x,y,z);

// copying only from 3rd element of an array
arr2 = [1,2,3,4,5,6];
let [ , ,...arr3] = arr2;

console.log(arr3)


// destructure an object into necessary attributes before passing into func

let dummyObj = {
    "max": 50,
    "min": 10
};

function destFunc({max, min}){
    console.log(max, min);
};

destFunc(dummyObj)



