const inputPlOneElm = document.querySelector("#player1");
const inputPlTwoElm = document.querySelector("#player2");
const plOneSubmit = document.querySelector(".pl1-submit");
const plTwoSubmit = document.querySelector(".pl2-submit");
const scoreBoardElm = document.querySelector(".score");
const scoreTwoElm = document.querySelector(".scoreTwo");
const resetElm = document.querySelector(".reset");


let plOneInput = 0;
let limit = 0;
let limit2 = 0;
let plOneScore = 0;
let plTwoScore = 0;

function randomNumber(){
    return Math.floor(Math.random() * 2 + 1);
}

    console.log(limit);
plOneSubmit.addEventListener('click', evt => {
    evt.preventDefault();
    if(Number(inputPlOneElm.value) === randomNumber()){
        plOneScore++;
        scoreBoardElm.textContent = plOneScore;
    }
    inputPlOneElm.value = '';
    limit++;
})
if (Number(limit) === 5){
    plOneSubmit.setAttribute('disabled', 'disabled');
    // alert('You have finished your turn');
}

plTwoSubmit.addEventListener('click', ev => {
    ev.preventDefault();
    if(Number(inputPlTwoElm.value) === randomNumber()){
        plTwoScore++;
        scoreTwoElm.textContent = plTwoScore;
    }
    inputPlTwoElm.value = '';
    limit2++;
    if (limit2 => 5){
        plOneSubmit.setAttribute('disabled', 'disabled');
        prompt('You have finished your turn');
        reset();
    }
})

function reset() {
    resetElm.addEventListener('click', evt => {
        limit = 0;
        limit2 = 0;
        plOneScore = 0;
        plTwoScore = 0;

    })
}

console.log(limit);
