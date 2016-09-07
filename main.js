//`main.js` will contain the logic of your app. Running it in Terminal/Bash will start the game.
var inquirer=require('inquirer');
var Game= require('./game.js');
var game = new Game();


function initHangman() {
	game.startNewGame();
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
				if(value.lenth===1&&validInputs.test(value)){
					return true;
				}

				return	"Please enter a new valid guess (letters a-z or numbers 0-9):"
			}
		}
	]).then(function(answer){
		var userGuess= answer.userGuess.toLowerCase();
		if(game.lettersUsed.indexof(userGuess)===-1){
			game.lettersUsed.push(userGuess);
			var correct = game.word.checkLetterInput(userGuess);
			if(correct){
				game.printresults("youGuess correct")
			}
			else{
				game.guessRemaining--;
				game.printresults("wrong")
			}
		}
		else{

		}
		var userWon = game.word.getDisplayWord()===game.word.getTargetWord();

		if(userWon){
			game.wins++;
			endCurrentGame("youWOn");

		}
		else if(game.guessRemaining>0){
			promptAndProcessInput()
		}
		else{
			endCurrentGame("game over!");
		}
	})
}

function endCurrentGame(string){
	
}
initHangman();