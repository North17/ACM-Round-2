// looking at switch 

function greek(num){
    var answer = ""
    switch(num) {
        case 1:
            answer = "Alpha";
            break;
        case 2:
            answer = "Beta";
            break;
        case 3:
            answer = "Gamma";
            break;
        case 4:
            answer = "Delta";
            break;
        default:
            answer = "NA";
            break;
    }
    return answer
}

// switch without break for multi input -> same output

function blocks(num){
    var answer = ""
    switch(num) {
        case 1:            
        case 2:            
        case 3:  
            answer = "1to3";
            break;         
        case 4:
        case 5:
        case 6:
            answer = "4to6";
            
        default:
            answer = "NA";
            
    }
    return answer;
}



console.log(greek(2));
console.log(blocks(2));