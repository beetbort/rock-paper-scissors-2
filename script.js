
function computerPlay() { 
    const MOVES = ["rock", "paper", "scissors"]; 
    return MOVES[Math.floor(Math.random() * 3)];
}

function playerPlay() {  
    const playerChoice = this.id; 
    if (playerChoice == "rock") { 
        console.log("rock"); 
    } else if (playerChoice == "paper") { 
        console.log("paper"); 
    } else if (playerChoice == "scissors") { 
        console.log("scissors"); 
    }
}


const buttons = document.querySelectorAll('button'); 

buttons.forEach((button) => { 
    button.addEventListener('click', playerPlay); 
})