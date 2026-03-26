// ------------------ Question Class ------------------
class Question{
    constructor(){
        this.operators=["+","-","%","/","*","^"];
        this.operand1=this.random(20);
        this.operand2=this.random(20);
        this.operator=this.operators[this.random(6)-1];
        this.score=10;
        this.correctAnswer=this.calculateAnswer();
    }

    random(high){
        return 1 + Math.floor(Math.random()*high);
    }

    calculateAnswer(){
        switch(this.operator){
            case "+": return this.operand1+this.operand2;
            case "-": return this.operand1-this.operand2;
            case "%": return this.operand1%this.operand2;
            case "*": return this.operand1*this.operand2;
            case "/": return Math.floor(this.operand1/this.operand2);
            case "^": return this.operand1**this.operand2;
            default: return 0;
        }
    }

    display(){
        return `${this.operand1} ${this.operator} ${this.operand2}`;
    }

    validateAnswer(answer){
        return this.correctAnswer===Number(answer)?this.score:0;
    }
}

// ------------------ Quiz Class ------------------
class Quiz{
    constructor(){
        this.score=0;
        this.question=new Question();
        this.questionCount=1;
        this.totalQuestions=10;
    }

    displayCurrentQuestion(){
        return this.question.display();
    }

    nextQuestion(answer){
        this.score+=this.question.validateAnswer(answer);
        this.questionCount++;

        if(this.questionCount>this.totalQuestions){
            return null;
        }

        this.question=new Question();
        return this.question.display();
    }

    getScore(){
        return this.score;
    }
}

// ------------------ DOM Logic ------------------
const quiz=new Quiz();

let questionDiv=document.querySelector(".question");
let input=document.querySelector("input[type=number]");
let scoreDiv=document.querySelector(".score");
let submitBtn=document.querySelector(".submit");
let quizContainer=document.querySelector(".quiz-container");
let resultContainer=document.querySelector(".result-container");
let finalScoreDiv=document.querySelector(".finalScore");
let timerEle=document.querySelector(".timer");
let startBtn=document.querySelector(".start");



// Show first question
questionDiv.textContent=quiz.displayCurrentQuestion();

// ------------------ TIMER VARIABLES ------------------
let timer = null;
let count = 60;

// ------------------ START QUIZ ------------------
function startQuiz(){
    if(timer !== null) return; // prevent multiple timers

    input.disabled = false;
    startBtn.style.display = "none";

    timer = setInterval(()=>{
        count--;
        timerEle.textContent = `Time: ${count}`;

        if(count < 0){
            clearInterval(timer);
            endQuiz();
        }
    },1000);
}

startBtn.addEventListener("click", startQuiz);

// ------------------ HANDLE ANSWER ------------------
function handleAnswer(){
    let next = quiz.nextQuestion(input.value);
    scoreDiv.textContent = `Score: ${quiz.getScore()}`;
    input.value = "";

    if(next === null){
        endQuiz();
    } else {
        questionDiv.textContent = next;
    }
}

// Enter key
input.addEventListener("keydown",(e)=>{
    if(e.key==="Enter"){
        handleAnswer();
    }
});

// Submit button
submitBtn.addEventListener("click",()=>{
    endQuiz();
});

// ------------------ END QUIZ ------------------
function endQuiz(){
    clearInterval(timer);
    timer = null;

    quizContainer.style.display="none";
    resultContainer.style.display="block";
    finalScoreDiv.textContent=
        `Final Score: ${quiz.getScore()} / ${quiz.totalQuestions*10}`;
}
