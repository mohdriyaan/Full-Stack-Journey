// JavaScript Program to Check Prime Number
let num = parseInt(prompt("Enter the number..."))

while(isNaN(num)){
    num = parseInt(prompt("Enter the number..."))
}

let isPrime = true

if(num===1){
    console.log(`${num} is nether prime nor composite number`)
}else if(num>1){
    for(let i =2; i<num/2;i++){  // we divide the num/2 because it provides more efficiency because 
                               // for ex. if we take num as 10. We can divide the num till only 5 bcoz 5*2=10, after that 6*2=12
        if(num%i==0){
            isPrime=false;
            break;
        }
    }

    if(isPrime){
        console.log(`${num} is a prime number`)
    }else{
        console.log(`${num} is not a prime number`)
    }
}else{
    console.log(`${num} is not a prime number`)
}
