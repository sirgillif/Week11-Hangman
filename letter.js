// `letter.js` should control whether or not a letter appears as a "_" or as itself on-screen.
function Letter(character){
	
	this.character=character;
	this.placeholder= '_;
	this.guessed=false;
	this.getCharacter = function(){
		var char = ' ';
		if(this.guessed){
			char= this.character;
		}
		else{
			char=this.placeholder;
		}

		return char;
	}
}

module.export = Letter;