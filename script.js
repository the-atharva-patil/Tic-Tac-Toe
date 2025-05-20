let boxes = document.getElementsByClassName('cell');
let resetBt = document.querySelector('#reset-bt');
let msg = document.querySelector('#msg');
let newGame = document.querySelector('#newGame');;
let reset = document.querySelector('#reset-bt');;

let boxes_arr = Array.from(boxes);

const winningPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

// console.log(winningPattern);
let turnO = true;
let playGame = true;
function disableBoxes(){
    for(let box of boxes){
        box.disabled = true;
       
    }
}
function enableBoxes(){
    for(let box of boxes){
        box.disabled = false;
        box.innerText = ""
    }
}

let cnt = 0;
boxes_arr.forEach(function(box){
    if(playGame){
        box.addEventListener('click', function(){
            if(turnO){
                box.innerText = 'O';
                turnO = false;
            }
            else{
                box.innerText = 'X';
                turnO = true;
            }
            box.disabled = true;
            cnt++;
           
            cheakWinner()
            if(cnt == 9){
                drawnGame();
            }
        })
    }
})


function cheakWinner(){
    for(pattern of winningPattern){
        console.log(pattern[0], pattern[1], pattern[2]);
        pos1 = boxes[pattern[0]].innerText;
        pos2 = boxes[pattern[1]].innerText;
        pos3 = boxes[pattern[2]].innerText;
        

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                displayMessage(`${pos1} is Winner`)
                disableBoxes();
            }
        }
    }
}
function drawnGame(){
    displayMessage('Game is Drawn');
    disableBoxes();
    cnt = 0;
}
function displayMessage(message){
    
    msg.classList.remove('hide');
    msg.innerText = message;
}
function resetGame(){
    turnO = true;
    enableBoxes();
    cnt = 0;
    msg.classList.add('hide');

}
reset.addEventListener('click', resetGame);
newGame.addEventListener('click', resetGame);

