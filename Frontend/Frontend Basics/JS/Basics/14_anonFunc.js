// Looking at anonymous functions


// full way
var magic1 = function(){
    console.log("Hi1!");
}

// arrow func with a lot of stuff 
var magic2 = () =>{
    return "Hi2!";
}

// short arrow func with no return val
var magic3 = () => "Hi3";

magic1();
console.log(magic2());
console.log(magic3());


