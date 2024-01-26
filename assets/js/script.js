let question = { //Variable "question" from the quiz.
    title: "What is the capital of Japan?",
    alternatives: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
    answer: 2,
}

function displayQuestion(q) { //Function to display the question and alternatives.
    let divTitle = document.getElementById("title");
   divTitle.textContent = q.title;

    let divAlternatives = document.querySelectorAll(".question"); //Selecting all the elements with the class "question" and putting them in a variable.
   divAlternatives.forEach(function(element, index){ //Looping through the elements in the variable "divAlternatives" and putting them in the variable "element".
         element.textContent = q.alternatives[index]; //Putting the text content of the elements in the variable "divAlternatives" in the variable "element".
         element.addEventListener("click", function(){ //Adding an event listener to the variable "element" with the event "click" and a function as argument.
            if(index == q.answer){ //If the index of the variable "element" is equal to the answer in the variable "question" then the console will log "Correct!".
                console.log("Correct!"); //If the index of the variable "element" is not equal to the answer in the variable "question" then the console will log "Wrong!".
            } else {
                console.log("Wrong!"); //If the index of the variable "element" is not equal to the answer in the variable "question" then the console will log "Wrong!".
            }

        })
    })
}

displayQuestion(question); //Calling the function "displayQuestion" with the variable "question" as argument.
