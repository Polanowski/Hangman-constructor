var game = require("./hangman.js");
var wordCons = require("./words.js");
var letterCons = require("./letter.js");
var inquirer = require("inquirer");
var randoWord = game.randoWord;
var letterGuessed;
exports.letter;

var myWord = new wordCons.wordCons(game.randoWord);
var maxGuesses = 15;

function makeGuess(){
	console.log(myWord.toString());
	if (myWord.guessesMade.length >= maxGuesses){
		console.log('Should have used a masterball.');
	return; //Game over
	}
	inquirer.prompt([{
		name: 'letter',
		type: 'text',
		message: 'Enter a letter:',
		validate: function(str){
//			if (str.length != 1) return false;
			var regEx = new RegExp("^[a-zA-Z\s]{1,1}$");
			return regEx.test(str);
				}
		}]).then(function(letterInput){ //Game control
				var letter = letterInput.letter; 
				myWord.findLetter(letter); //Check
					if(myWord.isComplete()){ 
					console.log('Yes! It was ' + myWord.toString() + '!');
					return; //Winner
					}
				console.log('-------------------\n'); //If we are here the game did not end. Next guess.
				console.log('You have ' + (maxGuesses - myWord.guessesMade.length) + ' guesses left.')
				makeGuess(); //Recursive call
				}
  );
}

makeGuess(); //Start Game