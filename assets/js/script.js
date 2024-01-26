let question = { //Variable "question" from the quiz.
    title: "What is the capital of Japan?",
    alternatives: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
    answer: 2,
}

function displayQuestion(q) { //Function to display the question and alternatives.
    let divTitle = document.getElementById("title");
   divTitle.textContent = q.title;

    let divAlternatives = document.querySelectorAll(".question");
   divAlternatives.forEach(function(element, index){
         element.textContent = q.alternatives[index];
    })
}

displayQuestion(question); //Calling the function "displayQuestion" with the variable "question" as argument.
