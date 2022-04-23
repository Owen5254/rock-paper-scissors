
	


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

function playRound () {

    let playerSlection = prompt('Enter: ').toLowerCase();
    let computerSelection = computerPlay();
    console.log('playing');
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

function game(){
    let win_times = 0;
    let lose_times = 0;
    
    // for (let i = 0; i < 5; i++){
    //     let player_select = playRound();

    //     if (player_select === "Win"){
    //         win_times += 1;
    //     }else if (player_select === "Lose") {
    //         lose_times += 1;
    //     }
    // }
    console.log(win_times);
    if (win_times > lose_times){
        return "You win";
    }else{
        return "You lose"
    }
}

function test(){
    alert('Element clicked through function!');
}


const buttons = document.querySelectorAll('.mybutton');
buttons.forEach(button => button.addEventListener('click', test));
