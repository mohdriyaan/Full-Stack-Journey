// Generate a random number
function random(min,max){
    // return Math.floor(Math.random()*(max)+min) // generates random number from min to max
    return Math.floor(Math.random()*(max-min)+(min+1)) // generates random number between min and max
}

console.log(random(1,10))