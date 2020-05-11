
function computerPlay() { 
    const MOVES = ["rock", "paper", "scissors"]; 
    return MOVES[Math.floor(Math.random() * 3)];
}

function playRound() { 
    const playerSelection = this.id; 
    const computerSelection = computerPlay(); 
    const message = document.querySelector("#message"); 
 
    if (playerSelection == computerSelection) { 
        message.textContent = "Tie!"; 
    } else if (playerSelection == "rock") { 
        if ( computerSelection == "scissors") { 
            message.textContent = "You Win! Rock beats scissors.";
            return 1;
        } else { 
            message.textContent = "You Lose! Paper beats rock.";
            return 0;
        }
    } else if (playerSelection == "paper") { 
        if ( computerSelection == "rock") { 
            message.textContent = "You Win! Paper beats rock.";
            return 1;
        } else { 
            message.textContent = "You Lose! Scissors beats paper.";
            return 0;
        }
    } else if (playerSelection == "scissors") { 
        if ( computerSelection == "paper") { 
            message.textContent = "You Win! Scissors beats paper.";
            return 1;
        } else { 
            message.textContent = "You Lose! Rock beats scissors.";
            return 0; 
        }
    }
}

const buttons = document.querySelectorAll("button"); 

buttons.forEach((button) => { 
    button.addEventListener("click", playRound); 
})