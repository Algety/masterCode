// Define listener functions
function getDragId(event) {
    // Store the ID of the dragged element
   event.dataTransfer.setData('text/plain', this.id);
}

// Define listener functions
function allowDrop(event) {
   event.preventDefault(); // Allow the drop
}

function handleDrop(event) {
   event.preventDefault();
   // Get the ID of the dragged element
   const draggedElementId = event.dataTransfer.getData('text/plain');
   const draggedElement = document.getElementById(draggedElementId);
   // Remove any existing element in the dropzone and display a full palett
   if (this.firstChild) {
       this.removeChild(this.firstChild);
       document.getElementById("palettBox").innerHTML = "";
       displayPalett();
   }
   // Append the dragged element to the dropzone with a class
   this.appendChild(draggedElement);
   draggedElement.classList.add("added");
   draggedElement.setAttribute("draggable","false");
   initializeDraggableElements();
}

// Make draggable elements functional
function initializeDraggableElements() {
    const draggables = document.querySelectorAll('.draggable');
    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', getDragId);   
    });
}

// Make dropzone elements functional
function initializeDropzones() {
    const dropzones = document.querySelectorAll('.active');
    dropzones.forEach(dropzone => {
        // Allow dropping on this element
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

// * -------------------------------------

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
                    var gameContainerClass = document.getElementById("gameContainer").classList;
                    if (gameContainerClass.contains("started")) {
                        alert("Start a new game?")
                    };
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
    
// * -----------------------------------------

function difficultySwitch() {
    let difficulty = document.querySelector('[data-type="difficulty"]');
    difficulty.textContent = difficulty.textContent === "Easy" ? "Medium" : "Easy";
    // disable during the game;
}

function startNewGame(difficulty) {
    var gameContainer = document.getElementById("gameContainer");
    [...gameContainer.children].forEach(child => {
            child.innerHTML = "";
        });
    gameContainer.classList.add("started");
    let code = genCode (difficulty);
    placeCode (code);
    displayPalett ();
    addAnswerBox ();    
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
    addClueBox (answerBox);
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
    submitButton.setAttribute("data-type", "submitButton");
    submitButton.innerHTML = "<i class='fa-solid fa-check'></i>";
    // Define a named function for the click event
    function handleClick() {
        if (isAnswerComplete()) {
            submitButtonClicked(submitButton, handleClick); // Pass the reference to the handler
        }
    }
    // Add the event listener
    submitButton.addEventListener("click", handleClick);
    answerBox.appendChild(submitButton);
    return submitButton, handleClick;
}


function isAnswerComplete () {
    const numberOfDigitsInAnswer = [...document.getElementsByClassName("added")].length;
    const numberOfDigits = document.getElementsByClassName("codeDigit").length;
    if (numberOfDigitsInAnswer < numberOfDigits) {
        alert("You need to complete your code");
    }
    return numberOfDigitsInAnswer >= numberOfDigits;;
}

function submitButtonClicked(submitButton, handleClick) {
    submitButton.className = "clicked";
    submitButton.setAttribute("disabled","true");
    [...document.getElementsByClassName("added")].forEach (item => {
        item.classList.remove("added");
        item.classList.remove("draggable");
        initializeDraggableElements();
    })
    // submitButton.removeEventListener("click", handleClick);
    disableDropzones();
    let activeDigitBoxes = document.getElementsByClassName("active");
    // Use the spread operator to convert to an array
    [...activeDigitBoxes].forEach(activeDigitBox => {
        disableDropzones(activeDigitBox);
        activeDigitBox.firstChild.classList.add("check");
        activeDigitBox.classList.remove("active");
    });
    
    checkAnswer ();
    displayClue ();
    addAnswerBox ();
}

function addClueBox (answerBox) {
    const clueBox = document.createElement("div");
    clueBox.className = "answerItem";
    clueBox.id = "clueBox"
    answerBox.appendChild(clueBox);
    addClueDigits (clueBox);
    return clueBox;
}

function addClueDigits (clueBox) {
    const numberOfDigits = document.getElementsByClassName("codeDigit").length;
    for (i = 1; i <= numberOfDigits; i++) {
        let clueDigit = document.createElement("div");
        clueDigit.textContent = 0;
        clueDigit.className = "clueDigit activeClue";
        clueDigit.id = "clueDigit-"+i;
        clueBox.appendChild(clueDigit);
    }
}

// function getArrayOfAnswer () {
//         const answer = [];
//         dropzones.forEach(dropzone => {
//             answer.push(dropzone.firstChild.textContent);
//         });
//         console.log('Content of dropzones:', answer);
// }

function checkAnswer() {
    const answerDigit = [...document.getElementsByClassName("check")];
    const codeDigit = [...document.getElementsByClassName("codeDigit")];
    const compDigit = [...new Set(codeDigit)];

    var j = 0;
    var k = 0;

    // count digits of the right color and in the right position
    for (let i = 0; i < codeDigit.length; i++) {
        if (codeDigit[i].textContent === answerDigit[i].textContent) {
            j++;
        }}
    // count digits of the right color but in the wrong position    
    for (let i = 0; i < compDigit.length; i++) {
        let digitToCount = compDigit[i].textContent;
        let answerOccurance = answerDigit.filter(digit => digit.textContent === digitToCount).length;
        let codeOccurance = codeDigit.filter(digit => digit.textContent === digitToCount).length;
        k = k + Math.min(answerOccurance,codeOccurance);
    } 
    answerDigit.forEach(item => {
        item.classList.remove("check");
    })
    k = k>=j?k - j:0;
    displayClue(j,k);
    }

function displayClue (j,k) {
    const clueDigit = [...document.getElementsByClassName("activeClue")];
    for (let i = 0; i < j; i++) {
        clueDigit[i].textContent = 2;
    }
    for (let i = j; i < k + j-1; i++) {
        clueDigit[i].textContent = 1;
    } 
}

function showInstruction () {
    
}