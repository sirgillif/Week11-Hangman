// `game.js` file will randomly select a word for the player.
var Word= require('./word.js');

var wordBank=['word1','word-2'];

function Game() {
	//properties of the object
	//games should have wins losses
	//a way to keep track of the number of guess left
	//the current games word
	this.wins=0;
	this.losses=0;
	this.guessRemaining=0;
	this.lettersGuessed = [];
	this.word=null;
	//actions of the game
	//the game should be able to rest for replay ability
	this.startNewGame =function(){
		this.guessRemaining=10;
		this.lettersGuessed=[];
		this.word=this.generateRandWord();
		console.log("Welcome to Hangman!");
	};
	//game should generate a new random word object
	this.generateRandWord=function () {
		var randWord = wordBank[Math.floor(Math.random()*wordBank.length)];
		console.log(randWord);
		var newWord= new Word(randWord);
		newWord.generateGuessWord();
		return newWord;
	};
};

//
// var game=new Game();
// game.startNewGame();
// game.word.displayWord();

module.exports = Game;

