let question = {
    title: "What is the capital of Japan?",
    alternatives: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
    answer: 2,
};

function start() {
    let divAlternatives = document.querySelectorAll(".question");
    divAlternatives.forEach((element, index) => {
        element.addEventListener("click", () => {
            checkAnswer(question, index);
        });
    });

    displayQuestion(question);
}

function displayQuestion(q) {
    let divTitle = document.getElementById("title");
    divTitle.textContent = q.title;

    let divAlternatives = document.querySelectorAll(".question");
    divAlternatives.forEach(function (element, index) {
        element.textContent = q.alternatives[index];
    });
}

function checkAnswer(q, user) {
    if (q.answer == user) {
        console.log("Correct");
    } else {
        console.log("Wrong");
    }
}

start();

