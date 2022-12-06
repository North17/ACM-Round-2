// looking at conditionals

// == is equality operator
// === is strict equality operator (no implicit type conv)

// != is inequality operator
// !== is strict inequality operator

// && is and
// || is or


function is12(num){
    if (num === 12){
        return "Yes it is 12";
    }else{
        return "No it is not 12";
    }
    
    
}

function isnot12(num){
    if (num != 12){
        return "No it is not 12";
    }else{
        return "Yes it is 12";
    }
    
    
}

function bw12and25(num){
    if (num>12 && num<25){
        return "Yes it is between 12 and 25"
    }
    return "No it is not between 12 and 25"
}


console.log(is12(12));
console.log(is12('12'));
console.log(is12(13));

console.log(bw12and25(40))
console.log(bw12and25(20))