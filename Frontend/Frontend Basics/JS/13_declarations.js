var myName = "Marc";
var myName = "Marc";

let myName2 = "Stanley";
// won't let you declare twicce
// let myName2 = "Stanley";

function checkScope(){
    let i = "function scope";
    if (true){
        let i = 'block scope';
        console.log("Block scope i is: " + i);
    }
    console.log("Function scope i is: "+ i);
}


// let ensures that the variable is only changed within that block
checkScope();



// const is just like let but it won't allow reassingment

const SENTENCE = "This is permanent";
// SENTENCE = "I will try to change it >:)";
// TypeError: Assignment to constant variable.

// YOU CAN MUTATE A const ARRAY!

const myArr = [1,2,3,4];
console.log(myArr);
myArr[1] = 6;
console.log(myArr)

// HOW TO PREVENT MUTATION

const mathConst = {
    PI : 3.14
}

Object.freeze(mathConst)