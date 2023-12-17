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
        question: "Which method is used to add an element to the end of an array in JavaScript?",
        choices: ["push()", "pop()", "shift()", "unshift()"],
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
    questionContainer.textContext = currentQuestion.question;

    choicesContainer.innerHTML = "";
    for (let i = 0; i < currentChoices.choices.length; i++) {
        const choiceBtn = document.createElement("button");
        choiceBtn.textContext = currentQuestion.choices[i];
        choiceBtn.addEventListener("click", function () {
            checkAnswer(i);
        });
        choicesContainer.appendChild(choiceBtn);
    }
}

// Function to check the selected answer
function checkAnswer(choiceIndex) {
    constcurrentQuestion = quizQuestions[currentQuestionIndex];

    if(choiceIndex === currentQuestion.correctAnswer) {
        resultContainer.textContent = "Correct!";
    } else {
        resultContainer.textContent = "Incorrect!";
        timerCount -= 10; // Subtract 10 seconds for incorrect answer
    }
    setTimeout(() => {
        resultContainer.textContent = "";
        currentQuestionIndex++;

        if (currentQuestionIndex < quizQuestions.Length) {
            displayQuestion();
        } else {
            endQuiz();
        }
    }, 1000);
    }
