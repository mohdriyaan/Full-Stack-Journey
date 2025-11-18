// JavaScript Program to Find Sum of Natural Numbers Using Recursion
function sum(num){
    if(num == 0){
        return 0
    }
    return num+sum(num-1)
}

console.log(sum(2))