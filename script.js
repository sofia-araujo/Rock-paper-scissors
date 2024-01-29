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

function playGame(playerChoice){
    let computerScore = 0
    let playerScore = 0
    for(i = 0; i < 5; i++){
        let playerChoice = prompt("Write your choice!")
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
        console.log("Round: " + (i + 1) + "\n" + "---- The score -----\nPlayer: " + playerScore + "\n"+ "Computer: " + computerScore)
    }
    if(computerScore > playerScore){
        return "You lose!"
    }else if(playerScore > computerScore){
        return "You Win!"
    }else {
        return "Draw in the game"
    }
}


console.log(playGame())