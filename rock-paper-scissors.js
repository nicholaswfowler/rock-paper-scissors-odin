function getUserChoice(){
    let userChoice = prompt('Rock, Paper, or Scissors?');
    userChoice = (userChoice.toLowerCase());
    let firstLetter = userChoice.charAt(0);
    userChoice = firstLetter.toUpperCase() + userChoice.substring(1);
    if(userChoice == 'Rock'){
        return userChoice;
    }
    else if(userChoice == 'Paper'){
        return userChoice;
    }
    else if(userChoice == 'Scissors'){
        return userChoice;
    }
    else{
        alert('Please use a valid answer. (Rock, Paper, Scissors)');
        getUserChoice();
    }
}

function getComputerChoice(){
    let number = Math.floor(Math.random() * 3);
    let options = ['Rock', 'Paper', 'Scissors']
    return options[number];
}

let userChoice = getUserChoice();
let computerChoice = getComputerChoice()

function playRound(user, cpu){
    if(user == 'Rock' && cpu == 'Scissors'){
        alert(`${user} beats ${cpu}, YOU WIN!!`);
        user = getUserChoice();
        cpu = getComputerChoice();
        playRound(user, cpu);
    }
    else if(user == 'Paper' && cpu == 'Rock'){
        alert(`${user} beats ${cpu}, YOU WIN!!`);
        user = getUserChoice();
        cpu = getComputerChoice();
        playRound(user, cpu);
    }
    else if(user == 'Scissors' && cpu == 'Paper'){
        alert(`${user} beats ${cpu}, YOU WIN!!`);
        user = getUserChoice();
        cpu = getComputerChoice();
        playRound(user, cpu);
    }
    else if(user == cpu){
        alert('Tie Game, try Again.');
        user = getUserChoice();
        cpu = getComputerChoice();
        playRound(user, cpu);
    }
    else{
        alert(`${cpu} beats ${user}, YOU LOSE!!`);
        user = getUserChoice();
        cpu = getComputerChoice();
        playRound(user, cpu);    
    }
}

playRound(userChoice, computerChoice);