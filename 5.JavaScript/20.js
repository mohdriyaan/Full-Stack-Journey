// JS Objects is another data structure to store data.
/* 
-> Objects are collection of properties.
-> Properties are key-value pairs
Property - key + value
-> Rather than accessing data using an index, we use custom keys.
*/

// creating object
const person ={
    firstName : "Mohammed",
    lastName: "Riyaan"
}

console.log(person)

// All data types can used in object
const kitchenSink ={
    favNum:9705678,
    isFunny:true,
    colors: ["red","orange"]
}

// Accessing Objects
// Bracket Notation Method
console.log(person["lastName"])

console.log(kitchenSink["colors"])

console.log(kitchenSink["s.bjkesbc"]) // undefined

// Dot Notation Method
console.log(person.firstName)

const years = {1999:"GOOD",2020:"BAD"}
// Here numbers are keys and stringsare values 
// All keys are converted to strings except Symbol
console.log(years["1999"]) // "GOOD"
// It works because keys are converted to strings

const dumbdumb = {
    true: "dat",
    null: "xsdhxdvesx"
}

// Here true and null will be changed to strings
console.log(person["first"+"Name"]) // Mohammed

// ex
const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}


const fullAddress = `${restaurant.address}, ${restaurant.city}, ${restaurant.state} ${restaurant.zipcode}`

console.log(fullAddress)

// Modifying Objects

const midterms = {danielle : 97, thomas : 78}
console.log(midterms)
midterms.thomas = 5
console.log(midterms)
midterms.antonio = "A+"
midterms.harry = "D-"
console.log(midterms)

// Nesting Arrays and Objects
// Array of objects
const comments = [
    {username:"Tammy", text:"lololo", votes:9},
    {username: "Fishboi", text:"glub glub", votes:1287}
]
// Access
console.log(comments[1].text)
