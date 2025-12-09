// Strings represent text and must be wrapped in quotes.
let userName = "riyaan" // string of characters
// You also use single quotes username = 'riyaan'
// Thi will not work username = "riyaan' or 'riyaan"

// Strings are indexed
// h e l l o
// 0 1 2 3 4
// Each character has a corresponding index.

let animal = "Dumbo Octupus"
console.log(animal[0])
console.log(animal[1])
console.log(animal[4])
console.log(animal[99]) // undefined
console.log(animal.length) // Tells the length of the string i.e., 13
// Concat
let firstName = "Jack"
let lastName = "Nicholas"
console.log(firstName+lastName)
console.log(firstName+" "+lastName)
let fullName = firstName+" "+lastName
console.log(fullName)

// Characters can't be changed in te string at a time manually so it needs to be override with the new value.
console.log(1+"hi")
console.log(typeof(1+"hi")) // string

// String Methods
// Methods are built-in actions we can perform with individual strings.
// Syntax:- string.method()
let msg = "leave me alone!!"
console.log(msg.toUpperCase())

let msg1 = "LCJDEXEJCJEDDJEFC"
console.log(msg.toLowerCase())

let userInput = "        hello my name is Tommy       " 
console.log(userInput.trim()) // removes white spaces

// Chaining Methods
let greeting = "  hello again!!!"
console.log(greeting.trim().toUpperCase())

// Methods with Arguments
// Syntax :- string.method(arg)
console.log("hello world".indexOf("l")) // returns index of string that is first occured 
console.log("hello world".indexOf("$")) // return -1 if character in the string not found

// slice:- extracts the portion of the string
// str.slice(beginIndex,endIndex)
console.log("hello world".slice(2)) // extracts the portion of string from the index 2
console.log("hello world".slice(4,7))
console.log("hello world".slice(-1)) // starts from the last index
console.log("hello world".slice(-4))

// replace
let message = "Hi my name is Fiver Fiver"
console.log(message.replace("Fiver","River"))
console.log(message.replaceAll("Fiver","River"))

// repeat
console.log("lol".repeat(3))


