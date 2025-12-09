// JavaScript Program to Find Factorial of Number Using Recursion
function fact(num){
    if(num==0){
        return 1
    }
    return num*fact(num-1)
}

let num = parseInt(prompt("Enter the number:- "))

while(num<0||isNaN(num)){
    num = parseInt(prompt("Enter the positive number:- "))
}

console.log(`Factorial of a ${num} is ${fact(num)}`)