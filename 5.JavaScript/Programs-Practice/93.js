// JavaScript Program to Check if a Number is Float or Integer

function checkNumber(num){
    if(typeof num=="number"&&!isNaN(num)){
        if(Number.isInteger(num)){
            return `${num} is an integer`
        }
        return `${num} is a float number`
    }
    return `${num} is not a number`
}

console.log(checkNumber("hello"))
console.log(checkNumber(44))
console.log(checkNumber(4.4))
console.log(checkNumber(NaN))
