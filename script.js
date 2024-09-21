// UI variables
const rockBtn = document.getElementById('rockBtn')
const paperBtn = document.getElementById('paperBtn')
const scissorsBtn = document.getElementById('scissorsBtn')

let userChooseIcon = document.getElementById('userChooseIcon')
let computerChooseIcon = document.getElementById('computerChooseIcon')

let scoreInfo = document.getElementById('scoreInfo')
let scoreMsg = document.getElementById('scoreMsg')

const icons = [
    "./assets/facepunch.png",
    "./assets/raised_back_of_hand.png",
    "./assets/v.png"
]


// Button click
rockBtn.addEventListener('click', () => getHumanChoice('ROCK'))
paperBtn.addEventListener('click', () => getHumanChoice('PAPER'))
scissorsBtn.addEventListener('click', () => getHumanChoice('SCISSORS'))


function getHumanChoice(playerSelection) {
    if (playerSelection === 'ROCK') {
        console.log("User: Rock")
        userChooseIcon.src = icons[0]
        getComputerChoice()
        return 'ROCK'
    } else if (playerSelection === 'PAPER') {
        console.log("User: Paper")
        userChooseIcon.src = icons[1]
        getComputerChoice()
        return 'PAPER'
    } else if (playerSelection === 'SCISSORS') {
        console.log("User: Scissors")
        userChooseIcon.src = icons[2]
        getComputerChoice()
        return 'SCISSORS'
    } else {
        console.log("None Choose")
    }

}

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
        case 0:
            console.log("Comp: Rock")
            computerChooseIcon.src = icons[0]
            return 'ROCK'
        case 1:
            console.log("Comp: Paper")
            computerChooseIcon.src = icons[1]
            return 'PAPER'
        case 2:
            console.log("Comp: Scissors")
            computerChooseIcon.src = icons[2]
            return 'SCISSORS'
    }

}



