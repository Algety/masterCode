document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            let clickedButton = this.getAttribute("data-type");
            switch(clickedButton) {
                case "difficulty": 
                    difficultySwitch();
                    break;
                case "start": 
                    difficulty = document.querySelector('[data-type="difficulty"]').textContent;
                    startNewGame(difficulty);
                    break;
                case "instruction":
                    showInstruction ();
                    break;
                case "submitButton":
                    submitAnswer ();
                    break;
            }   
        })}});


function difficultySwitch() {
    let difficulty = document.querySelector('[data-type="difficulty"]');
    difficulty.textContent = difficulty.textContent === "Easy" ? "Medium" : "Easy";
    // disable during the game;
}

function startNewGame(difficulty) {
    let code = genCode (difficulty);
    placeCode (code);
    displayPalett ();
}

function genCode () {
    let codeLenght = difficulty === "Easy" ? 4 : 5;
    let code = [];
    for (i = 0; i <codeLenght; i++) {
        let digit = Math.floor(Math.random()*8 + 1);
        code.push(digit);
    }   
    return code;
}

function placeCode (code) {
    let codeContainer = document.getElementById("codeToGuess");  
    for (const item of code) {
        let digit = document.createElement("div");
        digit.textContent = item;
        digit.className = "codeDigit";
        codeContainer.appendChild(digit);
    }
}

function displayPalett() {
    let palettBox = document.getElementById("palettBox");  
    for (i = 1; i < 9; i++) {
        let color = document.createElement("div");
        color.textContent = i;
        color.className = "palettColor";
        palettBox.appendChild(color);
    }
}



function checkAnswer () {

}

function submitAnswer () {
    generateClue ();
}

function generateClue () {
    
}

function showInstruction () {
    
}