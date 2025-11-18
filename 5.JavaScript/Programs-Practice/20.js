// JavaScript Program to Find the Sum of Natural Numbers
function sum(num){
    let sum = 0
    // for loop
    // for(let i = 1; i<=num; i++){
    //     sum+=i
    // }
    // while loop
    let i = 1
    while(i<=num){
        sum+=i // sum = sum + i
        i++
    }
    console.log(sum)
}

sum(5) // 1+2+3+4+5




