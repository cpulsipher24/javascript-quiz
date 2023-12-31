const userAnswers = [];
const quizQuestions = [
    { 
        question: "What is JavaScript?", 
        choices: ["A programming language", "A type of coffee", "A car brand"], 
        correctAnswer: 0 
    },
    {
        question: "Which of the following is a method used to add an element to the end of an array in JavaScript?",
        choices: ["concat()", "slice()", "push()", "splice()"],
        correctAnswer: 2
    },
    {
        question: "Which of the following is a primitive data type in JavaScript?",
        choices: ["Object", "String", "Array", "Function"],
        correctAnswer: 1
    },
    {
        question: "What is the purpose of the 'this' keyword in JavaScript?",
        choices: ["To declare a variable", "To refer to the current object", "To create a loop", "To define a function"],
        correctAnswer: 1
    },
    {
        question: "What is the purpose of the 'setTimeout' function in JavaScript?",
        choices: [
            "To set a timer for asynchronous execution of code",
            "To immediately execute a function",
            "To create a loop in the code",
            "To set an interval for repeated execution of code"
        ],
        correctAnswer: 0
    },
];

// Other variables
let currentQuestionIndex = 0;
let timer;
let timerCount = 60;

// Elements
const startBtn = document.getElementById("start-btn");
const questionContainer = document.getElementById("question-container");
const choicesContainer = document.getElementById("choices-container");
const resultContainer = document.getElementById("result-container");
const timerContainer = document.getElementById("timer-container");

// Event listener
startBtn.addEventListener("click", startQuiz);

// Function to start the quiz
function startQuiz() {
    startBtn.style.display = "none";
    displayQuestion();
    startTimer();
}

// Function to display a question
function displayQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    questionContainer.textContent = currentQuestion.question;

    choicesContainer.innerHTML = "";
    for (let i = 0; i < currentQuestion.choices.length; i++) {
        const choiceBtn = document.createElement("button");
        choiceBtn.textContent = currentQuestion.choices[i];
        choiceBtn.addEventListener("click", function () {
            checkAnswer(i);
        });
        choicesContainer.appendChild(choiceBtn);
    }
}


// Function to check the selected answer
function checkAnswer(choiceIndex) {
    const currentQuestion = quizQuestions[currentQuestionIndex];

    userAnswers[currentQuestionIndex] = choiceIndex;

    if (choiceIndex === currentQuestion.correctAnswer) {
        resultContainer.textContent = "Correct!";
    } else {
        resultContainer.textContent = "Incorrect!";
        timerCount -= 10; // Deduct 10 seconds for incorrect answer
        if (timerCount < 0) {
            timerCount = 0; // Ensure timer doesn't go negative
        }
        updateTimerDisplay(); // Update timer display
    }

    setTimeout(() => {
        resultContainer.textContent = "";
        currentQuestionIndex++;

        if (currentQuestionIndex < quizQuestions.length) {
            displayQuestion();
        } else {
            endQuiz();
        }
    }, 1000);
}


    // Function to end the quiz
function endQuiz() {
    clearInterval(timer);
    questionContainer.textContent = "Quiz Over!";
    
    const correctAnswers = quizQuestions.filter(
        (question, index) => question.correctAnswer === userAnswers[index]
    ).length;

    const totalQuestions = quizQuestions.length;
    const percentageScore = (correctAnswers / totalQuestions) * 100;

    choicesContainer.innerHTML = `<p>Your score: ${percentageScore.toFixed(2)}%</p>`;
    
    const initials = prompt("Enter your initials:");
}

// Function to start the timer
function startTimer() {
    timer = setInterval(function () {
        timerContainer.textContent = `Time: ${timerCount}`;
        timerCount--;

        if (timerCount < 0) {
            clearInterval(timer);
            timerContainer.textContent = "Time's up!";
            endQuiz(); // Call endQuiz when time is up
        }
    }, 1000);
}

// Function to update the displayed timer value
function updateTimerDisplay() {
    document.getElementById("timer").textContent = timerCount;
}