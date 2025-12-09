// Rest Params
function sum(...nums){ // collect rest of the parameters from the argument
    return nums.reduce((sum,element)=> sum + element)
}

console.log(sum(10,20,30))

function raceResults(gold,silver,...everyoneElse){
    console.log(`GOLD medal goes to ${gold}`)
    console.log(`Silver medal goes to ${silver}`)
    console.log(`And thank you for participation : ${everyoneElse} `)
}

raceResults("tommy","silverfang","oliver","nancy","drew")
