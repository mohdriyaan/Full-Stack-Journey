// JavaScript Program to Display Fibonacci Sequence Using Recursion
function fibo(num){
    if(num==0){
        return 0
    }
    if(num==1){
        return 1
    }
    return fibo(num-1)+fibo(num-2)
}

let num = parseInt(prompt("Enter the number.."))
if(num<0){
    num= parseInt(prompt("Enter the positive number.."))
}else{
    for(let i = 0; i<num;i++){
        console.log(fibo(i))
    }
}
