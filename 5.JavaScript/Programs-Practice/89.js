// JavaScript Program to Pass Parameter to a setTimeout() Function

// Example 1: Passing Parameter to setTimeout
// function greet(){
//     console.log("Hello world")
// }

// setTimeout(greet,3000)
// console.log("This message will be shown first.")

// Example 2: Passing Parameter to Function
function greet(x,y){
    console.log(x)
    console.log(y)
}

setTimeout(greet,3000,"hello","world")
console.log("This message will be shown first")
