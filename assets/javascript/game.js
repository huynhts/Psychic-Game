//generate a random letter for user to guess, limit guesses, keep track of wins and losses, reset game on win/loss

//global variables:
var wins = 0;
var losses = 0;
var guesses = 9;
var userGuessed = [];
var cpuLetter = "";

//points to ID to edit content in HTML document.
var wCounter = document.getElementById("win-counter");
var lCounter = document.getElementById("loss-counter");
var remainingGuesses = document.getElementById("remaining");
var currentGuess = document.getElementById("current-guess");

//this function randomly generates a letter.
function randomLetter() {
    var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

    cpuLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    return cpuLetter;
}

randomLetter();
//console.log(cpuLetter);

// This function runs whenever user presses a key to initiate game
document.onkeyup = function(letterPressed) {

//Determines which key was pressed
if (letterPressed.keyCode >= 65 && letterPressed.keyCode <=90){
    var userGuess = letterPressed.key;
    console.log(userGuess);
    userGuessed.push(" " + userGuess); 
    } else {
        alert("Please choose a letter between a to z");
        guesses++;
    };

    //if user wins by guessing correctly, add 1 to win, reset guess counter, reset guesses, call randomLetter function for new cpuLetter.
    if (userGuess === cpuLetter){
        wins++;
        userGuessed = []; 
        guesses = 9;
        cpuLetter="";
        randomLetter();
        //console.log(cpuLetter); 
    } else {
        guesses--;
            if (guesses === 0){
            losses++;
            guesses = 9;
            userGuessed = [];
            cpuLetter="";
            randomLetter();
            //console.log(cpuLetter); 
            }  
    }

    wCounter.textContent = "Wins: " + wins;
    lCounter.textContent = "Losses: " + losses;
    remainingGuesses.textContent = "Guesses Left: " + guesses;
    currentGuess.textContent = "Your Current Guesses: " + userGuessed;

}


