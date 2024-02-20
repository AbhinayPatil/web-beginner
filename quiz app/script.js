const questionList = [
    {
        question:"what is capital of India?",
        answers:[
            {text:"Delhi",correct:true},
            {text:"Mumbai",correct:false},
            {text:"Luckhnow",correct:false},
            {text:"Goa",correct:false}
        ]
    },
    {
        question:"what is national animal of India?",
        answers:[
            {text:"Lion",correct:false},
            {text:"Wolf",correct:false},
            {text:"Tiger",correct:true},
            {text:"Cow",correct:false}
        ]
    },
    {
        question:"Which is the smallest continent in the world?",
        answers:[
            {text:"Australia",correct:true},
            {text:"Asia",correct:false},
            {text:"America",correct:false},
            {text:"Africa",correct:false}
        ]
    },
    {
        question:"What is 2 + 2",
        answers:[
            {text:"4",correct:true},
            {text:"2",correct:false},
            {text:"0",correct:false},
            {text:"6",correct:false}
        ]
    },
];

let questionSpace = document.querySelector("#question");
let answerSpace = document.querySelector("#answers");
let nextBtn = document.querySelector("#next-btn");

let score = 0;
let currentQuestion = 0;


function checkAnswer(btn,answer){
    if(answer.correct){
        btn.classList.add("correct");
        score++;
        console.log(score);
    }
    else{
        //for incorrect answer
        btn.classList.add("incorrect");
    }

    // disable answers after a answer is selected
    Array.from(answerSpace.children).forEach(child=>{
        // show correct answer if user select wrong
        let correct = child.dataset.correct==="true";
            if(correct){
                child.classList.add("correct");
            }
        child.disabled=true;
    });
    // show next button
    nextBtn.style.display = "block";
}

function  setNextQuestion(){
    // remove previous answers
    while (answerSpace.firstChild) {
        answerSpace.removeChild(answerSpace.firstChild);
    }

    if(currentQuestion<questionList.length){
        startQuiz();
    }
    else{
        //if  no more questions display results
        questionSpace.innerHTML = `You scored ${score} out of ${questionList.length}`;
        nextBtn.style.display="block";
        nextBtn.addEventListener("click",()=>{
            location.reload();   
        });
    }
}



function startQuiz(){

    // disable next button at start
    nextBtn.style.display = "none";

    // display qeustion
    questionSpace.innerHTML = `Q${currentQuestion+1}: ${questionList[currentQuestion].question}`;
    let answers = questionList[currentQuestion].answers;
    answers.forEach(answer=>{
        let btn = document.createElement("button");
        btn.classList.add("ans-btn");
        btn.innerHTML = answer.text;

        // dataset helps us store value/properties ragarding that element
        btn.dataset.correct = answer.correct;
        answerSpace.appendChild(btn);

        btn.addEventListener("click",()=>{
            checkAnswer(btn,answer);
        });
    });
    currentQuestion++;
    nextBtn.addEventListener("click",setNextQuestion);
}

startQuiz();