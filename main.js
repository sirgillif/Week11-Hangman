/*
	Hangman Game Play through

	- Start Game
	- Welcome the user
	- display the banks of the word
	- ask the user to enter a guess.
	-- check to see if the user already made the guess
	-- check to see if the guess is a valid character

 	-- Check to see if the guess is in the word

	- if the guess is correct
	-- make the appropriate changes to the word that displays
 	-- display the word
 	-- ask for a new guess

	- if the guess is not correct
	-- take away a guess number
	-- check to see if the guesses remaining is zero
	--- if guesses is greater then zero keep asking for more guesses
	--- if the guesses remaining is zero end the game
	--- ask the user if they'd like to play again

 */
//`main.js` will contain the logic of your app. Running it in Terminal/Bash will start the game.
var inquirer=require('inquirer');
var Game= require('./game.js');
var game = new Game();

//- Start Game
function initHangman() {
	//- Welcome the user
	game.startNewGame();
	//- display the banks of the word
	game.word.displayWord();

	//below is a test to make sure if there is a letter in the guessed array it will be caught
	//game.lettersGuessed.push('a');

	//- ask the user to enter a guess.
	promptAndProcessInput();
}

function promptAndProcessInput() {
	inquirer.prompt([
		{
			type:"input",
			name:"userGuess",
			message:"Enter a guess (letters a-z or numbers 0-9)",
			validate:function(value){
				var validInputs= /[a-z]|[0-9]/i;
				//this checks to make sure the inputs are valid alphanumeric characters
				if(value.length===1&&validInputs.test(value)){
					//this check to see if the letter has een guessed already
					if(game.lettersGuessed.length>0) {
						//console.log("got here!")
						for (var items in game.lettersGuessed) {
							//console.log(game.lettersGuessed[items])
							if (value.toLowerCase() === game.lettersGuessed[items]) {
								return "This character has already been chosen.\nPlease enter a valid guess (letters a-z or numbers 0-9):"
							}
						}
					}
					return true;
				}

				return	"Please enter a valid guess (letters a-z or numbers 0-9):"
			}
		}
	]).then(function(answer){
		//- Check to see if the guess is in the word
		console.log(answer.userGuess);
		if(game.word.checkLetters(answer.userGuess)){
			//console.log("Correct");
			// -- display the word
			game.word.displayWord();
			// -- ask for a new guess
			if(game.word.isGuessed()){
				winGame();
			}
			else {
				promptAndProcessInput();
			}
		}
		else{
			game.guessRemaining--;
			console.log("Guesses Remaining: "+game.guessRemaining);
			if(game.guessRemaining<=0){
				loseGame();
			}
			else{
				promptAndProcessInput();
			}
		}

	})
}

function winGame(){

}
function loseGame(string){

}
initHangman();