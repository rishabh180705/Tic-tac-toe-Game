document.addEventListener("DOMContentLoaded", function () {
let box=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");


let turn0=true;
let winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];

resetBtn.onclick = function(){
    turn0=true;
    for(let boxes of box){
        boxes.disabled = false;
        boxes.innerHTML='';
     }
}

const winner = (pos1) => {
    alert(`Winner is ${pos1}`);
}
  
    function checkWinner() {
        for (let pattern of winPattern) {
            let pos1 = box[pattern[0]].innerHTML;
            let pos2 = box[pattern[1]].innerHTML;
            let pos3 = box[pattern[2]].innerHTML;
            if (pos1 != "" && pos2 != "" && pos3 != "") {
                if (pos1 === pos2 && pos3 === pos2) {

                    console.log(`winner is ${pos1}`);
                    for (let boxes of box) {
                        boxes.disabled = true;
                    }
                    winner(pos1);
                }
            }

        }
    }

box.forEach((boxes) => {
 boxes.addEventListener("click",()=> {
    console.log("clicked");
    if(turn0){
       boxes.innerHTML='O';
       turn0 = false;
    }
    else{
        boxes.innerHTML='X';
        turn0 = true; 
    }
    boxes.disabled=true;
    checkWinner();
 });
});



});