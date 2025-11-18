// Javascript Program to Check if a Number is Odd or Even
let num = parseInt(prompt("Enter the number..."))

while(isNaN(num)){
    num = parseInt(prompt("Enter the number again..."))
}

if(num%2==0){
    console.log(`${num} is even`)
}else{
    console.log(`${num} is odd`)
}
