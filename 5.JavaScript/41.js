// Default params
function rollDie(numSides=6){
    // if(numSides===undefined){
    //     numSides=6
    // } // old way
    return Math.floor(Math.random*numSides)+1
}

function greet(message="Hey There",personName,punc="!"){
    return`${message}, ${personName}${punc}`
}

