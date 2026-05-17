let humanScore = 0
let computerScore = 0
let rounds = 1

function getComputerChoice(){
  let computerChoice 
  const rand = Math.floor(Math.random()*3)
  if(rand==0){
    computerChoice = "rock"
  }else if(rand==1){
    computerChoice = "paper"
  }else{
    computerChoice = "scissors"
  }
  return computerChoice
}

function getHumanChoice(){
  const input = prompt(`    Total Rounds : 5
    Round ${rounds}
    Enter your choice (rock, paper, scissors):  `)
  return input
}

function playRound(humanChoice,computerChoice){
  if(computerChoice==="rock"){
    if(humanChoice==="rock"){
      console.log("Tie! No winners in this round")
    }else if(humanChoice==="paper"){
      console.log("You win! Paper Beats Rock")
      humanScore++
    }else if(humanChoice==="scissors"){
      console.log("You lose! Rock Beats Scissors")
      computerScore++
    }
  }else if(computerChoice==="paper"){
    if(humanChoice==="rock"){
      console.log("You lose! Paper beats Rock")
      computerScore++
    }else if(humanChoice==="paper"){
      console.log("Tie! No winners in this round")
    }else if(humanChoice==="scissors"){
      console.log("You win! Scissors beats Paper")
      humanScore++
    }
  }if(computerChoice==="scissors"){
    if(humanChoice==="rock"){
      console.log("You win! Rock beats Scissors")
      humanScore++
    }else if(humanChoice==="paper"){
      console.log("You lose! Scissors beats Paper")
      computerScore++
    }else if(humanChoice==="scissors"){
      console.log("Tie! No winners in this round")
    }
  }
}

// playRound(humanSelection,computerSelection)

function playGame(){
  for(let i = rounds; i<=5; i++){
    const humanSelection = getHumanChoice().toLowerCase()
    const computerSelection = getComputerChoice()
    console.log(`You chose ${humanSelection}.`)
    console.log(`Computer chose ${computerSelection}.`)
    playRound(humanSelection,computerSelection)
    rounds++
  }
  console.log(`Computer Score: ${computerScore} | Your Score: ${humanScore}`)
}

playGame()




