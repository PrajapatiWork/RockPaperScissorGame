const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");
let count = 0;
let userScrore = document.querySelector("#userScrore");
let compScore = document.querySelector("#compScore");
let btnReset = document.querySelector("#btnReset");
//Get user choice

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

//Get computer choice
const getCompChoice = () => {
    const choiceArr = ["rock", "paper", "scissor"];
    // generating random index number for the array
    const ArrIndx = Math.floor((Math.random() * 3));
    const Choice = choiceArr[ArrIndx];
    return Choice;
};

// show game draw
const gameDraw = () => {
    console.log("game is draw..");
    msg.innerText = "Game was draw.Play again!";
}

//get winner        
const showWinner = (userwin) => {
    if (userwin) {
        console.log("you win");
        msg.innerText = "you win.";
        count += 1;
        userScrore.innerText = count;
    } else {
        console.log("you lose");
        msg.innerText = "you lose.";
        count += 1;
        compScore.innerText = count;
    }
};

//Game logic for the computer and user 

const playGame = (userChoice) => {
    const compChoice = getCompChoice();
    // console.log("user choice is", userChoice);
    // console.log("computer choice is", compChoice);

    // when choice are same, game will be draw
    if (compChoice === userChoice) {
        gameDraw();
    } else {
        let userwin = true;
        if (userChoice === "rock") {
            // computer choice can be paper or scissor
            userwin = compChoice === "paper" ? false : true;

        } else if (userChoice == "paper") {
            // computer choice can be scissor or rock
            userwin = compChoice === "scissor" ? false : true;

        } else {
            // computer choice can be rock or paper
            compChoice === "rock" ? false : true;
        }
        showWinner(userwin);
        resetGame();
    }
};
// when Game is draw to start new game
const resetGame = () => {
    btnReset.addEventListener("click", () => {
        
        compScore.innerText = 0;
        userScrore.innerText = 0;
        msg.innerText = "Play Your Move.";
    });
};

