// JavaScript Program to Merge Property of Two Objects
// Example 1: Merge Property of Two Objects Using Object.assign()

const person = {
    name: "John",
    age: 24
}

const student={
    gender: "male"
}

let newObj = Object.assign(person,student)

console.log(newObj)

// Merge using Spread Syntax

const city = {
    address: "Bombay, India"
}

newObj= {...person,...student,...city}

console.log(newObj)


