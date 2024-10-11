let boxses = document.querySelectorAll(".Box")
let playBtn = document.querySelector("#Play-again")
let resetBtn = document.querySelector("#Reset-game")
let msgContainer = document.querySelector(".msg-container")
// let hide = document.querySelector(".hide")

let p = document.querySelector("p")



let turnO = true;

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
const resetGame = () => {
    turnO = true;
    enablebox();
  msgContainer.classList.add("hide");

}


boxses.forEach((box) =>{
    box.addEventListener("click", () =>{
        if(turnO){
            box.innerText = "O"
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        

        checkWinner();
       
    })
})

const disablebox = () => {
    for(let box of boxses){
        box.disabled = true;
    }
};
const enablebox = () => {
    for(let box of boxses){
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (Winner) => {
  p.innerText = `Congratulation, Winner is ${Winner}`;
  msgContainer.classList.remove("hide");
  disablebox();
};

const checkWinner = () => {
    for(let pattern of winPattern){

        let pos1Val = boxses[pattern[0]].innerText;
        let pos2Val = boxses[pattern[1]].innerText;
        let pos3Val = boxses[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
            showWinner(pos1Val);
            }
        }
    }
}

playBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
