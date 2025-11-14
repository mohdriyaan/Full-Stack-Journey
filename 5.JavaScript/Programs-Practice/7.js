// converting kilometers to miles
// miles = kilometers * 0.621371

function kiloToMiles(num){
    if(isNaN(num)){
        return "invalid number"
    }
    return num *0.621371 
}

function milesToKilo(){
    if(isNaN(num)){
        return "invalid number"
    }
    return num/0.621371
}

console.log(kiloToMiles(3).toFixed(3))