// JavaScript Program to Clone a JS Object
const person1 = {
    name:"John",
    age:"24",
    scores:[1,2,3,4]
}

const person2 = {...person1}
console.log(person2)

person2.scores[0] = 100
console.log(person2)
console.log(person1)

// The spread syntax can be used to make a shallow copy of an object. This means it will copy the object. 
// However, the deeper objects are still referenced.

const person3 = Object.assign({},person1)
person3.scores[0]=10000

console.log(person3)
console.log(person1)

// Using JSON parse the deeper properties of original object remains same.
// JSON.parse() only works with Number and String object literal. It does not work with an object literal with function or symbol properties.
const person4 = JSON.parse(JSON.stringify(person1))
person4.scores[0]=600

console.log(person4)
console.log(person1)



