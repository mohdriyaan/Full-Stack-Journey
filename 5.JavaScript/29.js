// JS Functions
// Reusable procedures
/*
-> Functions allow us to write reusabale, modular code
-> We define a chunk of code that we can then execute at a later point
-> We use them all the time.
*/

// 2 step process
// 1. define 2. run

// Syntax:- 
/* 
function funcName(){
    // do something
}
*/

func() // hoisting // ---Not recommended---

function func(){
    console.log("hello")
    console.log("world")
    console.log(1+10)
}

func()
func()

// Arguments:- Providing inputs to the functions
// Every method is a function.

// function greet(firstName){ // firstName is a parameter
//     console.log(`firstName is ${firstName}`)
// }

// greet("elvis") // "elvis" is the argument 
// greet(1423823623)
// greet()

// Function with multiple arguments
function greet(firstName, lastName){
    console.log(`Hey there, ${firstName} ${lastName[0]}!`)
}

greet("Elvis","Presley")

function repeat(value,num){
    for(let i = 1; i<=num; i++ ){
        console.log(`${value}`)
    }
}

repeat("Hi",10)

// Return keyword returns values when we call them.
// function add(x,y){
//     console.log(x+y)
// }
// let total = add(10,4)
// console.log(total) // Does not capture value

function add(x,y){
    if(typeof x!=="number"||typeof x!=="number"){
        return false
    }
    return x+y // only single value can be returned after conditional statement
    console.log("END OF FUNCTION") // this will never run
}

let sum = add(9,10)

console.log(sum)

// also return statement ends function execution and specifies the value to be returned 
// by that function

console.log(add(add(5,10),5))