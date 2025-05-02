let currentQuestion = 0;
let questions = [];
let score = 0;

const image = document.getElementById('app__image');
const choices = document.getElementById('app__button');

fetch('data/boxers.json')
    .then(res => res.json())
    .then(data => {
        console.log("data of boxers", data);
        questions = data;
        showQuestion();
})

function showQuestion() {
    if (currentQuestion >= questions.length) {
        alert(`Game over! your score: ${score} out of ${questions.length}`);
        return;
    }

    const question = questions[currentQuestion];
    image.src = question.image;
    choices.innerHTML = '';

    question.choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice;
        button.className = "app__button";
        button.onclick = () => checkAnswer(choice);
        choices.appendChild(button);
    });
}

function checkAnswer(selectedChoice) {
    const correctAnswer = questions[currentQuestion].answer;
    if (selectedChoice === correctAnswer) {
        alert("Correct!");
        score++;
    } else {
        alert(`The correct answer was ${correctAnswer}`);
    }
    currentQuestion++;
    showQuestion();
}