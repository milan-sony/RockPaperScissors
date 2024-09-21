// UI variables
const rockBtn = document.getElementById('rockBtn')
const paperBtn = document.getElementById('paperBtn')
const scissorsBtn = document.getElementById('scissorsBtn')

let userChooseIcon = document.getElementById('userChooseIcon')
let computerChooseIcon = document.getElementById('computerChooseIcon')

let dispUserScore = document.getElementById('dispUserScore')
let dispComputerScore = document.getElementById('dispComputerScore')

let scoreInfo = document.getElementById('scoreInfo')
let scoreMsg = document.getElementById('scoreMsg')

let userchoice = ''
let computerchoice = ''

let userScore = 0
let computerScore = 0


const icons = [
    "./assets/facepunch.png",
    "./assets/raised_back_of_hand.png",
    "./assets/v.png"
]


// Button click
rockBtn.addEventListener('click', () => getUserChoice('ROCK'))
paperBtn.addEventListener('click', () => getUserChoice('PAPER'))
scissorsBtn.addEventListener('click', () => getUserChoice('SCISSORS'))


// Get user choice
function getUserChoice(playerSelection) {
    if (playerSelection === 'ROCK') {
        console.log("User: Rock")
        userChooseIcon.src = icons[0]
        userchoice = 'ROCK'
        getComputerChoice()
    } if (playerSelection === 'PAPER') {
        console.log("User: Paper")
        userChooseIcon.src = icons[1]
        userchoice = 'PAPER'
        getComputerChoice()
    } if (playerSelection === 'SCISSORS') {
        console.log("User: Scissors")
        userChooseIcon.src = icons[2]
        userchoice = 'SCISSORS'
        getComputerChoice()
    }
}


// Check whether the user choice any, if yes comp will choose one
if (getUserChoice() != "") {
    function getComputerChoice() {
        let randomNumber = Math.floor(Math.random() * 3)
        switch (randomNumber) {
            case 0:
                console.log("Comp: Rock")
                computerChooseIcon.src = icons[0]
                computerchoice = 'ROCK'
                break
            case 1:
                console.log("Comp: Paper")
                computerChooseIcon.src = icons[1]
                computerchoice = 'PAPER'
                break
            case 2:
                console.log("Comp: Scissors")
                computerChooseIcon.src = icons[2]
                computerchoice = 'SCISSORS'
                break
        }
        playRound()
    }
}


function playRound() {

    if (userchoice === 'ROCK' && computerchoice === 'SCISSORS' ||
        userchoice === 'SCISSORS' && computerchoice === 'PAPER' ||
        userchoice === 'PAPER' && computerchoice == 'ROCK') {
        userScore++
        dispUserScore.innerText = "You: " + userScore
    }
    if (computerchoice === 'ROCK' && userchoice === 'SCISSORS' ||
        computerchoice === 'SCISSORS' && userchoice === 'PAPER' ||
        computerchoice === 'PAPER' && userchoice == 'ROCK') {
        computerScore++
        dispComputerScore.innerText = "Computer: " + computerScore
    }

    console.log('User choice', userchoice, 'Computer choice', computerchoice)
    console.log("User Score: ", userScore, "Comp Score: ", computerScore)

}