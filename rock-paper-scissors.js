function getComputerChoice(){
    let number = Math.floor(Math.random() * 3);
    let options = ['Rock', 'Paper', 'Scissors']
    return options[number];
}

const rock = document.querySelector('#rock');
rock.addEventListener("click", () =>{
    let computerChoice = getComputerChoice();
    playRound('Rock', computerChoice);
});
const paper = document.querySelector('#paper');
paper.addEventListener("click", () =>{
    let computerChoice = getComputerChoice();
    playRound('Paper', computerChoice);
});
const scissors = document.querySelector('#scissors');
scissors.addEventListener("click", () =>{
    let computerChoice = getComputerChoice();
    playRound('Scissors', computerChoice);
});

function playRound(user, cpu){
    const outcome = document.querySelector('#outcome');
    const winner = document.createElement('p');
    if(user == 'Rock' && cpu == 'Scissors'){
        rock.removeAttribute('background-color');
        winner.textContent = (`${user} beats ${cpu}, YOU WIN!!`);
        outcome.lastChild.remove();
        outcome.appendChild(winner);
    }
    else if(user == 'Paper' && cpu == 'Rock'){
        winner.textContent = (`${user} beats ${cpu}, YOU WIN!!`);
        outcome.lastChild.remove();
        outcome.appendChild(winner);
    }
    else if(user == 'Scissors' && cpu == 'Paper'){
        winner.textContent = (`${user} beats ${cpu}, YOU WIN!!`);
        outcome.lastChild.remove();
        outcome.appendChild(winner);
    }
    else if(user == cpu){
        winner.textContent = ('Tie Game, try Again.');
        outcome.lastChild.remove();
        outcome.appendChild(winner);
    }
    else{
        winner.textContent = (`${cpu} beats ${user}, YOU LOSE!!`);
        outcome.lastChild.remove();
        outcome.appendChild(winner);
    }
}



// playRound(userChoice, computerChoice);