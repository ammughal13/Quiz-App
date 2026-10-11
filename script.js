let question = document.getElementById ("question");
let options = document.querySelectorAll (".option");
let nextBtn = document.getElementById ("nextBtn");
let scoreDisplay = document.getElementById ("score");
let finalScore = document.getElementById ("finalScore");
let restartBtn = document.getElementById ("restartBtn");

let questions = [
    {
        question: "What does HTML stands for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlinks Text Mark Language",
            "Home Tool Markup Language"
        ],
        answer: "Hyper Text Markup Language"
    },

    {
        question: "Which language is used for styling web pages?",
        options: [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        answer: "CSS"
    },

    {
        question: "Which language is used to make web pages interactive?",
        options: [
            "HTML",
            "CSS",
            "JavaScript",
            "SQL"
        ],
        answer: "JavaScript"
    }
];

let currentQuestion = 0;
let score = 0;

function showQuestion() {
    let current = questions[currentQuestion];
    question.innerHTML = current.question;

    options.forEach (function (button, index) {
        button.innerHTML = current.options[index];
        button.disabled = false;
        button.classList.remove ("correct", "wrong");
    });
}

showQuestion();

options.forEach (function(button) { 
    button.addEventListener("click", function() {
         
        if (button.innerHTML == questions[currentQuestion].answer) {
            score++;
            button.classList.add ("correct");
        }
        
        else {
            button.classList.add ("wrong");
        }

        scoreDisplay.innerHTML = "Score:" + score;

        options.forEach (function (btn) {
            btn.disabled = true;
        });
    });
});

nextBtn.addEventListener ("click", function() {
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
        showQuestion();
    }

    else {
        question.innerHTML = "Quiz Completed!";
        finalScore.innerHTML = "Final Score:" + score + "/" + questions.length;

        options.forEach (function (button) {
            button.style.display = "none";
        });

        nextBtn.style.display = "none";
        restartBtn.style.display = "block";
    }
});

restartBtn.addEventListener ("click", function() {
    currentQuestion = 0;
    score = 0;
    
    scoreDisplay.innerHTML = "Score: 0";
    finalScore.innerHTML = " ";

    options.forEach (function (button) {
        button.style.display = "block";
    });

    nextBtn.style.display = "block";
    restartBtn.style.display = "none";

    showQuestion();
});