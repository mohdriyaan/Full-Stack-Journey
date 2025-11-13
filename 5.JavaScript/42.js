// Spread Operator 

const nums = [1,2,3,4,61,22,235,21,890]
console.log(Math.max(nums)) // NaN
console.log(Math.max(...nums))
console.log(...nums)
console.log(..."hello")

// spread with array literals
const arr1 = ["king","queen"]
const arr2 = ["pawn","soldier"]

const topRank = [...arr1]

console.log(topRank)
topRank.push("Joker")
console.log(topRank)
console.log(arr1)

const total = [...arr1,...arr2,"Civilian"]
console.log(total)
console.log([..."hello"])

// spread with object literals
const feline = {legs:4, family:"Felidae"}
const canine = {isFurry:"true",family:"Caninae"}

const catDog = {...feline,...canine,family:"Steele",color:"black"}
console.log(catDog)

console.log({...[1,2,3,4]})
console.log({..."Hello"})

const dataForm = {
    email:"xyz@gamail.com",
    password:"wjsbdxhedvcx",
    username:"hello23"
}

const newUser = {...dataForm, isAdmin:false, id:23231}
console.log(newUser)


