const buttons = document.querySelectorAll('.theButton');
const start_btn = document.querySelector('.start');



start_btn.addEventListener("click", game_start);
buttons.forEach(button => button.addEventListener('click', getPlayerChoice));
	


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

function check_Winner(){
    let win_times = 0;
    let lose_times = 0;
    
    // for ( var i=0; i<10; i++ ) {
        
    //     let result = playRound();
    //     if (win_times === 5 || lose_times === 5) break;
    //     else {
    //         if ( result === "Win"){
    //             win_times += 1;
    //             console.log('win');
    //         }else if ( result === "Lose") {
    //             lose_times += 1;
    //             console.log('lose');
    //         }
    //     }
    //     console.log(result);
    // }
    console.log(win_times);
    
    if (win_times > lose_times){
        return "You win";
    }else{
        return "You lose"
    }
}
function getPlayerChoice(e){

    let playerSlection= e.target.textContent;
    console.log(playerSlection);
    playRound(playerSlection, computerPlay());
}


