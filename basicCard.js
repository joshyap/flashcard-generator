var BasicCard = function(front, back) {
	
	if (!(this instanceof BasicCard)) { 
		return new BasicCard(front, back);
	} 
	this.front = front;
	this.back = back;
};

BasicCard.prototype.askQuestion = function() {
	console.log(this.front);
};

BasicCard.prototype.checkAnswer = function(userAnswer) {
	if (userAnswer === this.back) {
		console.log("Bing!");
	} else {
		console.log("Wrong! Study harder next time.");
	}
};

BasicCard.prototype.showAnswer = function() {
	console.log(this.back);
};

module.exports = BasicCard;