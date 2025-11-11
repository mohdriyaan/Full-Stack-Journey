// Guessing Number Game

let usrInput = parseInt(prompt("Enter the maximum number!"))

while(!usrInput){
    usrInput = parseInt(prompt("Enter the valid number again please!!"))
}

const targetNum = Math.floor(Math.random()*usrInput)+1

let guess = prompt("Enter the guess! (Type 'q' to quit)")

let attempts = 1

while(parseInt(guess)!==targetNum){
    if(guess==="q"){
        break;
    }
    guess = parseInt(guess)
    if(guess < targetNum){
        guess = prompt("Too Low. Guess Again!!")
        attempts++
    }else if(guess > targetNum){
        guess = prompt("Too High. Guess Again!!")
        attempts++
    }else{
        guess = prompt("Invalid guess. Enter Again or (type q to quit)!")
    }
}

if(guess=="q"){
    console.log(`No problem! Try again later`)
}else{
    console.log(`YOU GOT IT. YOU HAVE GUESSED THE NUMBER IN ${attempts} attempts`)
}


