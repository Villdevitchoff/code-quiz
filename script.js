const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answersDiv = document.getElementById('answer-buttons')
const timerEl = document.getElementById('timer');
let shuffledQuestions;
let currentQuestionIndex;

let time = 75;
let timer;

startButton.addEventListener('click', startQuiz)

function startQuiz() {
    console.log('started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    console.log(shuffledQuestions)
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion()
}

function setNextQuestion() {
    console.log('setNextQuestion')
    //  resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    timer = setInterval(timer, 1000)

    console.log('QUESTION', question)
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const answerButton = document.createElement('button')
        console.log(answer)
        answerButton.innerText = answer
        answerButton.classList.add('btn');
        answersDiv.append(answerButton)
        if (answer.correct) {
            answerButton.dataset.correct = answer.correct
        }
        answerButton.addEventListener("click",)
    }

 ,() => { }('timer') 
    time --);
    console.log(time)
    timerEl.innerText = time;
}
//add a stop timer function when the count reaches 0
//end quiz when timer stops at 0

//function setTimeout()


window.setTimeout

function selectAnswer(e) {

}
let questions = [

    {
        question: 'What is an example of a hex color value used in css?',
        answers: ["one", "two", "three", "four"],
        correctAnswer: "two"
    },
    {
        question: 'What is css?',
        answers: ["Christmas Santa Songs", "Cascading Style Sheets", "three", "four"],
        correctAnswer: "Cascading Style Sheets"
    }

]
)}
