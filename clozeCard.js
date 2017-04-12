var ClozeCard = function(text, cloze) {
	if (!(this instanceof ClozeCard)) { 
		return new ClozeCard(front, back);
	} 
	this.text = text;
	this.cloze = cloze;
}

ClozeCard.prototype.showAnswer = function() {
	console.log(this.cloze);
};

ClozeCard.prototype.showFull = function() {
	console.log(this.cloze + " " + this.text);
};

ClozeCard.prototype.checkAnswer = function(guess) {
	if (guess === this.cloze) {
		console.log("Well, aren't you are smartie.")
	} else {
		console.log("Guess we can't all be winners.");
	}
};

module.exports = ClozeCard;