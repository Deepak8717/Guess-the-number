let numberGuesses = [];
let correctNumber = Randomnumber();
function Randomnumber(){
    let randomnum = Math.floor(Math.random()*50);
    return randomnum;
}

window.onload = function(){
    document.getElementById("number_submit").addEventListener('click',playgame);
}
function playgame(){
    let numberg = document.getElementById("number_guess").value;
    displayresult(numberg);
}

function displayresult(numberg){
    if(numberg>correctNumber){
        showHigh();
    }
    else if(numberg < correctNumber){
        showLow();
    }
    else{
        showWon();
    }
}
function showHigh(){
    document.getElementById("result").innerHTML ="The Guess is too high";
}
function showLow(){
    document.getElementById("result").innerHTML ="The Guess is too low";
}
function showWon(){
    document.getElementById("result").innerHTML = "This is a correct answer";
}