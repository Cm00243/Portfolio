let currentQuestionIndex = 0;
let score = 0;
let questions = [];

// Fetch quiz questions from the JSON file
fetch('quiz.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        questions = data;
        displayQuestion();
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });

function displayQuestion() {
    if (currentQuestionIndex < questions.length) {
        const question = questions[currentQuestionIndex];
        document.getElementById('question').textContent = question.question;
        const optionsContainer = document.getElementById('options');
        optionsContainer.innerHTML = '';
        question.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.onclick = () => checkAnswer(option);
            optionsContainer.appendChild(button);
        });
    } else {
        endQuiz();
    }
}

function checkAnswer(selectedOption) {
    const question = questions[currentQuestionIndex];
    if (selectedOption === question.answer) {
        score++;
    }
    document.getElementById('score').textContent = `Score: ${score}`;
    currentQuestionIndex++;
    displayQuestion();
}

function nextQuestion() {
    currentQuestionIndex++;
    displayQuestion();
}

function endQuiz() {
    document.getElementById('quiz-container').innerHTML = `<h2>Quiz Over</h2><p>Your score: ${score}/${questions.length}</p>`;
}