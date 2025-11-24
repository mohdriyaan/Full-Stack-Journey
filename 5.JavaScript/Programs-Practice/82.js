// JavaScript Program to Set a Default Parameter Value For a Function

// Example 1: Set Default Parameter Value For a Function

function sum(x=10,y=5){
    return x+y
}

console.log(sum())
console.log(sum(10,5))
console.log(sum(2))

// Example 2: Using Previous Parameter in Another Parameter


// using previous parameter in default value expression

let calculate = function(x = 15, y = x + 2) {
    return x + y;
}

const result1 = calculate(10);
console.log(result1);

const result2 = calculate();
console.log(result2);
