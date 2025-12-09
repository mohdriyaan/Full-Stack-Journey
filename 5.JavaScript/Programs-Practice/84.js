// Javascript Program to Generate a Random Number Between Two Numbers

function randomNum(min,max){
    // from 1 to 10
    console.log(Math.floor(Math.random()*max-min+1)+min)
}

function randomNum1(min,max){
    // between 1 to 10
    console.log(Math.floor(Math.random()*(max-min))+(min+1))
}

randomNum(1,10)
randomNum1(1,10)
