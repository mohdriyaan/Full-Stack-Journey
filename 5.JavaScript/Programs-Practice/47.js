// JavaScript Program to Count the Number of Keys/Properties in an Object

const obj = {
    name:"hello",
    age:"2321",
    city:"ejwdbs"
}

let count=0

for(let values in obj){
    count++
}

console.log(count)

// Using Object.keys() property
console.log(Object.keys(obj).length)
