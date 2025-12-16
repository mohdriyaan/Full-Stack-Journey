// JS refresher

// const person = {
//     name:"Max",
//     age:29,
//     greet(){
//         console.log(`hi, i am ${this.name}. My age is ${this.age}`)
//     }
// }

// person.greet()

// const hobbies = ["Sports","Cooking",1]
// for(let hobby of hobbies){
//     console.log(hobby)
// }

// Transforms the values in array and gives new array
// console.log(hobbies.map((hobby)=>{
//     return `Hobby: ` + hobby
// }))

// let newArr = hobbies.map((hobby)=>{
//     return `Hobby: ` + hobby
// })

// console.log(hobbies)
// console.log(newArr)

// // Spread Operator
// const copiedArr = [...hobbies]
// console.log(copiedArr)
// copiedArr.push("231")
// console.log(copiedArr)
// console.log(hobbies)

// // const copiedPerson = {...person}
// // console.log(copiedPerson)

// // Rest Operator
// const toArray=(...args)=>{
//     return args
// }

// console.log(toArray(1,2,3,4,5,6))

// Destructuring
// const person = {
//     name:"Max",
//     age:29,
//     greet(){
//         console.log(`hi, i am ${this.name}. My age is ${this.age}`)
//     }
// }

// const {name,age} = person
// console.log(name,age)

// const hobbies = ["Sports","Climbing"]
// const [hobby1, hobby2] = hobbies
// console.log(hobby1,hobby2)

// Async and promises
// async code takes a little time to get it executed

const fetchData = () => {
    const promises = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Done!!")
        }, 1500);
    })
    return promises

}


setTimeout(() => {
    console.log("Timer is done")
    fetchData()
    .then(text=>{
        console.log(text)
        return fetchData()
    })
}, 2000)

console.log("hello")
console.log("hi")



