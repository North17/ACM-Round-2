// While loop

myArr = [];

var i = 0
while (i<5){
    myArr.push(i);
    i++
}

console.log(myArr)

// For loop

myArr= [];

for (var i=0; i<5; i++){
    myArr.push(i);
}
console.log(myArr)

myArr = []
for (var i=1; i<10; i+=2){
    myArr.push(i);
}
console.log(myArr);

myArr = [];
for (var i=10; i>0; i-=2){
    myArr.push(i);
}
console.log(myArr);


myArr = [1,2,3,4,5,6,7];
var myTotal = 0;
for (var i=0; i<myArr.length; i++){
    myTotal += myArr[i];
}
console.log(myTotal);

// do while loops :/
// does it once at least before checking with conditional... while loop + 1 additional iteration

myArr = [];
var i = 7;
do {
    myArr.push(i);
} while (i<5);
