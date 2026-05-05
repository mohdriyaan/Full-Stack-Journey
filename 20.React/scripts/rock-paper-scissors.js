let result = ''

function pickComputerMove() {
  const randomNum = Math.random();
  let computerMove = ""
  if (randomNum >= 0 && randomNum < 1 / 3) {
    computerMove = `Rock`
  } else if (randomNum >= 1 / 3 && randomNum < 2 / 3) {
    computerMove = `Paper`
  } else if (randomNum >= 2 / 3 && randomNum < 1) {
    computerMove = `Scissors`
  }
  return computerMove
}

let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  loses: 0,
  ties: 0
}

showResult()
updateScoreElement()

function showResult() {
  document.querySelector(".js-result").innerHTML = `${result}`
}

function updateScoreElement() {
  document.querySelector(".js-score").innerHTML = `Wins: ${score.wins}, Losses: ${score.loses}, Ties: ${score.ties}`
}

document.querySelector(".rock-btn").addEventListener("click", () => {
  playGame("Rock")
})

document.querySelector(".paper-btn").addEventListener("click", () => {
  playGame("Paper")
})

document.querySelector(".scissor-btn").addEventListener("click", () => {
  playGame("Scissors")
})

document.querySelector(".reset-score").addEventListener("click", () => {
  confirm()
})

document.querySelector(".auto-btn").addEventListener("click", () => {
  autoPlay()
})

document.body.addEventListener("keydown", (event) => {
  if (event.key === "a" || event.key === "A") {
    autoPlay()
  }
})

document.body.addEventListener("keydown", (event) => {
  if (event.key === "Backspace") {
    confirm()
  }
})

document.body.addEventListener("keydown", (event) => {
  if (event.key === "r" || event.key === "R") {
    playGame("Rock")
  } else if (event.key === "p" || event.key === "P") {
    playGame("Paper")
  } else if (event.key === "s" || event.key === "S") {
    playGame("Scissors")
  }
})

function playGame(playerMove) {
  const computerMove = pickComputerMove()
  if (playerMove == "Rock") {
    if (computerMove === 'Rock') {
      result = 'Tie'
    } else if (computerMove === 'Paper') {
      result = 'You lost'
    } else if (computerMove === 'Scissors') {
      result = 'You win'
    }
  } else if (playerMove == "Paper") {
    if (computerMove === 'Rock') {
      result = 'You win'
    } else if (computerMove === 'Paper') {
      result = 'Tie'
    } else if (computerMove === 'Scissors') {
      result = 'You lost'
    }
  } else if (playerMove === "Scissors") {
    if (computerMove === 'Rock') {
      result = 'You lost'
    } else if (computerMove === 'Paper') {
      result = 'You win'
    } else if (computerMove === 'Scissors') {
      result = 'Tie'
    }
  }

  showResult()

  document.querySelector(".js-moves").innerHTML = `You
    <img src="images/${playerMove}-emoji.png" class="move-icon" alt="">
    <img src="images/${computerMove}-emoji.png" class="move-icon" alt="">
    Computer`

  if (result === "You win") {
    score.wins += 1
  } else if (result === "You lost") {
    score.loses += 1
  } else if (result === "Tie") {
    score.ties += 1
  }

  localStorage.setItem("score", JSON.stringify(score))

  updateScoreElement()
}

let isAutoPlaying = false
let setIntervalId

function autoPlay() {
  if (!isAutoPlaying) {
    document.querySelector(".auto-btn").innerHTML = "Stop"
    const playerMove = pickComputerMove()
    setIntervalId = setInterval(() => {
      playGame(playerMove)
    }, 1000)
    isAutoPlaying = true
  } else {
    clearInterval(setIntervalId)
    isAutoPlaying = false
    document.querySelector(".auto-btn").innerHTML = "Auto Play"
  }
}

function resetScore() {
  score.wins = 0;
  score.loses = 0;
  score.ties = 0;

  document.querySelector(`.js-result`).innerHTML = ''
  document.querySelector(`.js-moves`).innerHTML = ''
  updateScoreElement()

  localStorage.removeItem(`score`)
}

let resetStatus = false

function confirm() {
  if (!resetStatus) {
    let htmlText = `<p>Are you sure you want to reset the score? <button class="confirm-yes">Yes</button> <button class="confirm-no">No</button></p>`

    const mssg = document.querySelector(".confirm-mssg")
    mssg.innerHTML += htmlText

    resetStatus = true

    document.querySelector(".confirm-yes").addEventListener("click", () => {
      resetScore()
      mssg.innerHTML = ""
      resetStatus = false
      return;
    })
    
    document.querySelector(".confirm-no").addEventListener("click", () => {
      mssg.innerHTML = ""
      resetStatus = false
      return;
    })
  }


}