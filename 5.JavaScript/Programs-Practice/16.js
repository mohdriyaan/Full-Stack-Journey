// JavaScript Program to Display the Multiplication Table
let num =  parseInt(prompt("Enter the number.."))
let range = parseInt(prompt("Enter the range.."))


for(let j = 1; j<=range;j++){        
    console.log(`${num}x${j}=${num*j}`)
}

