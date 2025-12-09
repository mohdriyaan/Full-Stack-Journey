// Conditional Flow Statements
// Making decisions with the code
// Only runs code if given condition is true.

let random = Math.random()
if(random<0.5){
    console.log(`${random} is less than 0.5`)
}else{
    console.log(`${random} is greater than or equal to 0.5`)
}

const dayOfWeek = prompt("Enter a day:- ").toLowerCase()
if(dayOfWeek==="monday"){
    console.log("I hate Mondays")
}else if(dayOfWeek==="saturday"){
    console.log("I love Saturdays!!")
}else if(dayOfWeek==="friday"){
    console.log("Fridays are Decent")
}else{
    console.log("MEH!!")
} 

const age = 8;
if(age<5){
    console.log("You are a baby. You get in for free")
}else if(age<10){
    console.log("You are a child. You get in for $10.")
}else if(age<65){
    console.log("You are an adult. You pay $20")
}else{
    console.log("You are a Senior. You pay $10.")
}

