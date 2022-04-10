// Dice Game by Zade

// create button function that will perform the steps below
document.getElementById("enterGuess").addEventListener("click", rollDice);

// Variables
let playerInput = 0;
let playerResult = "";
let randomNumber = 0;

function rollDice(){

    let playerInput = document.getElementById("playerGuess").value;
    let playerGuess = parseInt(playerInput);
    console.log("Your Guess: " + playerGuess);

    if(playerGuess >= 1) {

        // roll the dice with 1-6 being the options to pick from
        const randomNumber = Math.floor(Math.random() * 6) + 1
        console.log('Random Number: ' + randomNumber);
        document.getElementById("diceResult").innerHTML = randomNumber;

        // compare player input to randomly drawn number
        if (playerGuess == randomNumber){
            console.log("You win!");
            document.getElementById("playerResult").innerHTML = "You Win!";
        } else {
            console.log("You Lose!");
            document.getElementById("playerResult").innerHTML = "You Lose!";
        }
    } else {
        console.log("Enter Valid Input");
        return;
    }
}