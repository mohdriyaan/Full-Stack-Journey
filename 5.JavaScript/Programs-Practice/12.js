// JavaScript Program to Find the Largest Among Three Numbers
let num1 = parseInt(prompt("Enter the number 1:-"))
while(isNaN(num1)){
    num1 = parseInt(prompt("Enter the number 1:-"))    
}
let num2 = parseInt(prompt("Enter the number 2:-"))
while(isNaN(num2)){
    num2 = parseInt(prompt("Enter the number 2:-"))    
}
let num3 = parseInt(prompt("Enter the number 3:-"))
while(isNaN(num3)){
    num3 = parseInt(prompt("Enter the number 3:-"))    
}

if(num1>num2){
    if(num1>num3){
        console.log(`${num1} is largest`)
    }else{
        console.log(`${num3} is largest`)
    }
}else{
    console.log(`${num2} is largest`)
}
