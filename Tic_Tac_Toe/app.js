let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let msgContainer=document.querySelector(".msg-container");
let newGameBtn=document.querySelector("#new-btn");
let msg=document.querySelector("#msg")
let turn0=true; //playerX,playerO
let moves=0
const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame=()=>{
    turn0=true;
    enableBoxes();
    msgContainer.classList.add("hide")
}

boxes.forEach((box) => {
    
    box.addEventListener("click",()=>{
        
        if (turn0) {
            box.innerText="O";
            box.style.color = "#4CAF50";
            turn0=false;
        } else {
            box.innerText="X";
            box.style.color="#f44336";
            turn0=true;
        }
        box.disabled=true;
        moves++
        checkWinner();
        
    })
})

const enableBoxes = () =>{
    for (let box of boxes) {
        msgContainer.classList.add("hide");
        box.disabled=false;
        box.innerText="";
    }
}

const disableBoxes = () =>{
    for (let box of boxes) {
        box.disabled=true;
    }
}

const showWinner=(winner)=>{
    msg.innerText=`Congratulations, the winner is player ${winner}`;
    msg.style.color="#ffffc7";
    msgContainer.classList.remove("hide");
    disableBoxes()
}

const checkWinner=() => {
    for(let pattern of winPattern) {

        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if (pos1val!=="" && pos2val!=="" && pos3val!=="") {
            if (pos1val===pos2val && pos2val === pos3val) {
                console.log("winner",`player ${pos1val}`);
                showWinner(pos1val);
            }
        }
    }
    if (moves === 9) {
        msg.innerText = "It's a draw!";
        msgContainer.classList.remove("hide");
    }
}

newGameBtn.addEventListener("click",enableBoxes)
resetbtn.addEventListener("click",enableBoxes)