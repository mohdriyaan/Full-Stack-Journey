// JavaScript Program to Print the Fibonacci Sequence
// function fibonacci(num){
//     let startTerm = 0
//     let secondTerm = 1
//     let nextTerm
//     for(let i = 1; i<=num;i++){
//         console.log(startTerm)
//         nextTerm = startTerm+secondTerm
//         startTerm = secondTerm
//         secondTerm = nextTerm
//     }
// }

// fibonacci(10)

// Fibonacci Sequence Up to a Certain Number
function fibonacci(num){
    let startTerm = 0
    let secondTerm = 1
    let nextTerm
    console.log(startTerm)
    console.log(secondTerm)
    nextTerm = startTerm+secondTerm
    while(nextTerm<=num){
        console.log(nextTerm)
        startTerm = secondTerm
        secondTerm = nextTerm
        nextTerm = startTerm + secondTerm
    }
}

fibonacci(10)
