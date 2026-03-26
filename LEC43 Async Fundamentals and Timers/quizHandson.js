

// ---------------- QUESTION CLASS ----------------
class Question{
    constructor(){
        this.operators=["+","-","*","/","%","^"];
        this.operand1=this.random(20);
        this.operator=this.operators[this.random(6)-1];
        this.operand2=this.random(20);
        this.score=10;
        this.correctAnswer=this.calculateAnswer();
    }

    random(high){
        return 1+Math.floor(Math.random()*high);
    }

    displayQuestion(){
        return `${this.operand1} ${this.operator} ${this.operand2}`;
    }

    calculateAnswer(){
        switch(this.operator){
            case "+": return this.operand1+this.operand2;
            case "-": return this.operand1-this.operand2;
            case "*": return this.operand1*this.operand2;
            case "/": return Math.floor(this.operand1/this.operand2);
            case "%": return this.operand1%this.operand2;
            case "^": return this.operand1**this.operand2;
            default: return 0;
        }
    }

    validateAnswer(answer){
        return this.correctAnswer===Number(answer)?this.score:0;
    }
}

// ---------------- QUIZ CLASS ----------------
class Quiz{
    constructor(){
        this.score=0;
        this.question=new Question();
        this.questionCount=1;
        this.totalQuestions=10;

        this.timePerQuestion=10;
        this.currentTime=this.timePerQuestion;
        this.timerId=null;
    }

    displayCurrentQuestion(){
        return this.question.displayQuestion();
    }

    nextQuestion(answer){
        this.score+=this.question.validateAnswer(answer);
        this.questionCount++;

        if(this.questionCount>this.totalQuestions){
            return null;
        }

        this.question=new Question();
        return this.question.displayQuestion();
    }

    getScore(){
        return this.score;
    }

    startTimer(updateUI, timeUpCallback){
        this.currentTime=this.timePerQuestion;

        updateUI(this.currentTime);

        this.timerId=setInterval(()=>{
            this.currentTime--;
            updateUI(this.currentTime);

            if(this.currentTime<=0){
                clearInterval(this.timerId);
                timeUpCallback();
            }
        },1000);
    }

    stopTimer(){
        clearInterval(this.timerId);
    }
}

// ---------------- DOM LOGIC ----------------
const quiz=new Quiz();

let questionEle=document.querySelector(".question");
let scoreEle=document.querySelector(".score");
let input=document.querySelector("input[type=number]");
let submitBtn=document.querySelector(".submit");
let quizContainer=document.querySelector(".quiz-container");
let resultContainer=document.querySelector(".result-container");
let finalScore=document.querySelector(".finalScore");
let timerEle=document.querySelector(".timer");

// Show first question
questionEle.textContent=quiz.displayCurrentQuestion();
quiz.startTimer(updateTimerUI,handleTimeUp);

// Update timer UI
function updateTimerUI(time){
    timerEle.textContent=`Time: ${time}`;
}

// When time ends
function handleTimeUp(){
    let next=quiz.nextQuestion("");
    scoreEle.textContent=`Score: ${quiz.getScore()}`;

    if(next===null){
        endQuiz();
    }else{
        questionEle.textContent=next;
        quiz.startTimer(updateTimerUI,handleTimeUp);
    }
}

// Handle answer
function handleAnswer(){
    quiz.stopTimer();

    let next=quiz.nextQuestion(input.value);
    scoreEle.textContent=`Score: ${quiz.getScore()}`;
    input.value="";

    if(next===null){
        endQuiz();
    }else{
        questionEle.textContent=next;
        quiz.startTimer(updateTimerUI,handleTimeUp);
    }
}

// Enter key
input.addEventListener("keydown",(e)=>{
    if(e.key==="Enter"){
        handleAnswer();
    }
});

// Button click
submitBtn.addEventListener("click",()=>{
    handleAnswer();
});

// End quiz
function endQuiz(){
    quiz.stopTimer();
    quizContainer.style.display="none";
    resultContainer.style.display="block";
    finalScore.textContent=`Final Score: ${quiz.getScore()}/${quiz.totalQuestions*10}`;
}
