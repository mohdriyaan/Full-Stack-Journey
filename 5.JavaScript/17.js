// array methods

const movieLine = ["tom","nancy"]

// Add elements at the end
movieLine.push("oliver")
console.log(movieLine)
console.log(movieLine.length)

movieLine.push("harry","peter")
console.log(movieLine)

// Remove element from the end
let removedPerson = movieLine.pop()
console.log(movieLine)
console.log(removedPerson)

// add element at the beginning
movieLine.unshift("Ron")
console.log(movieLine)

// remove from the beginning
let removedBegin = movieLine.shift()
console.log(movieLine)
console.log(removedBegin)

// concat
let cats = ["blue","kitty"]
let dogs = ["rusty","wyatt"]
let pets = cats.concat(dogs)
console.log(pets)
console.log(dogs.concat(cats))

// includes
console.log(cats.includes("blue")) // true
console.log(cats.includes("hello")) // false

// indexOf
console.log(pets.indexOf("rusty"))
console.log(pets.indexOf("kitty"))
console.log(pets.indexOf("sdesc")) // -1

// reverse
pets.reverse
console.log(pets)

// slice
let colors = ["red","yellow","blue","orange","white","black"]
let coolColors = colors.slice(3)
console.log(colors)
console.log(coolColors)

let warmColors = colors.slice(0,3)
console.log(warmColors)

let lastThreeColors = colors.slice(-3)
console.log(lastThreeColors)

//splice
console.log(colors.splice(3,1)) // removes one element from index 3
console.log(colors)

colors.splice(1,0,"red-orange") // removes nothing and adds color red-orange at index 1
console.log(colors)

colors.splice(3,0,"yellow-green")
console.log(colors)

colors.splice(2,2,"DELETED!!")
console.log(colors)

// sort
// let scores = [1,70,100,2500,9,-12]
// console.log(scores.sort()) // sorts according to utf-16 units.

// toString
const scores = [1,2,3,4,5]
console.log(scores.toString())

