 
 // Variables in global memory
let index = 0;
let totalTime = 100;
let timeCountdown;
let highScore;
let highestScore = 100;
const startButton = document.getElementById("start-button");
const questionElement = document.getElementById("render-questions");
const finalScore = document.getElementById("final-score");
let highScoreTrigger = document.getElementById("score-page");
let timeElement = document.getElementById("timer");
const showQuestions = document.createElement("h2");
let listAnswerOptions = document.createElement("ul");
let option1 = document.createElement("li");
let option2 = document.createElement("li");
let option3 = document.createElement("li");
let option4 = document.createElement("li");
let answer1 = document.createElement("button");
let answer2 = document.createElement("button");
let answer3 = document.createElement("button");
let answer4 = document.createElement("button");
let submitButton = document.querySelector("register-score");
let form = document.getElementById("form");

function removeIntroPage() {
    let removeIntro = document.getElementById("intro-page");
        removeIntro.remove();
}

function renderQuestions() {
    showQuestions.innerText = questionsArray[index].question;
                       
        answer1.textContent = questionsArray[index].options[0];
        answer2.textContent = questionsArray[index].options[1];
        answer3.textContent = questionsArray[index].options[2];
        answer4.textContent = questionsArray[index].options[3];
        
        option1.appendChild(answer1);
        option2.appendChild(answer2);
        option3.appendChild(answer3);
        option4.appendChild(answer4);
        
        listAnswerOptions.appendChild(option1);
        listAnswerOptions.appendChild(option2);
        listAnswerOptions.appendChild(option3);
        listAnswerOptions.appendChild(option4);
        
        questionElement.appendChild(showQuestions);
        questionElement.appendChild(listAnswerOptions);

        answer1.addEventListener("click", showResult);
        answer2.addEventListener("click", showResult);
        answer3.addEventListener("click", showResult);
        answer4.addEventListener("click", showResult);
    
};