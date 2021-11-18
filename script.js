const questions = [
    {
        question: 'Which element is a vegetable?',
        a: 'Watermelon',
        b: 'Pumpkin',
        c: 'Tomato',
        d: 'Carrot',
        correct: 'd'
    },
    {
        question: 'What is the capital of Australia?',
        a: 'Canberra',
        b: 'Sydney',
        c: 'Brisbane',
        d: 'Melbourne',
        correct: 'a'
    },
    {
        question: 'Who is the current president of USA?',
        a: 'Barack Obama',
        b: 'Joe Biden',
        c: 'Donald Trump',
        d: 'George W. Bush',
        correct: 'b'
    },
    {
        question: 'What does HTML stand for?',
        a: 'Application Programming Interface',
        b: 'Jason Object Notation',
        c: 'Cascading Style Sheet',
        d: 'Hypertext Markup Language',
        correct: 'd'
    },
    {
        question: 'What year was Javascript launched?',
        a: '2020',
        b: '1995',
        c: '1983',
        d: 'none of the above',
        correct: 'b'
    },
];

const answerElements = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');
const questionElement = document.getElementById('question');
const a_Element = document.getElementById('a-text');
const b_Element = document.getElementById('b-text');
const c_Element = document.getElementById('c-text');
const d_Element = document.getElementById('d-text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {

    deselectAnswers();

    const currentQuizData = questions[currentQuiz];

    questionElement.innerText = currentQuizData.question;
    a_Element.innerText = currentQuizData.a;
    b_Element.innerText = currentQuizData.b;
    c_Element.innerText = currentQuizData.c;
    d_Element.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerElements.forEach((answerElement) => {
        if (answerElement.checked) {
            answer = answerElement.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerElements.forEach((answerElement) => {
        answerElement.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    // Check to see the answer
    const answer = getSelected();

    console.log(answer);

    if(answer) {
        if(answer === questions[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < questions.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2> You answered correctly at ${score}/${questions.length} questions.</h2>
           
            <button onclick="location.reload()">Reload</button>`;
        }
    };
});

