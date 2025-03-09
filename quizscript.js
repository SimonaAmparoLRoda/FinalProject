const questions = [
    {
        question: "What are the main causes of water scarcity?",
        answers: ["Climate change", "Pollution", "Poor governance", "All of the above"],
        correct: 3
    },
    {
        question: "What percentage of global freshwater use is attributed to agriculture?",
        answers: ["25%", "50%", "70%", "60%"],
        correct: 2
    },
    {
        question: "Which type of water scarcity occurs due to lack of infrastructure?",
        answers: ["Physical water scarcity", "Economic water scarcity", "Industrial water scarcity", "Environmental water scarcity"],
        correct: 1
    },
    {
        question: "When does water scarcity occur?",
        answers: ["When you drink too much water", "When Swampy can't shower", "When the demand for freshwater exceeds its supply", "When the water is too scared"],
        correct: 2
    },
    {
        question: "What SDG does water scarcity belong to?",
        answers: ["SDG 6 (Clean Water and Sanitation)", "SDG 16 (Peace, Justice, and Strong Institutions)", "SDG 1 (No Poverty)", "SDG 4 (Quality Education)"],
        correct: 0
    }
];

let currentQuestionIndex = 0;
let score = 0;
let answered = false; 

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");
const prevButton = document.getElementById("prev-button");
const submitButton = document.getElementById("submit-button");
const resultContainer = document.getElementById("result");
const scoreElement = document.getElementById("score");
const feedbackElement = document.getElementById("feedback");

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.style.display = "none";
    nextButton.style.display = "none";
    prevButton.style.display = "none";
    submitButton.style.display = "none";
    questionElement.style.display = "block";
    answerButtons.style.display = "block";
    loadQuestion();
}

function loadQuestion() {
    resetState();
    answered = false; 
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.innerText = answer;
        button.classList.add("butt");
        button.addEventListener("click", () => selectAnswer(index, button));
        answerButtons.appendChild(button);
    });

    updateNavButtons();
}

function resetState() {
    nextButton.style.display = "none";
    prevButton.style.display = "none";
    submitButton.style.display = "none";
    answerButtons.innerHTML = "";
}

function selectAnswer(selectedIndex, button) {
    if (answered) return; 
    answered = true; 

    const correctIndex = questions[currentQuestionIndex].correct;
    const buttons = document.querySelectorAll(".butt");

    buttons.forEach((btn, index) => {
        if (index === correctIndex) {
            btn.style.backgroundColor = "green";
        } else if (index === selectedIndex) {
            btn.style.backgroundColor = "red";
        }
        btn.disabled = true;
    });

    if (selectedIndex === correctIndex) {
        score++; 
    }

    updateNavButtons();
}

function updateNavButtons() {
    prevButton.style.display = currentQuestionIndex > 0 ? "inline-block" : "none";
    nextButton.style.display = currentQuestionIndex < questions.length - 1 ? "inline-block" : "none";
    submitButton.style.display = currentQuestionIndex === questions.length - 1 ? "inline-block" : "none";
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    loadQuestion();
});

prevButton.addEventListener("click", () => {
    currentQuestionIndex--;
    loadQuestion();
});

submitButton.addEventListener("click", showResults);

function showResults() {
    questionElement.style.display = "none";
    answerButtons.style.display = "none";
    nextButton.style.display = "none";
    prevButton.style.display = "none";
    submitButton.style.display = "none";
    resultContainer.style.display = "block";

    scoreElement.innerText = score;
    feedbackElement.innerText = score === 5 ? "Perfect score!" : score >= 3 ? "Good job!" : "Keep learning!";
}

function restartQuiz() {
    questionElement.style.display = "block";
    answerButtons.style.display = "block";
    resultContainer.style.display = "none";
    startQuiz();
}

startQuiz();
