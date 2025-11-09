//   Primitive Types :- The  Basic Building Blocks
/*
1. Number
2. String
3. Boolean
4. Null
5. Undefined
6. Symbol
7. BigInt  
*/

/*
1. Number:-
--> JS has one number type
--> Positive numbers 1, 100, 200
--> Negaive numbers -1, -2754
--> Whole numbers (integers)
--> Decimal numbers (floating point numbers):- 0.32, 0.99999 
*/

// Math operations
// addition
console.log(10+3)
// subtraction
console.log(10-3)
// Division
console.log(10/3)
// modulo
console.log(10%3)
// Precedence in math operations
console.log(3+1*9)
console.log((3+1)*9)
// Even or odd
console.log(19%2) // Odd
console.log(20%2) // Even
// Exponentiation
console.log(2**4) // 2 power 4
console.log(10**2) // 10 power 2

// NaN is a numeric value that represents something that is not a number.
console.log(0/0); //NaN
console.log(1+ NaN) //NaN
console.log(NaN * NaN)

// typeof operator tells the data type.
console.log(typeof 4)
console.log(typeof 4.212131434)
console.log(typeof NaN)