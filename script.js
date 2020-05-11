
function computerPlay() { 
    const MOVES = ["rock", "paper", "scissors"]; 
    return MOVES[Math.floor(Math.random() * 3)];
}

function playRound() { 
    const playerSelection = this.id; 
    const computerSelection = computerPlay(); 
    let message = document.querySelector("#message"); 
    let playerScore = document.querySelector("#player-score");
    let computerScore = document.querySelector("#computer-score"); 
    const playerScoreVal = parseInt(playerScore.textContent, 10);
    const computerScoreVal = parseInt(computerScore.textContent, 10); 
 
    console.log("clicked"); 

    if (playerSelection == computerSelection) { 
        message.textContent = "Tie!"; 
    } else if (playerSelection == "rock") { 
        if ( computerSelection == "scissors") { 
            message.textContent = "You Win! Rock beats scissors.";
            playerScore.textContent = playerScoreVal + 1;
        } else { 
            message.textContent = "You Lose! Paper beats rock.";
            computerScore.textContent = computerScoreVal + 1;
        }
    } else if (playerSelection == "paper") { 
        if ( computerSelection == "rock") { 
            message.textContent = "You Win! Paper beats rock.";
            playerScore.textContent = playerScoreVal + 1;
        } else { 
            message.textContent = "You Lose! Scissors beats paper.";
            computerScore.textContent = computerScoreVal + 1;
        }
    } else if (playerSelection == "scissors") { 
        if ( computerSelection == "paper") { 
            message.textContent = "You Win! Scissors beats paper.";
            playerScore.textContent = playerScoreVal + 1;
        } else { 
            message.textContent = "You Lose! Rock beats scissors.";
            computerScore.textContent = computerScoreVal + 1; 
        }
    }

    if (playerScore.textContent == "5" || computerScore.textContent == "5") {
        const buttonsDiv = document.querySelector(".buttons"); 
        const buttons = buttonsDiv.childNodes; 
        buttons.forEach((button) => { 
            button.removeEventListener("click", playRound); 
        });

        console.log("done!"); 
        if (playerScoreVal > computerScoreVal) { 
            message.textContent = "YOU WON THE GAME!";  

        } else { 
            message.textContent = "YOU LOST THE GAME."
        }
    }
}

function game() {
    const buttons = document.querySelectorAll("button"); 

    buttons.forEach((button) => { 
        button.addEventListener("click", playRound); 
    }); 
    
    
}

game(); 
