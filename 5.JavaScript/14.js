// Logical Operators
// Combining Expressions
/*
1. AND &&:- Both sides must be true for the entire thing to be true.
2. OR ||:- If one side is true then the entire thing can be true else false.
3. NOT !:- !expressions returns true if expression is false
*/

console.log(true&&true)
console.log(true&&false)
console.log(false&&false)

const password = prompt("Enter the password")
if(password.length>=6 && password.indexOf(" ")==-1){
    console.log("valid password")
}else{
    console.log("invalid password")
} 

console.log(true||true)
console.log(true||false)
console.log(false||false)

const age = 90
// AND has more precedence over OR
if( (age>=0&&age<5) || (age>=65)){
    console.log("free")
}else if(age>=5 && age<10){
    console.log("$10")
}else if(age>=10 && age<65){
    console.log("$20")
}else{
    console.log("INVALID AGE!")
}

console.log(!false)
console.log(!(1===1))
console.log(!null)

const firstName = prompt("Enter your first name:- ")
if(!firstName){
    firstName= prompt("TRY AGAIN!!")
}
