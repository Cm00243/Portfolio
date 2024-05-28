const words = [
    "beach", "charm", "empty", "flint", "giant", "haste", "knack",
    "lucky", "mirth", "novel", "party", "quick", "rival", "saint", "trend", "umbra", "vocal",
    "whirl", "xenon", "yield", "zesty"
];
const targetWord = words[Math.floor(Math.random() * words.length)];
let numGuesses = 0;
let previousGuesses = "";

function checkGuess() {
    const guess = document.getElementById("guessInput").value.toLowerCase();
    
    
    if (guess.length !== 5) {
        document.getElementById("feedback").textContent = "Please enter a word with exactly 5 letters.";
        return; 
    }
    
    numGuesses++;

    if (guess === targetWord) {
        document.getElementById("feedback").textContent = `Congratulations! You guessed the word "${targetWord}" in ${numGuesses} guesses.`;
        document.getElementById("guessInput").setAttribute("disabled", "disabled");
    } else {
        const feedback = generateFeedback(guess);
        previousGuesses += `Guess ${numGuesses}: ${guess} - ${feedback}<br>`;
        document.getElementById("previousGuesses").innerHTML = previousGuesses;
        document.getElementById("feedback").textContent = feedback;
    }
}

function generateFeedback(guess) {
    let feedback = "";
    for (let i = 0; i < guess.length; i++) {
        if (targetWord.includes(guess[i])) {
            if (guess[i] === targetWord[i]) {
                feedback += "🟩"; // Correct letter in the correct position
            } else {
                feedback += "🟨"; // Correct letter in the wrong position
            }
        } else {
            feedback += "🟥"; // Incorrect letter
        }
    }
    return feedback;
}