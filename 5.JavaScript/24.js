// While loops:- Loop continues running as long as test condition is true
let count = 0;
while(count<10){
    console.log(count)
    count++
}

const SECRET = "Humpty Dumpty"

let userInput = prompt("Enter the input:- ")

while(userInput!==SECRET){
    userInput = prompt("Guess Again!!")
}

console.log("CONGRATS!!!")
