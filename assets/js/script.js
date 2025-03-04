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

// Define listener functions
function allowDrop(event) {
    event.preventDefault(); // Allow the drop
}

function handleDrop(event) {
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
}

function initializeDropzones() {
    const dropzones = document.querySelectorAll('.active');
    dropzones.forEach(dropzone => {
        // Allow dropping on this element
        dropzone.addEventListener('dragover', allowDrop);

        // Handle the drop event
        dropzone.addEventListener('drop', handleDrop);
    });
}

// Function to make the dropzones in an answerBox active
function enableDropzones() { 

    const dropzones = digitBox.querySelectorAll('.active');
    dropzones.forEach(dropzone => {
        // Allow dropping
        dropzone.addEventListener('dragover', allowDrop);

        // Handle the drop event
        dropzone.addEventListener('drop', handleDrop);
    });
}

// Function to disable the dropzones in an answerBox
function disableDropzones() {
    const dropzones = document.querySelectorAll('.active');
    // console.log(dropzones);
    dropzones.forEach(dropzone => {
        // Remove the dragover and drop event listeners
        dropzone.removeEventListener('dragover', allowDrop);
        dropzone.removeEventListener('drop', handleDrop);
    });
}

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
    
    addAnswerBox();
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

function addAnswerBox() {
    const reasoningBox = document.getElementById("reasoningBox");
    const answerBox = document.createElement("div");
    answerBox.className = "answerBox";
    reasoningBox.appendChild(answerBox);  
    addNumberOfTries (answerBox);
    addDigitBox (answerBox);
    addSubmitButton (answerBox);
    // addClueBox ();
    return answerBox;
}

function addDigitBox (answerBox) {
    const digitBox = document.createElement("div");
        digitBox.className = "answerItem";
        answerBox.appendChild(digitBox);
    const numberOfDigits = document.getElementsByClassName("codeDigit").length;
    for (i = 1; i <= numberOfDigits; i++) {
        let digit = document.createElement("div");
        digit.textContent = i;
        digit.className = "answerDigit dropzone active";
        digit.id = "answerDigit-"+i;
        digitBox.appendChild(digit);
    }
    // initializeDropzones();
    // Reinitialize drag-and-drop for newly created dropzones
    reinitializeDragAndDrop();
}

function addNumberOfTries (answerBox) {
    const attempNum = document.createElement("div");
    attempNum.className = "answerItem";
    attempNum.innerHTML = document.getElementsByClassName("answerBox").length;
    answerBox.appendChild(attempNum);
}

function addSubmitButton (answerBox) {
    const submitButton = document.createElement("button");
    submitButton.className = "answerItem";
    submitButton.id = "submitAnswer";
    submitButton.setAttribute("data-type","submitButton");
    submitButton.innerHTML="<i class='fa-solid fa-check'></i>";
    answerBox.appendChild(submitButton);
    submitButton.addEventListener("click", function () {
        submitButtonClicked(submitButton);
    });
    return submitButton;
}

function submitButtonClicked(submitButton) {
    submitButton.className = "clicked";
    disableDropzones();
    let activeDigitBoxes = document.getElementsByClassName("active");
    // Use the spread operator to convert to an array
    [...activeDigitBoxes].forEach(activeDigitBox => {
        disableDropzones(activeDigitBox);
        activeDigitBox.classList.remove("active");
    });
    // console.log(activeDigitBoxes);
    addAnswerBox();
    // activeAnswerBox = newAnswerBox;
    // console.log(activeAnswerBox);

    // Enable dropzones for the new active answerBox
    
    generateClue ();
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

function generateClue () {
    
}

function showInstruction () {
    
}