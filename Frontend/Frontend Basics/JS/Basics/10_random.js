// looking at random function


function randomFunction() {
    return Math.random();
    // lies in [0,1)
}

// random whole number between a and b


a= 5;
b= 8;
// x will be a random whole number in [5,8]
x = a + Math.floor(Math.random()*(b-a+1));

console.log(x);

