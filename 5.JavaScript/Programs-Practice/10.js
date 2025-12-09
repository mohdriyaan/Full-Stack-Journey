// Javascript Program to Check if a number is Positive, Negative, or Zero
let num = parseInt(prompt("Enter the number: "))
while(isNaN(num)){
    alert("Invalid number")
    num = parseInt(prompt("Enter the number again.."))
}

if(num>=0){
    if(num==0){
        console.log(`${num} is zero`)
    }else{
        console.log(`${num} is positive`)
    }
}else{
    console.log(`${num} is negative`)
}

