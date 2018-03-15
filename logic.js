var fruitsList = ['banana', 'strawberry', 'mango'];

var chosenWord = '';

var lettersInChosenWord = [];

var numBlanks = 0;

var blanksAndSuccesses = [];

var wrongGuesses =[];

var letterGuessed = '';

var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;









function startGame() {
	
	numGuesses = 9;
	chosenWord = fruitsList[Math.floor(Math.random() * fruitsList.lenght)];
	lettersInChosenWord = chosenWord.split('');       //come back here
	numBlanks = lettersInChosenWord.lenght;
	console.log(chosenWord);

}