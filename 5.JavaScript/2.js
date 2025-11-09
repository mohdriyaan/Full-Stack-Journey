// Variables are like labels for values
/*
We can store a value and give it a name so that we can:-
Refer back to it later
Use that value to do stuff.
Or change it to later one.
*/

// Basic Syntax
// let someName = value;
let year = 1985;

// Recall Values
let num = 5
let num1 = 1
num+num1
num + 8
let totalNum = num+ num1
console.log(totalNum)

num = num + 6
console.log(totalNum)

// Updating Values
let score = 0;
console.log(score)
score = 5;
console.log(score)
score+=10
console.log(score)
score+=5
console.log(score)
score-=2
console.log(score)
score*=20
console.log(score)
score/=2;
console.log(score)

// Increment / Decrement
// Post increment/decrement
score-- // decrement by one
console.log(score)
score++ // increment by one
console.log(score)

// Pre increment/decrement vs Post inrement/decrement
let i = 5
console.log(i++)
console.log(i)
console.log(++i)

console.log(i--)
console.log(i)
console.log(--i)

// const / var
// const works just like let, except you cannot change the value
const a = 10;
console.log(a)
a++;
console.log(a) // Error
