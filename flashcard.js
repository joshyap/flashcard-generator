var inquirer = require("inquirer");
var BasicCard = require("./basicCard.js");
var ClozeCard = require("./clozeCard.js");

function flashcard() {

    inquirer.prompt([
      {
        type: "list",
        name: "front",
        message: "What kind of flashcard do you want to make?",
        choices: ["Basic", "Cloze"]
      }]).then((card) => {
	if (card.type === "Basic Card") {
		inquirer.prompt([
		{
			type: "input",
			name: "question",
			message: "What's on the front?"
		},
		{
			type: "input",
			name: "answer",
			message: "What's on the back?"
		}]).then((card) => {
			let newCard = new BasicCard(card.question, card.answer);
			console.log(newCard);
		});
	} else {
		inquirer.prompt([
		{
			type: "input",
			name: "cloze",
			message: "What is the cloze deletion (i.e. the part you want to remember)?"
		},
		{
			type: "input",
			name: "text",
			message: "What's the rest of the phrase (i.e. without the cloze deletion)?"
		}]).then((card) => {
			let newCard = new ClozeCard(card.text, card.cloze);
			console.log(newCard);
		});
	}
});
      
}

flashcard();