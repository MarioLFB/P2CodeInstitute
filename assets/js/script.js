let question = { //Variable "question" from the quiz.
    title: "What is the capital of Japan?",
    alternatives: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
    answer: 2,
}

function start() {



    
    displayQuestion(question); //Calling the function "displayQuestion" with the argument "question".


}    //Function to start the quiz.




function displayQuestion(q) { //Function to display the question and alternatives.
    let divTitle = document.getElementById("title");
   divTitle.textContent = q.title;

    let divAlternatives = document.querySelectorAll(".question"); //Selecting all the elements with the class "question" and putting them in a variable.
   divAlternatives.forEach(function(element, index){ //Looping through the elements in the variable "divAlternatives" and putting them in the variable "element".
         element.textContent = q.alternatives[index]; //Putting the text content of the elements in the variable "divAlternatives" in the variable "element".
         element.addEventListener("click", function(){ //Adding an event listener to the variable "element" with the event "click" and a function as argument.
            if(index == q.answer){ 
                console.log("Correct!"); 
            } else {
                console.log("Wrong!"); 
            }

        })
    })
}

start(); //Calling the function "start".
