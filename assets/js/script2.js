// JavaScript code in script2.js: Adds an event listener to the 'Start Quiz' button. If the associated input field ('name') is filled,
// it redirects to the 'puzzle.html' page; otherwise, it prompts the user to fill in their name before starting the quiz.

document.addEventListener('DOMContentLoaded', function () {
    const startButton = document.querySelector('#quizForm button');

    startButton.addEventListener('click', function () {
        const nameInput = document.getElementById('name');

        if (nameInput.value.trim() !== '') {
            localStorage.setItem('playerName', nameInput.value);
            window.location.href = 'puzzle.html'; 
        } else {
            alert('Please fill in your name before starting the quiz.');
        }
    });
});
