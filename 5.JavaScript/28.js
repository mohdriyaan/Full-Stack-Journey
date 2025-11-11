// Iterating objects

const testScores ={
    ray:80,
    kraty:27,
    leslie:65,
    zatharo:70
}

// for..of cannot be used to iterate objects
// Instead we use for..in loop
// for(let person in testScores){
//     console.log(`${person} scored ${testScores[person]}`)
// }

// Object.values(object) gives values array 
// Object.keys(object) gives keys array

let totalMarks = 0

for(let scores of Object.values(testScores)){
    console.log(scores)
    totalMarks+=scores
}

console.log(totalMarks)