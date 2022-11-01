/* GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining 
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

// Game values
let min = 1,
	max = 10,
	winningNum = Math.floor(Math.random() * max + min),
	guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
	minNum = document.querySelector('.min-num'),
	maxNum = document.querySelector('.max-num'),
	guessInput = document.querySelector('#guess-input'),
	guessBtn = document.querySelector('#guess-btn'),
	message = document.querySelector('.message'),
	header = document.querySelector('.header');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play Again
guessBtn.addEventListener('mouseup', (e) => {
	if (e.target.className === 'play-again') {
		window.location.reload();
	}
});

// Guess Button Event Listener
guessBtn.addEventListener('click', () => {
	// Validate
	let guess = parseInt(guessInput.value);

	if (isNaN(guess) || guess < min || guess > max) {
		setMessage(`Please enter a number between ${min} and ${max}`, 'red');
	}

	if (guess === winningNum) {
		gameOver(true, `${winningNum} is correct! You won!!`);
	} else {
		guessesLeft -= 1;

		if (guessesLeft === 0) {
			gameOver(false, `Game Over!`);
		} else {
			guessInput.value = '';
			gameOver(
				false,
				`${guess} is the wrong number, you have ${guessesLeft} guesses left`
			);
		}
	}

	// Game continues = answer wrong
	// Check if won
	// Wrong number
	// Change border color
	// Clear Input
	// Tell user its the wrong number
});

// Game Over
const gameOver = (won, msg) => {
	won === true ? (color = 'green') : (color = 'red');
	won === true ? (header.textContent = 'Congratulations!!!') : 'LOSER!!!';
	guessInput.disabled = true;
	guessInput.style.borderColor = color;
	message.style.color = color;
	message.style.fontStyle = 'bold';
	guessBtn.value = 'Play Again';
	guessBtn.className = 'play-again';
	setMessage(msg);
};

// Set Message
const setMessage = (msg, color) => {
	message.textContent = msg;
	message.style.color = color;
};

// Set Message

console.log(winningNum);
