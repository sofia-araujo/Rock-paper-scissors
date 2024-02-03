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

function playGame(){
    let computerScore = 0
    let playerScore = 0
    let playerChoice = ""
    let rock = document.querySelector("#rock")
    let paper = document.querySelector("#paper")
    let scissors = document.querySelector("#scissors")
    let buttons = document.querySelectorAll("button")
        buttons.forEach(button => {
            button.addEventListener("click", function(){
                playerChoice = this.textContent
                let computerChoice = getComputerChoice()
                if(playerRound(computerChoice, playerChoice) == "You Win!"){
                    playerScore++
                }else if(playerRound(computerChoice, playerChoice) == "You Lose!"){
                    computerScore++
                }else {
                    computerScore++
                    playerScore++
                }
                console.log("Player Choice: " + playerChoice + "\n" + "Computer Choice: " + computerChoice)
                console.log("Round: " + "\n" + "---- The score -----\nPlayer: " + playerScore + "\n"+ "Computer: " + computerScore) 
                if(computerScore == 5 || playerScore == 5){
                    if(computerScore > playerScore){
                        console.log("You Lose!")
                        return
                        }else if(playerScore > computerScore){
                        console.log("You win!")
                        return
                        }else {
                        console.log("Draw in the game!")
                        return
                        }
                }
            })})    
    } 
    
playGame()
