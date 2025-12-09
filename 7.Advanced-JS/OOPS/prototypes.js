// Prototypes:- Prototypes are mechanism by which JS objects inherits features from one another.
/*
Every object in JavaScript is internally linked to another object called its prototype. 
This prototype acts as a fallback source of properties and methods.
*/

String.prototype.grmpus=()=>{
    return ("GO AWAY")
}

console.log(String.prototype)

const cat = "MEOW"
console.log(`${cat} : ${cat.grmpus()}`)

String.prototype.yell= function(){
    return `OMG!!! ${this.toUpperCase()}!!!!!`
}

console.log("I love you".yell())

Array.prototype.pop = function(){
    return `Sorry I want that that element. Don't pop`
}

console.log([1,2,3].pop())

const nums = [7,8,9]

