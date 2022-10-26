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
	winningNum = Math.floor(Math.random() * 10 + 1),
	guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
	minNum = document.querySelector('.min-num'),
	maxNum = document.querySelector('.max-num'),
	guessBtn = document.querySelector('#guess-btn'),
	guessInput = document.querySelector('#guess-input'),
	message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play Again
game.addEventListener('mouseup', () => {
	if (guessBtn.value === 'Play Again') {
		window.location.reload();
	}
});

// Guess Button Event Listener
guessBtn.addEventListener('click', () => {
	let guess = parseInt(guessInput.value);
	console.log(guess);

	if (isNaN(guess) || guess < min || guess > max) {
		setMessage(`Please enter a number between ${min} and ${max}`, 'red');
	}

	if (guess === winningNum) {
		gameOver(
			true,
			`${winningNum} is correct! You are a winner! (but still a fucking loser)`
		);
	} else {
		// Wrong Number
		guessesLeft -= 1;
		setMessage(
			`${guess} is the wrong number, guess again, you have ${guessesLeft} guesses left`,
			'red'
		);

		if (guessesLeft === 0) {
			gameOver(
				false,
				`Game Over, You Lost! The Correct number was ${winningNum}`
			);

			guessBtn.value = 'Play Again';
			guessBtn.style.background = 'red';
			guessBtn.style.color = 'white';
		}
	}
});

const gameOver = (won, msg) => {
	let color;
	won === true ? (color = 'green') : (color = 'red');
	guessInput.disabled = true;
	guessInput.style.borderColor = color;
	message.style.color = color;
	setMessage(msg);
};

// Set Message
const setMessage = (msg, color) => {
	message.style.color = color;
	message.textContent = msg;
};

console.log(winningNum);
