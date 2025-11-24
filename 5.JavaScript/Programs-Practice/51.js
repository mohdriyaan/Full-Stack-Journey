// JavaScript Program to Generate Random String

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"

function generateStr(length){
    let result = ""
    for(let i = 1; i<=length;i++){
        result+=characters[Math.floor(Math.random()*characters.length)]
    }
    return result
}

console.log(generateStr(5))