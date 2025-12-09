// Array is the ordered collection of data/values.

// to make an empty array
let colors = []
console.log(colors)

// array of strings
colors = ["red, orange", "yellow"]
console.log(colors)
console.log(colors.length)

// array of numbers
let num = [1,2,3,4,5]
console.log(num)
console.log(num.length)

// mixed array
let arr = [true,undefined, 12, 9.99, NaN, null, "HIII"]

// Access array
// Arrays are indexed. Each element has corresponding index. Counting starts from 0. 
let days = ["sunday","monday","tuesday"]
console.log(days.length)
console.log(days[0])
console.log(days[1])
console.log(days[10]) // undefined
console.log(days[1][0]) // m

// modifying arrays
days[0] = "saturday"
console.log(days)

days[10] = "sunday"
console.log(days)
console.log(days.length)

days[11] = "friday"
console.log(days)

