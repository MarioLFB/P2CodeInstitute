let question = [ // Array of questions, alternatives and answers

    {
        title: "What is the capital of Japan?",
        alternatives: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
        answer: [2],
    },
    {   
        title: "What element has the chemical symbol 'O'?",
        alternatives: ["Oxygen", "Gold", "Iron", "Carbon"],
        answer: [0],
    },
    {   
        title: "In which country would you find the Eiffel Tower?",
        alternatives: ["Germany", "France", "Italy", "Spain"],
        answer: [1],
    },
    {   
        title: "Who wrote the play 'Romeo and Juliet'?",
        alternatives: ["Charles Dickens", "William Shakespeare", "Jane Austen", "F. Scott Fitzgerald"],
        answer: [1],
    },
    {   
        title: "What is the largest planet in our solar system?",
        alternatives: ["Earth", "Mars", "Jupiter", "Saturn"], 
        answer: [2],
    },
    {   
        title: "Who is known as the 'King of Pop'?", 
        alternatives: ["Madonna", "Elvis Presley", "Michael Jackson", "Beyoncé"],
        answer: [2],
    },
    {
        title: "In which year did Christopher Columbus reach the Americas?",
        alternatives: ["1492", "1607", "1776", "1848"],
        answer: [0],
    },
    {
        title: "What is the main ingredient in guacamole?",
        alternatives: ["Tomatoes", "Avocado", "Onions", "Peppers"],
        answer: [1],
    },
    {
        title: "Who co-founded Microsoft alongside Bill Gates?",
        alternatives: ["Mark Zuckerberg", "Steve Jobs", "Paul Allen", "Larry Page"],
        answer: [2],
    },
    { 
        title: "Which gas do plants primarily absorb during photosynthesis?",
        alternatives: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Hydrogen"],
        answer: [2],
    }
    ]

function start() { // Function to start the quiz

    this.totalScore = 0;
    this.currentQuestion = 0;

    let divAlternatives = document.querySelectorAll(".question");
    divAlternatives.forEach((element, index) => {
        element.addEventListener("click", () => {
            checkAnswer(question[this.currentQuestion], index);
        });
    });

    this.displayScore();
    displayQuestion(question[this.currentQuestion]);
}

function displayQuestion(q) { // Function to display the questions
    let divTitle = document.getElementById("title");
    divTitle.textContent = q.title;

    let divAlternatives = document.querySelectorAll(".question");
    divAlternatives.forEach(function (element, index) {
        element.textContent = q.alternatives[index];
    });
}

function nextQuestion() { // Function to go to the next question
    this.currentQuestion++;
    if (this.currentQuestion === question.length) {
        endQuiz(); // Function to end the quiz
        return; 
    }
    displayQuestion(question[this.currentQuestion]);
}

function endQuiz() {
    let divTitle = document.getElementById("title");
    let divAlternatives = document.querySelectorAll(".question");

    // Add end of quiz message
    divTitle.textContent = "Quiz Finished! Your final score is: " + this.totalScore;
    divAlternatives.forEach(element => {
        element.style.display = 'none'; // Hide question buttons
    });

}



function checkAnswer(q, user) { // Function to check if the answer is correct or not
    if (q.answer[0] === user) {
        console.log("Correct");
        this.totalScore++;
    } else {
        console.log("Wrong");
    }
    this.displayScore();
    nextQuestion();
    displayQuestion(question[this.currentQuestion]);
}

function displayScore() { // Function to display the score
    let divTitle = document.getElementById("score");
    divTitle.textContent = "Your score is: " + this.totalScore;
}


start(); // Function to start the quiz

