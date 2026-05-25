let boardLength = 7;// no. of cols
let boardBreadth = 6;// no. of rows
let player = "red";
let gameOver = false;
let winCount = 4;
let boardArray = [];
let turn = document.querySelector(".playerStatus");//For manipulating current palyer info
let board = document.querySelector(".board");

createBoard(boardLength,boardBreadth);



function createCell(){
    let cell = document.createElement("div");
    cell.classList.add("cell");
}



function createBoard(boardLength,boardBreadth) {
    board.innerHTML="";//intially nothing , uselful during resetting game

    //2d array linked to board
    boardArray = Array.from({length : boardBreadth}, 
        () => {
            return Array(boardLength).fill("")
        }
    );

    //board creation using cells
    for (let r = 0; r < boardBreadth; r++) {
        for (let c = 0; c < boardLength; c++) {
            let cell = document.createElement("div");

            //event handler for cell on click
            cell.addEventListener("click",
                () => {
                    handleMove(r,c,cell)
                }
            );

            let bubble = document.createElement("button");
            cell.classList.add("cell");
            bubble.classList.add("bubble");
            cell.append(bubble);            
            board.append(cell);               
        }
    }
}



// handle each click on the cell like fill bubble
function handleMove(r,c,cell){

    if (boardArray[r][c] !== "") return;//no action if cell already filled
    if (gameOver) return;// no action if game finished

    boardArray[r][c] = player;// fetching the player from 2d array

    cell.classList.add(player);//painting the bubble with red/green

    if(checkWinner(r,c)){
        gameOver = true;
        // to pause the DOM so that last bubble get filled before alert
        setTimeout(
            () => {
                alert((player === "red") ? "Player - 1 has won" : "Player - 2 has won");
            },100
        );
        return;
    }

    if (isBoardFull()) {
        gameOver = true;
        // to pause the DOM so that last bubble get filled before alert
        setTimeout(
            () => {
                alert("Game ended as a Draw between Player - 1 & Player - 2");
            },100
        );
        return;
    }

    //Change turn
    player = player === "red" ? "green" : "red";
    turn.textContent = player === "red" ? "Player - 1" : "Player - 2";// player status info
}



function checkWinner(r,c){
    return(
        consecutiveDot(r,c,1,0) >= winCount || //check vertically
        consecutiveDot(r,c,0,1) >= winCount //check horizontally
    )
}

function isBoardFull() {
    for (let row = 0; row < boardBreadth; row++) {
        for (let col = 0; col < boardLength; col++) {
            if (boardArray[row][col] === '') return false;
        }
    }
    return true;
}



function consecutiveDot(r,c,mrow,mcol) {
    //mrow = move row by, mcol = move col by

    let count = 1;
    const player = boardArray[r][c];

    //check in forward direction
    let row = r + mrow;
    let col = c + mcol;
    while (inLimit(row,col) && boardArray[row][col] === player) {
        row += mrow;
        col += mcol;
        count++;
    }
    
    //check in backward direction
    row = r - mrow;
    col = c - mcol;
    while (inLimit(row,col) && boardArray[row][col] === player) {
        row -= mrow;
        col -= mcol;
        count++;
    }
    
    return count;
}



function inLimit(r,c){
    if (r >= 0 && r < boardBreadth && c >= 0 && c < boardLength) return true;
    else return false;
}


let reset = document.querySelector("#resetBtn");
reset.addEventListener("click",
    () => {
        player = "red";
        gameOver = false;
        createBoard(boardLength,boardBreadth);
    }
);