function getComputerChoice(){
    let choice = Math.floor((Math.random() * 3) + 1)
    if(choice == 1){
        return "paper";
    } else if(choice == 2){
        return "rock";
    } else if(choice == 3){
        return "scissors";
    }
}

function playerRound(computerChoice, playerChoice){
    computerChoice = computerChoice.toUpperCase()
    playerChoice = playerChoice.toUpperCase()
    if(computerChoice == playerChoice){
        return "draw"
    } else if(computerChoice == "PAPER" && playerChoice == "ROCK"){
        return "You Lose!"
    } else if(computerChoice == "ROCK" && playerChoice == "SCISSORS"){
        return "You Lose!"
    } else if(computerChoice == "SCISSORS" && playerChoice == "PAPER"){
        return "You Lose!"
    }else{
        return "You Win!"
    }
}

let buttonsChoices = document.querySelectorAll(".choice")
let buttonsStart = document.querySelectorAll(".start")

let placar = document.querySelector("#placar")


function playGame(){
    let computerScore = 0
    let playerScore = 0
    let playerChoice = ""
    document.querySelector("#player-score").innerHTML = playerScore.toString()
    document.querySelector("#computer-score").innerHTML = computerScore.toString()
        buttonsChoices.forEach(button => {
            button.addEventListener("click", function(){
                if(computerScore >= 5 || playerScore >= 5){
                    computerScore = 0
                    playerScore = 0
                    document.querySelector("#player-score").innerHTML = playerScore.toString()
                    document.querySelector("#computer-score").innerHTML = computerScore.toString()
                }
                playerChoice = this.textContent
                let computerChoice = getComputerChoice()
                if(playerRound(computerChoice, playerChoice) == "You Win!"){
                    playerScore++
                    document.querySelector("#player-score").innerHTML = playerScore.toString()
                }else if(playerRound(computerChoice, playerChoice) == "You Lose!"){
                    computerScore++
                    document.querySelector("#computer-score").innerHTML = computerScore.toString()
                }else {
                    computerScore++
                    playerScore++
                    document.querySelector("#player-score").innerHTML = playerScore.toString()
                    document.querySelector("#computer-score").innerHTML = computerScore.toString()
                }
                if(computerScore == 5 || playerScore == 5){
                    if(computerScore > playerScore){
                        document.querySelector("#resultado").innerHTML = "You Lose!"
                        return
                        }else if(playerScore > computerScore){
                        document.querySelector("#resultado").innerHTML = "You win!"
                        return
                        }else {
                        document.querySelector("#resultado").innerHTML = "Draw in the game!"
                        return
                        }
                }
                document.querySelector("#resultado").innerHTML = " "
            })})    
    } 

playGame()