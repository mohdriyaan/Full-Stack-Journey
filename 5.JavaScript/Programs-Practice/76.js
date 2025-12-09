// JavaScript Program to Get Random Item From an Array

function randomItem(arr){
    let random = Math.floor(Math.random()*arr.length)
    console.log(arr[random])
}

randomItem([1,"hello",5,8])
