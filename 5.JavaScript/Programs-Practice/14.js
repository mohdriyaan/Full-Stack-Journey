// JavaScript Program to Print All Prime Numbers in an Interval
let lowestNumber = parseInt(prompt("Enter lower number.."))
let highestNumber = parseInt(prompt("Enter highest number.."))

for(let i = lowestNumber; i<=highestNumber; i++){
    let isPrime = true
    for(let j = 2; j<=i/2;j++){
        if(i%j==0){
            isPrime=false
            break;
        }
    }
    if(i>1&&isPrime==true){
        console.log(i)
    }
}

