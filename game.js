// `game.js` file will randomly select a word for the player.
var word= require('./word.js');

var wordBank=['word1','word-2','word3','word-5'];

function Game() {
	this.wins=0;
	this.losses=0;
	this.guessRemaining=0;
	this.lettersUsed=[];
	this.word=null;

	this.startNewGame =function(){
		this.guessRemaining=10;
		this.lettersUsed=[];
		this.word=this.genetrateRandomWord();
		console.log("Welcome to Hangman!");
	}
	this.genetrateRandomWord=function(){
		var length =wordBank.length
		var randWord=wordBank[Math.floor(Math.random()*length)];
		var currentWord= new Word(randWord);
		return currentWord;
	}
	this.printResults = function(){
		//print results between guesses.
	}
	this.endGame=function(){
		//print results after the game is over
	}
}
module.exports= Game;