// Make draggable elements functional
function initializeDraggableElements() {
    const draggables = document.querySelectorAll('.draggable');
    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', function (event) {
            // Store the ID of the dragged element
            event.dataTransfer.setData('text/plain', this.id);
        });
        
    });
    
}

// Allow dropzones to accept elements
function initializeDropzones() {
    const dropzones = document.querySelectorAll('.dropzone');
    dropzones.forEach(dropzone => {
        // Allow dropping on this element
        dropzone.addEventListener('dragover', function (event) {
            event.preventDefault(); // Prevent default to allow drop
            
        });
       
        // Handle the drop event
        dropzone.addEventListener('drop', function (event) {
            document.getElementById("palettBox").innerHTML = "";
            displayPalett();
            event.preventDefault();
            
           

            // Get the ID of the dragged element
            const draggedElementId = event.dataTransfer.getData('text/plain');
            const draggedElement = document.getElementById(draggedElementId);

            // Remove any existing element in the dropzone
            if (this.firstChild) {
                this.removeChild(this.firstChild);
            }

            // Append the dragged element to the dropzone
            this.appendChild(draggedElement);
        });
        
        
    });
}

// Reinitialize drag-and-drop after new elements are added dynamically
function reinitializeDragAndDrop() {
    initializeDraggableElements();
    initializeDropzones();
}

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    displayPalett ();
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
                        submitAnswer();
                        break;
                }
            });
        }
    
        // Initialize drag-and-drop functionality
        initializeDraggableElements();
        initializeDropzones();
    });
    

function difficultySwitch() {
    let difficulty = document.querySelector('[data-type="difficulty"]');
    difficulty.textContent = difficulty.textContent === "Easy" ? "Medium" : "Easy";
    // disable during the game;
}

function startNewGame(difficulty) {
    let code = genCode (difficulty);
    placeCode (code);
    
    displayAnswerBox(code);
}

function genCode () {
    let codeLength = difficulty === "Easy" ? 4 : 5;
    let code = [];
    for (i = 0; i <codeLength; i++) {
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
        let digit = document.createElement("div");
        digit.textContent = i;
        digit.className = "palettColor draggable";
        digit.setAttribute("draggable","true");
        digit.id = "palettDigit-"+i;
        palettBox.appendChild(digit);
    }
    // Reinitialize drag-and-drop for newly created elements
    reinitializeDragAndDrop();
}

function displayAnswerBox(code) {
    const aBox = document.querySelector(".answerBox");
    aBox.hidden = false;
    addNumberOfTries ();
    addDigitBox ();
    addSubmitButton ();
    addClueBox ();
}

function addDigitBox () {
    let digitsBox = document.getElementById("digitsBox");
    for (i = 1; i <= code.length; i++) {
        let digit = document.createElement("div");
        digit.textContent = i;
        digit.className = "answerDigit dropzone";
        digit.id = "answerDigit-"+i;
        digitsBox.appendChild(digit);
    }
// Reinitialize drag-and-drop for newly created dropzones
reinitializeDragAndDrop();
}

function addNumberOfTries () {
    let digitsBox = document.getElementById("answerBox");
    digit.textContent = i;
    digit.className = "answerDigit dropzone";
    digit.id = "answerDigit-"+i;
    digitsBox.appendChild(digit);
}

function addSubmitButton () {

}

function addClueBox () {

}

function addNewAnswerBox () {

}

function disableAnswerBoxSubmitted () {

}

function getArrayOfAnswer () {
        const answer = [];
        dropzones.forEach(dropzone => {
            answer.push(dropzone.firstChild.textContent);
        });
        console.log('Content of dropzones:', answer);
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