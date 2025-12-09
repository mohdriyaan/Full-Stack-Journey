// JavaScript Program to Find the Factorial of a Number
let num = parseInt(prompt("Enter the number.."))

let fact = 1
if(num==0){
    console.log(`Factorial of ${num} is 1`)
}else{
    for(let i = 1; i<=num;i++){
        fact*=i
    }
    console.log(fact)
}
