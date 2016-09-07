//`word.js` should contain all of the methods which will check the letters guessed versus the random word selected.
var letter= require("./letter.js");
var regEx= /[a-z]|[0-9]/i;

function Word(target){
	this.target=target;
	this.trgtWordArray= this.target.toLowerCase().split();
	this.dispWordArray= this.generateDisplayWord();
	this.generateDisplayWord= function(){
		var letterArray=[];
		for(var i; i< this.target.length;i++){
			if(regEx.test(this.target[i])){
				letterArray.push( new letter(this.target[i].toLowerCase()));
			}
			else{
				letterArray.push(this.target[i]);
			}
		}
		return letterArray;
	}
	this.chckLetterInput = function(letter){
		var isCorrect = false;
		for (var index in  this.trgtWordArray) {
			if (letter.toLowerCase()===this.trgtWordArray[i]) {
				this.dispWordArray[index].guessed = true;
				isCorrect=true;
			}		
		}
		return isCorrect;
	}
	this.getTrgtWord=function(){
		return this.trgtWordArray.join('');
	}
	this.getDispWordArray=function(){
		var display='';
		for (var index in this.dispWordArray) {
			if(regEx.test(this.dispWordArray[index])){
				display+=this.dispWordArray[index].getCharacter();
			}
			else{
				display+=this.dispWordArray[index];
			}
		}
		return display;

	}
}

module.export = Word;