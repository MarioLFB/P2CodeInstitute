let question = { //Variable "question" from the quiz.
    title: 'What is the capital of Japan?',
    alternatives: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
    answer: 2,
}

function displayQuestion(q) { //Function to display the question and alternatives.
   let divTitle = document.getElementById("title");
   divTitle.textContent = q.title;
}

displayQuestion(question); //Calling the function "displayQuestion" with the variable "question" as argument.
