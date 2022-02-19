console.log("Welcome to Tic Tac Toe");
let bgMusic = new Audio ("music.mp3");
let turnMusic = new Audio ("ting.mp3");
let gameOverMusic = new Audio ("gameover.mp3");

let turn = "X";
let gameover = false;

// Function to change the turn
const changeTurn = () =>{
    return turn === "X"?"0":"X"
};

// Function to check for a win
const checkWin = () =>{
    let boxTexts = document.getElementsByClassName("boxText");
    let wins = [

        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e=>{
        if ((boxTexts[e[0]].innerText===boxTexts[e[1]].innerText) && (boxTexts[e[2]].innerText===boxTexts[e[1]].innerText) && (boxTexts[e[0]].innerText!=="")){
            document.querySelector(".info").innerText = boxTexts[e[0]].innerText+" won";
            gameOverMusic.play();
            gameover = true;
            document.querySelector(".boxImage").getElementsByTagName("img")[0].style.width = "200px";
        

        }
    });

};

// Game logic
bgMusic.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector(".boxText");
    element.addEventListener('click', ()=>{
        if(boxText.innerText===""){
            boxText.innerText = turn;
            turn = changeTurn();
            turnMusic.play();
            checkWin();
            if (!gameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for "+turn;
            }

        }

    })
    
});

// Add onclick listener to reset button
reset.addEventListener('click', ()=>{
    let boxTexts = document.querySelectorAll(".boxText");
    Array.from(boxTexts).forEach(element => {
        element.innerText="";
    });
    turn = "X"
    gameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for "+turn;
    document.querySelector(".boxImage").getElementsByTagName("img")[0].style.width = "0px";
});
