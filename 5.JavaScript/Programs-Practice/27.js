// JavaScript Program to Guess a Random Number

function guessNumber(){
    let low = parseInt(prompt("Enter the lowest number: "))
    if(isNaN(low)){
        guessNumber()
    }

    let high = parseInt(prompt("Enter the highest number: "))
    
    while(isNaN(high)){
        high = parseInt(prompt("Enter the highest number: "))
    }

    let attempts = 1

    const guess = Math.floor(Math.random()*(high-low)+low)

    let guessNumber = parseInt(prompt("Enter the guess number.."))

    while(isNaN(guessNumber)){
        guessNumber=parseInt(prompt("Enter the guess number again.."))
    }

    while(guessNumber!==guess){
        if(guessNumber<guess){
            guessNumber=parseInt(prompt(`Incorrect Guess. The number you have guessed is lower. Try for the higher number..`))
            attempts++
        }else if(guessNumber>guess){
            guessNumber=parseInt(prompt(`Incorrect Guess. The number you have guessed is higher. Try for the lower number..`))
            attempts++
        }
    }
    
    console.log(`The Guess is Correct... You have guessed the number at ${attempts} attempts..`)
}




guessNumber()

