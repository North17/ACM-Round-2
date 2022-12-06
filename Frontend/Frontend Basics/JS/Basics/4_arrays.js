// looking at arrays

var ourArr = [["Marc", 18], ["Bhav", 18]]

console.log("My name is "+ ourArr[0][0])
console.log("Old array: " + ourArr)

ourArr[1][0] = "Bhavani"

console.log("New array: " + ourArr)

// Push function
ourArr.push(["Bharat", 18])
console.log("Pushed array: " + ourArr)

// Pop function
var removedElement = ourArr.pop()
console.log("Popped array: " + ourArr)
console.log(removedElement)

// Shift function (reverse pop)
removedElement = ourArr.shift()
console.log("Shifted array: " + ourArr)
console.log(removedElement)

// Unshift function (reverse push)
ourArr.unshift(["Marc", 18])
console.log("Unshifted array: " + ourArr)

