
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 10;
var guessedLetters = [];
var letterToGuess = null;



//The computer selects a random letter 
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//Allows 9 guesses
var updateGuessesLeft = function() {

  document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessesLeft;
};

var updateLetterToGuess = function() {
  this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};
var updateGuessesSoFar = function() {
  // Take the guesses the user has tried & display it as letters separated by commas. 
  document.querySelector('#let').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};
// Function will be called when we reset everything
var reset = function() {
  totalGuesses = 10;
  guessesLeft = 10;
  guessedLetters = [];

  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
}

updateLetterToGuess();
updateGuessesLeft();


//When key is released it becomes the users guess
document.onkeyup = function(event) {
    guessesLeft--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  guessedLetters.push(userGuess);
  updateGuessesLeft();
  updateGuessesSoFar();

        if (guessesLeft > 0){
            if (userGuess == letterToGuess){
                wins++;
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                alert("You are psychic! You win!");
                reset();
            }
        }else if(guessesLeft == 0){
            // Update the html to display the loss 
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            alert("Sorry, you are not a psychic!");
            // Call the reset. 
            reset();
        }
};