// JavaScript Program to Find the Factors of a Number
function factors(num){
    for(let i = 1; i<=num; i++){
        if(num%i==0){
            console.log(i)
        }
    }
}

factors(12)