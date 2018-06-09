/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/

//Input: number
//Output: array


// create function shuffle to randomize every element in the array of "rock", "scissors", "paper"
// push the result of shuffle function into rockpaperscissor function

 

var rockPaperScissors = function (number) {
	var result = [];
	var choices = ['rock', 'paper', 'scissors'];

	var makeSeq = function(roundLeft, playSoFar) {
		if (roundLeft === 0) {
			result.push(playSoFar);
			return; 
		}
		for (var i = 0; i < choices.length; i++) {
			makeSeq(roundLeft - 1, playSoFar.concat(choices[i]));
		}
	}
	makeSeq(number, []);
	return result;
};


