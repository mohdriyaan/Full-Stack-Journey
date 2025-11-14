// Swapping varaiables

// 1st method
// function swap(num1,num2){
//     console.log(`Before Swapping: ${num1} , ${num2}`)
//     let temp
//     temp = num1
//     num1=num2
//     num2= temp
//     console.log(`After Swapping: ${num1} , ${num2}`)
// }

// swap(10,2)

// 2nd method

let a = 9;
let b = 10;
console.log(`Before swapping : ${a} , ${b}`);
[a,b]=[b,a];
console.log(`After swapping : ${a} , ${b}`)

// While using destructuring assignment, use the semi colon before
