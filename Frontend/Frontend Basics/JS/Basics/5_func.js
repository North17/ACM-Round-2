// looking at functions

function ourReusableFunction() {
    console.log("Hello World!")
}

function functionWithArgs(a,b){
    return a-b
}

ourReusableFunction();

console.log(functionWithArgs(6,4));

// Simple queue:

function queueFunc(arr, item){
    arr.push(item)
    return arr.shift()
}

function dummyFunc(x,y, z=2){
    return x+y+z;
}

function restFunc(...args){
    for(let i=0; i<args.length; i++){
        console.log(args[i]);
    }
}

// spread operator
arr1 = [1,2,3,4]
// copying arr1
arr2 = [...arr1]

myArr = [1,2,3,4,5]

console.log("Before: " + JSON.stringify(myArr))
var firstItem = queueFunc(myArr, 6)
console.log("After: " + JSON.stringify(myArr))
console.log("First item was: " + JSON.stringify(firstItem))

restFunc(1,2,3,4,5)

