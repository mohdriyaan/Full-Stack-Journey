// JavaScript Program to Empty an Array

let arr = [1,2,3,4,5,6,7]

arr = []
console.log(arr)

arr = [2,4,6,7,9]
arr.length = 0
console.log(arr)

arr = [1,2,3,4,5,6]
console.log(arr)
arr.splice(0,arr.length)

console.log(arr)