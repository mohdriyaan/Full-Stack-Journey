// Higher Order Functions
/*
Functions that operate on/with other functions.
They can:
-> Accept other functions as arguments
-> Return a function
*/

function callTwice(func){
    func()
    func()
}

function rollDie(){
    let roll = Math.floor(Math.random()*6)+1
    console.log(roll)
}

callTenTimes(rollDie)

function callTenTimes(func){
    for(let i = 1 ; i<=10 ; i++ ){
        func()
    }
}

// Returning functions in another functions
// function mysteryFunc(){
//     const rand = Math.random()
//     if(rand>0.5){
//         return function(){
//             console.log("GOOD FUNCTION")
//         }
//     }else{
//         return function(){
//             console.log("Bad function")
//             console.log("Bad function")
//             console.log("Bad function")
//         }
//     }
// }

// const func = mysteryFunc() 

// console.log(func)

// Function Generator between numbers
function makeBetween(min,max){
    return function(num){
        return num>=min && num<=max
    }
}

// console.log(makeBetween(10,20))

const isChild= makeBetween(0,18)

console.log(isChild(18,12))