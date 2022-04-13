function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber){
        case 0:
            return "paper";
            break;
        case 1:
            return "rock";
            break;
        case 2:
            return "scissors";
            break;
    }
}

let playerSlection = prompt('Enter: ').toLowerCase();

let computerSelection = computerPlay();

function playRound(playerSlection, computerSelection) {
    switch(playerSlection){
        case "paper":
            switch(computerSelection){
                case "paper":
                    return "tie";
                case "rock":
                    return "Win";
                case "scissors":
                    return "Lose";
            }
        case "rock":
            switch(computerSelection){
                case "paper":
                    return "Lose";
                case "rock":
                    return "tie";
                case "scissors":
                    return "Win";
            }
        case "scissors":
            switch(computerSelection){
                case "paper":
                    return "Win";
                case "rock":
                    return "Lose";
                case "scissors":
                    return "tie";
            }

    } 
}
console.log(computerSelection);
console.log(playerSlection);
console.log(playRound(playerSlection, computerSelection));