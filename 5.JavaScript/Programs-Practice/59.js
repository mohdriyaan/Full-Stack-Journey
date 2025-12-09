// JavaScript Program to Display Date and Time

const date = new Date(2025, 10, 23, 5, 36, 30)
console.log(date)
const n = date.toDateString()
const n1 = date.toLocaleDateString()
const time = date.toLocaleTimeString()

console.log(`Date : ${n}`)
console.log(`Current Date : ${n1}`)
console.log(`Time : ${time}`)

// the new Date() constructor is used to create a date object. It gives the date and time according to the given arguments.
// The six numbers in new Date() specify year, month, day, hour, minute, second respectively. Also, the month starts from 0. 
// Hence, January is 0 and December is 11.

// The toDateString() method returns the date portion of a Date object.

// The toLocaleTimeString() method returns the time portion of a Date object.
