/**
 * GUESSING GAME:
 *
 * Created By: Lindsay Lambert
 * Date: 5 May 21, 2014
 * 
 * GUESSING GAME
 */

//Game variables
(function ()
{
	var playerGuess=0;
	var guessesLeft=3;
	var guessesSoFar=0;
//DOM elements
var DOM={
	input:document.querySelector("#input"),
	output:document.querySelector("#output"),
	button:document.querySelector("button")
};	
//Letting computer pick a random number
var magicNumber=Math.floor((Math.random()*10)+1);
//Using a function to respond to the users' clicks with console log
var clickFunction=function(e){
	console.log(guessesLeft);
	validatePlayerInput();
};
//Since the the guesses, or users' input, are clicks, we have to validate and call the timeToPlay() function
var validatePlayerInput=function(){
	playerGuess
}









}

})();