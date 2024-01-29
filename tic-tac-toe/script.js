let winnerDisplay = document.querySelector("#winner-display");
let winner = document.querySelector(".winner");
let boxes = document.querySelectorAll(".box");
let newGameBtn = document.querySelector("#new-game-btn");
let resetBtn = document.querySelector("#reset-btn");

let turnX = true;
let winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const reset = ()=>{
    turnX = true;
    enableButtons();
};

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turnX){
            box.innerText ="X";
            turnX = !turnX
        }
        else{
            box.innerText="O";
            turnX = !turnX
        }
        box.disabled = true;
        checkWin();
    });
});

resetBtn.addEventListener("click",reset);
newGameBtn.addEventListener("click",reset);

const checkWin = () =>{
    for(let pattern of winPattern){
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;
        
        if(val1 !="" && val2 !="" && val3 != ""){
            if(val1 == val2 && val2==val3){
                winnerDisplay.innerText = `Player ${val1} won`;
                winner.classList.remove("hide");
                disableButtons();
            }
        }
    }
}

const disableButtons = ()=>{
    boxes.forEach((box)=>{
        box.disabled = true;
    });
};

const enableButtons= ()=>{
    boxes.forEach((box)=>{
        box.disabled = false;
        box.innerText = "";
        winner.classList.add("hide");
    });
};
