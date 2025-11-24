// JavaScript Program to Append an Object to an Array

// Example 1: Append Object to Array Using push()
let arr = [1,2,3,4]
let obj = {name:"John",age:21}

arr.push(obj)

console.log(arr)

// Example 2: Append Object to Array Using splice()
arr.splice(arr.length ,0,{score:[1,2,3,4]})

console.log(arr)