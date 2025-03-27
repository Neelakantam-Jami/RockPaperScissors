let choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScoreVal=document.querySelector("#user-score");
const compScoreVal=document.querySelector("#comp-score");

let userScore=0;
let compScore=0;

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame=()=>{
    console.log("Game Draw");
    msg.innerText="Game was draw! Play again.";
    msg.style.backgroundColor="#081b31";
}

const showWinner=(user,userChoice,compChoice)=>{
    if(user){
        console.log("Win");
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        userScore++;
        userScoreVal.innerText=userScore;
    }else{
        console.log("Loose");
        msg.innerText=`You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
        compScore++;
        compScoreVal.innerText=compScore;
    }
}

const playGame=(userChoice)=>{
    const compChoice=genCompChoice();
    if(userChoice === compChoice){
        drawGame();
    }else{
        let user=true;
        if(userChoice==="rock"){
            user = compChoice==="scissors"?true:false;
        }else if(userChoice==="paper"){
            user = compChoice==="rock"? true:false;
        }else{
            user = compChoice==="paper"? true:false;
        }
        showWinner(user,userChoice,compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});