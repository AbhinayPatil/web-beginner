let moves = document.querySelectorAll(".move");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#computer-score");
let result = document.querySelector(".result");


let userScore = 0;
let computerScore = 0;

const displayDraw = ()=>{
    result.innerHTML="It's a draw!";
    result.style.backgroundColor = "#0c2c57"
}

const displayResult = (isUserWinner)=>{
    if(isUserWinner){
        userScorePara.innerText = userScore;
        result.innerText = "You win!!";
        result.style.backgroundColor = "green";
    }
    else{
        compScorePara.innerText=computerScore;
        result.innerText = "You lose";
        result.style.backgroundColor = "red";
    }
}

const playGame = (userChoice)=>{
    //get comp choice
    let copmuterChoice = getCompChoice();

    //compairing user and comp

    //checking draw
    if(userChoice === copmuterChoice){
        displayDraw();
    }
    else {
        let isUserWinner = true;

        if(userChoice==="rock"){
            if(copmuterChoice==="scissors"){
                userScore++;
            }
            else{
                isUserWinner=false;
                computerScore++;
            }
        }
        else if(userChoice==="paper"){
            if(copmuterChoice==="rock"){
                userScore++;
            }
            else{
                isUserWinner=false;
                computerScore++;
            }
        }
        else if(userChoice==="scissor"){
            if(copmuterChoice==="paper"){
                userScore++;
            }
            else{
                isUserWinner=false;
                computerScore++;
            }
        }
        displayResult(isUserWinner);
    }
};

const getCompChoice =( )=>{
    let choice = ["rock","paper","scissor"];
    return choice[Math.floor(Math.random()*3)];
} 


moves.forEach((move) => {
    move.addEventListener("click",()=>{
        let userChoice = move.getAttribute("id");
        playGame(userChoice);
    });
});

