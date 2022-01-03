const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answersDiv = document.getElementById('answer-buttons')
let shuffledQuestions;
let currentQuestionIndex;

   startButton.addEventListener('click' , startQuiz)

   function startQuiz() {
        console.log('started')
        startButton.classList.add('hide')
        shuffledQuestions= questions.sort(() => Math.random()  - .5)
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
    console.log('QUESTION', question)
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        console.log(answer)
        button.innerText = answer
        button.classList.add('btn');
        answersDiv.append(button)
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
           // button.addEventListener(appendChild(button))
        })
    }






function selectAnswer(e) {

}
let questions = [

    {
        question: 'What is an example of a hex color value used in css?',
        answers: ["one", "two", "three", "four"],
        correctAnswer: "two"
    },
    {
        question: 'What is ann css?',
        answers: ["one", "two", "three", "four"],
        correctAnswer: "two"
    }

]

