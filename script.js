const buttons = document.querySelectorAll('.theButton');
const start_btn = document.querySelector('.start');
let win_times = 0;
let lose_times = 0;



start_btn.addEventListener("click", game_start);

	
function game_start(){
    win_times = 0;
    lose_times = 0;
    buttons.forEach(button => button.addEventListener('click', getPlayerChoice));
}

function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber){
        case 0:
            return "paper";

        case 1:
            return "rock";

        case 2:
            return "scissors";

    }
}

function playRound(playerSlection, computerSelection) {

    let result = "";
    console.log(playerSlection);
    switch(playerSlection){
        case "paper":
            switch(computerSelection){
                case "paper":
                    result = "tie";
                    break;
                case "rock":
                    result = "Win";
                    break;
                case "scissors":
                    result = "Lose";
                    break;
            }break;
        case "rock":
            switch(computerSelection){
                case "paper":
                    result = "Lose";
                    break;
                case "rock":
                    result = "tie";
                    break;
                case "scissors":
                    result = "Win";
                    break;
            }break;
        case "scissors":
            switch(computerSelection){
                case "paper":
                    result = "Win";
                    break;
                case "rock":
                    result = "Lose";
                    break;
                case "scissors":
                    result = "tie";
                    break;
            }break;
    }
    console.log(result);
    check_Winner(result); 
}

function check_Winner(result){
    
    switch(result){
        case "Win":
            win_times += 1;
        case "Lose":
            lose_times += 1;
    }
    console.log(win_times);
    if (win_times === 5 || lose_times === 5){
        if (win_times >= lose_times){
            console.log("You win");
        }else {console.log('You Lose');}
        game_start();
    }
}
function getPlayerChoice(e){
    
    let playerSlection= e.target.textContent;
    playRound(playerSlection, computerPlay());
    
}


