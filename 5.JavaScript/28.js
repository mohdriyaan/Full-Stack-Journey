// Iterating objects

// const testScores ={
//     ray:80,
//     kraty:27,
//     leslie:65,
//     zatharo:70
// }

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

// let arr = ["Hello","World",1,2,3]
// for(let i = 0; i< arr.length; i++){
//     console.log(arr[i])
// }

// for(let values of arr){
//     console.log(values)
// }

// let object = {
//     name:"Riyaan",
//     nums:[1,2,3,4]
// }

// // for(let values in object){
// //     console.log(`${values} : ${object[values]}`)
// // }

// let values = Object.entries(object)
// console.log(values) 
// for(let value of values ){
//     console.log(value)
// }

