const quizData = [
{
    question: 'From what synthesizer did the 808 drum originate?', 
    a: 'Roland Jupiter 8',
    b: 'Roland TR-808',
    c: 'Moog Minimoog',
    d: 'Korg Wavetable',
    correct:'b'
}, {
    question: 'Which of the following is NOT typically considered one of the Periods of Music?',
    a: 'Renaissance',
    b: 'Classical',
    c: 'Modern 20th/21st Century',
    d: 'Reformation',
    correct: 'd'
}, {
    question: 'Which of these tracks is not produced by Rick Rubin?',
    a: 'Walk this Way - Run-DMC',
    b: 'Bound 2 - Kanye West',
    c: 'Redbone - Childish Gambino',
    d: '(You Gotta) Fight for Your Right (to Party) - Beastie Boys',
    correct: 'c'
}, {
    question: 'How many samples did The Avalanches use to make their album, Since I Left You?',
    a: '100',
    b: '500',
    c: '1800',
    d: '3500',
    correct: 'd'
}, {
    question: 'What is the most sampled drum beat in history?',
    a: 'When the Levee Breaks - Led Zeppelin',
    b: 'Amen Brother - The Winstons',
    c: 'Funky Drummer - James Brown',
    d: 'Apache - Incredible Bongo Band',
    correct: 'b'
}, {
    question: 'The record for most number one hits ever is 20. Which artist holds that record?',
    a: 'The Beatles',
    b: 'Rihanna',
    c: 'Elvis Presley',
    d: 'Michael Jackson',
    correct: 'a'
}

];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionElement = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitButton = document.getElementById('submit');


let currentQuiz=0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
        answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitButton.addEventListener('click', () => {
    
    const answer = getSelected();

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
            if(currentQuiz < quizData.length) {
                loadQuiz();
            } else {
             quiz.innerHTML =
             `<h2>Your Score: ${score}/${quizData.length}</h2>
             <button onclick="location.reload()">Reload</button>`;
        }
    }
});
    
    

    
    