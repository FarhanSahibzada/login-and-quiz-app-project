let questions = [
    {
        question: "What is the correct syntax for referring to an external script called script.js?",

        answers: [
            { text: "script href=script.js", correct: false },
            { text: "script name=script.js", correct: false },
            { text: "script id=script.js", correct: false },
            { text: "script src=script.js", correct: true },
        ]


    }, {
        question: " How do you write Hello World in an alert box?",

        answers: [
            { text: "alertBox(Hello World)", correct: false },
            { text: "msg(Hello World)", correct: false },
            { text: "alert(Hello World)", correct: true },
            { text: "msgBox(Hello World)", correct: false },
        ]


    }, {
        question: "How do you create a function in JavaScript?",

        answers: [
            { text: "function = myFunction()", correct: false },
            { text: "function myFunction()", correct: true },
            { text: "function:myFunction()", correct: false },
            { text: "function => myFunction()", correct: false },
        ]


    }, {
        question: "How do you call a function named myFunctioN?",

        answers: [
            { text: "call myfunction", correct: false },
            { text: "myfunction()", correct: true },
            { text: "call function myfunction()", correct: false },
            { text: "call.myFunction()", correct: false },
        ]


    }
    , {
        question: "How to write an IF statement in JavaScript?",

        answers: [
            { text: "if (i == 5)", correct: true },
            { text: "if i === 5", correct: false },
            { text: "if i = 5", correct: false },
            { text: "if (i = 5)", correct: false },
        ]


    }, {
        question: "How does a WHILE loop start?",

        answers: [
            { text: "while i = 1 to 10", correct: false },
            { text: "while (i <= 10)", correct: true },
            { text: "while (i <= 10; i++)", correct: false },
            { text: "while (i++ <= 10)", correct: false },
        ]


    }, {
        question: "How can you add a comment in JavaScript?",
        answers: [
            { text: "'This is a comment", correct: false },
            { text: "// This is a comment", correct: true },
            { text: "!-- This is a comment --", correct: false },
            { text: "-- This is a comment", correct: false },
        ]
    }, {
        question: "What is the correct way to write a JavaScript array?",
        answers: [
            { text: "var colors = red, green, blue", correct: false },
            { text: "var colors = 1 = (red), 2 = (green), 3 = (blue)", correct: false },
            { text: "var colors = [red, green, blue]", correct: true },
            { text: "var colors = (1:red, 2:green, 3:blue)", correct: false },
        ]
    }, {
        question: "How do you round the number 7.25 to the nearest integer?",
        answers: [
            { text: "Math.rnd(7.25)", correct: false },
            { text: "Math.roundup(7.25)", correct: false },
            { text: "Math.round(7.25)", correct: true },
            { text: "round(7.25)", correct: false },
        ]
    }, {
        question: "How do you find the number with the highest value of x and y?",
        answers: [
            { text: "Math.max(x, y)", correct: true },
            { text: "Math.ceil(x, y)", correct: false },
            { text: "top(x, y)", correct: false },
            { text: "ceil(x, y)", correct: false },
        ]
    }

]
let names = document.getElementById("name");
let key = Object.keys(localStorage);

names.innerHTML = "Guest";
let startbtn = document.getElementById("start");
let nextbtn = document.getElementById("next");
let question = document.getElementById("question");
let option = document.getElementById("options")
let finish = document.getElementById("finish");
let container1 = document.getElementById("container1");
let container2 = document.getElementById("container2");
container2.style.visibility = "hidden";
let container3 = document.getElementById("container3");
container3.style.visibility = "hidden";
startbtn.addEventListener("click", function () {
    count = 1;
    container1.style.display = "none";
    container2.style.visibility = "visible";
    container1.classList.remove("han");
    startquiz();

});

let questionindex = 0;
let score = 0;
function startquiz() {


    questionindex = 0;
    score = 0;
    showquestion();

};

function showquestion() {
    restartstate();
    let currentquestion = questions[questionindex];
    let questionno = questionindex + 1;
    question.innerHTML = questionno + ")" + currentquestion.question;

    currentquestion.answers.forEach(answers => {
        let button = document.createElement("button");
        button.innerHTML = answers.text;
        button.classList.add("btn");
        option.appendChild(button);
        if (answers.correct) {
            button.dataset.correct = answers.correct;
        }
        button.addEventListener("click", selectans);
    })


}

function restartstate() {

    while (option.firstChild) {
        option.removeChild(option.firstChild);
    }
}

function selectans(e) {
    let selectbtn = e.target;
    let iscorrect = selectbtn.dataset.correct === "true";
    if (iscorrect) {
        selectbtn.classList.add("correct");
        score++;
    }
    else {
        selectbtn.classList.add("incorrect");
    }
    Array.from(option.children).forEach(button => {

        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = "true";
    })

}
let text = document.getElementById("texthere");
let pers = document.getElementById("per");
function showscore() {
    container3.style.visibility = "visible";
    container2.style.visibility = "hidden";
    let per = (score / 10) * 100;
    pers.innerHTML = per + "%";

    container3.style.visibility = "visible";
    container2.style.visibility = "hidden";
    container3.classList.add("upper")

    if (per > 50) {
        text.innerHTML = `🎉 Congrats! You passed the quiz with a score of ${score}/${questions.length}! 🎉`;
    } else {
        text.innerHTML = `😢 Sorry, you failed the quiz. Your score is ${score}/${questions.length}. 😢`;
    }


}
function handlenextbtn() {
    questionindex++;
    if (questionindex < questions.length) {
        showquestion()
    } else {
        showscore()
    }

}

let num = document.getElementById("num");
let count = 1;

nextbtn.addEventListener("click", function () {
    count++;
    if (count > 10) {
        count = 1;
    }
    num.textContent = count;

    if (questionindex < questions.length) {
        handlenextbtn();

    } else {
        startquiz()
    }
})

finish.addEventListener("click", function () {

    count = 1;
    container3.classList.remove("upper");
    container3.style.visibility = " hidden";
    container1.style.display = "block";
    container1.classList.add("han");
})

let logout = document.getElementById("logout");

logout.addEventListener("click", function () {
    window.location.replace("index.html");

})