// Define listener functions
function getDragId(event) {
    // Store the ID of the dragged element
    event.dataTransfer.setData("text/plain", this.id);
}

function allowDrop(event) {
    event.preventDefault(); // Allow the drop
}

function handleDrop(event) {
    event.preventDefault();
    // Get the ID of the dragged element
    const draggedElementId = event.dataTransfer.getData("text/plain");
    const draggedElement = document.getElementById(draggedElementId);
    // Remove any existing element in the dropzone and display a full palette
    if (this.firstChild) {
        this.removeChild(this.firstChild);
        document.getElementById("palettBox").innerHTML = "";
        displayPalett();
    }
    // Append the dragged element to the dropzone with a class
    this.appendChild(draggedElement);
    draggedElement.classList.add("added");
    draggedElement.setAttribute("draggable", "false");
    initializeDraggableElements();
}

// Handle touch start event
function handleTouchStart(event) {
    event.preventDefault();
    const touch = event.touches[0];
    const draggedElement = event.target;
    draggedElement.classList.add("dragging");
    draggedElement.style.position = "absolute";
    draggedElement.style.left = `${touch.pageX}px`;
    draggedElement.style.top = `${touch.pageY}px`;
}

// Handle touch move event
function handleTouchMove(event) {
    event.preventDefault();
    const touch = event.touches[0];
    const draggedElement = document.querySelector(".dragging");
    if (draggedElement) {
        draggedElement.style.left = `${touch.pageX}px`;
        draggedElement.style.top = `${touch.pageY}px`;
    }
}

// Handle touch end event
function handleTouchEnd(event) {
    event.preventDefault();
    const draggedElement = document.querySelector(".dragging");
    if (draggedElement) {
        draggedElement.classList.remove("dragging");
        const dropzone = document.elementFromPoint(event.changedTouches[0].clientX, event.changedTouches[0].clientY);
        if (dropzone && dropzone.classList.contains("dropzone")) {
            dropzone.appendChild(draggedElement);
            draggedElement.classList.add("added");
            draggedElement.setAttribute("draggable", "false");
            initializeDraggableElements();
        }
    }
}

// Make draggable elements functional
function initializeDraggableElements() {
    const draggables = document.querySelectorAll(".draggable");
    draggables.forEach(draggable => {
        draggable.addEventListener("dragstart", getDragId);
        draggable.addEventListener("touchstart", handleTouchStart);
        draggable.addEventListener("touchmove", handleTouchMove);
        draggable.addEventListener("touchend", handleTouchEnd);
    });
}

// Make dropzone elements functional
function initializeDropzones() {
    const dropzones = document.querySelectorAll(".active");
    dropzones.forEach(dropzone => {
        // Allow dropping on this element
        dropzone.addEventListener("dragover", allowDrop);
        // Handle the drop event
        dropzone.addEventListener("drop", handleDrop);
    });
}

// Function to disable the dropzones in an answerBox
function disableDropzones() {
    const dropzones = document.querySelectorAll(".active");
    dropzones.forEach(dropzone => {
        // Remove the dragover and drop event listeners
        dropzone.removeEventListener("dragover", allowDrop);
        dropzone.removeEventListener("drop", handleDrop);
    });
}

// Reinitialize drag-and-drop functionality
function reinitializeDragAndDrop() {
    initializeDraggableElements();
    initializeDropzones();
}

// Initialize the game when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.getElementsByTagName("button");
    for (const button of buttons) {
        button.addEventListener("click", function() {
            const clickedButton = this.getAttribute("data-type");
            switch (clickedButton) {
                case "start":
                    const difficulty = document.querySelector('[data-type="difficulty"]').textContent;
                    startNewGame(difficulty);
                    break;
                case "instruction":
                    showInstruction();
                    break;
                case "newGame":
                    showNewGameModal();
                    break;
            }
        });
    }

    // Initialize drag-and-drop functionality
    initializeDraggableElements();
    initializeDropzones();
});

// Switch the difficulty level between Easy and Medium
function difficultySwitch() {
    const difficulty = document.querySelector('[data-type="difficulty"]');
    difficulty.textContent = difficulty.textContent === "Easy" ? "Medium" : "Easy";
}

// Start a new game with the specified difficulty
function startNewGame(difficulty) {
    const gameContainer = document.getElementById("gameContainer");
    [...gameContainer.children].forEach(child => {
        child.innerHTML = "";
    });
    gameContainer.classList.add("started");
    document.getElementById("pictureContainer").hidden = true;
    document.getElementById("gameContainer").hidden = false;
    const code = genCode(difficulty);
    placeCode(code);
    displayPalett();
    addAnswerBox();
}

// Generate a code based on the difficulty level
function genCode(difficulty) {
    const codeLength = difficulty === "Easy" ? 4 : 5;
    const code = [];
    for (let i = 0; i < codeLength; i++) {
        const digit = Math.floor(Math.random() * 8 + 1);
        code.push(digit);
    }
    return code;
}

// Place the generated code in the code container
function placeCode(code) {
    const codeContainer = document.getElementById("codeToGuess");
    codeContainer.innerHTML = ""; // Clear previous code
    for (const item of code) {
        const digit = document.createElement("div");
        digit.textContent = item;
        digit.className = "codeDigit";
        codeContainer.appendChild(digit);
    }
}

// Display the palette of draggable digits
function displayPalett() {
    const palettBox = document.getElementById("palettBox");
    palettBox.innerHTML = ""; // Clear previous palette
    for (let i = 1; i < 9; i++) {
        const digit = document.createElement("div");
        digit.textContent = i;
        digit.className = "palettColor draggable";
        digit.setAttribute("draggable", "true");
        digit.id = "palettDigit-" + i;
        digit.style.backgroundImage = "url('./assets/images/buttons/b-" + i + ".png')";
        palettBox.appendChild(digit);
    }
    // Reinitialize drag-and-drop for newly created elements
    reinitializeDragAndDrop();
}

// Add an answer box for the player to input their guess
function addAnswerBox() {
    const reasoningBox = document.getElementById("reasoningBox");
    const answerBox = document.createElement("div");
    answerBox.className = "answerBox";
    reasoningBox.appendChild(answerBox);
    addDigitBox(answerBox);
    addSubmitButton(answerBox);
    addClueBox(answerBox);
    return answerBox;
}

// Add a box for the player to input their guess digits
function addDigitBox(answerBox) {
    const digitBox = document.createElement("div");
    digitBox.className = "answerItem";
    answerBox.appendChild(digitBox);
    const numberOfDigits = document.getElementsByClassName("codeDigit").length;
    for (let i = 1; i <= numberOfDigits; i++) {
        const digit = document.createElement("div");
        digit.textContent = i;
        digit.className = "answerDigit dropzone active";
        digit.id = "answerDigit-" + i;
        digitBox.appendChild(digit);
    }
    // Reinitialize drag-and-drop for newly created dropzones
    reinitializeDragAndDrop();
}

// Add a submit button for the player to submit their guess
function addSubmitButton(answerBox) {
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

// Check if the player's answer is complete
function isAnswerComplete() {
    const numberOfDigitsInAnswer = [...document.getElementsByClassName("added")].length;
    const numberOfDigits = document.getElementsByClassName("codeDigit").length;
    if (numberOfDigitsInAnswer < numberOfDigits) {
        document.getElementById("modalBody").innerHTML = "<p>You need to complete your code</p>";
        // Show the modal
        const modal = new bootstrap.Modal(document.getElementById("newGame"));
        modal.show();
        return false;
    }
    return true;
}

// Handle the submit button click event
function submitButtonClicked(submitButton, handleClick) {
    submitButton.className = "clicked";
    submitButton.setAttribute("disabled", "true");

    [...document.getElementsByClassName("added")].forEach(item => {
        item.classList.remove("added");
        item.classList.remove("draggable");
        initializeDraggableElements();
    });
    disableDropzones();
    const activeDigitBoxes = document.getElementsByClassName("active");
    [...activeDigitBoxes].forEach(activeDigitBox => {
        disableDropzones(activeDigitBox);
        activeDigitBox.firstChild.classList.add("check");
        activeDigitBox.classList.remove("active");
    });
    checkAnswer();
    displayClue();
    if (document.querySelector(".started")) {
        addAnswerBox();
    }
}

// Add a box to display clues for the player's guess
function addClueBox(answerBox) {
    const clueBox = document.createElement("div");
    clueBox.className = "answerItem";
    clueBox.id = "clueBox";
    answerBox.appendChild(clueBox);
    addClueDigits(clueBox);
    return clueBox;
}

// Add digits to the clue box
function addClueDigits(clueBox) {
    const numberOfDigits = document.getElementsByClassName("codeDigit").length;
    for (let i = 1; i <= numberOfDigits; i++) {
        const clueDigit = document.createElement("div");
        clueDigit.textContent = 0;
        clueDigit.style.backgroundImage = "url('./assets/images/buttons/bn-0.png')";
        clueDigit.className = "clueDigit activeClue";
        clueDigit.id = "clueDigit-" + i;
        clueBox.appendChild(clueDigit);
    }
}

// Check the player's answer against the generated code
function checkAnswer() {
    const answerDigits = [...document.getElementsByClassName("check")];
    console.log(answerDigits);
    const codeDigits = [...document.getElementsByClassName("codeDigit")];
    console.log(codeDigits);
    const codeValues = codeDigits.map(div => div.textContent.trim());
    console.log(codeValues);
    const uniqueCodeDigits = [...new Set(codeDigits)];
    console.log(uniqueCodeDigits);

    let correctPositionCount = 0;
    let correctColorCount = 0;

    // Count digits of the right color and in the right position
    correctPositionCount = codeDigits.reduce((count, codeDigit, index) => {
        return count + (codeDigit.textContent === answerDigits[index].textContent ? 1 : 0);
    }, 0);

    if (correctPositionCount === codeDigits.length) {
        displayClue(correctPositionCount, 0);
        revealCode();
        endGame();
        return;
    }

    // Count digits of the right color but in the wrong position
    correctColorCount = uniqueCodeDigits.reduce((count, uniqueDigit) => {
        const digitToCount = uniqueDigit.textContent;
        const answerOccurrence = answerDigits.filter(digit => digit.textContent === digitToCount).length;
        const codeOccurrence = codeDigits.filter(digit => digit.textContent === digitToCount).length;
        return count + Math.min(answerOccurrence, codeOccurrence);
    }, 0);

    correctColorCount = Math.max(0, correctColorCount - correctPositionCount);

    answerDigits.forEach(item => item.classList.remove("check"));
    displayClue(correctPositionCount, correctColorCount);
}

// Reveal the code by updating the background images
function revealCode() {
    [...document.getElementsByClassName("codeDigit")].forEach(item => {
        item.style.backgroundImage = `url('./assets/images/buttons/b-${item.textContent}.png')`;
    });
}

// End the game and display the success message
function endGame() {
    document.getElementById("gameContainer").classList.remove("started");

    setTimeout(() => {
        document.getElementById("difficulty").disabled = false;
        document.getElementById("pictureContainer").hidden = false;
        document.getElementById("gameContainer").hidden = true;
        document.getElementById("pictureContainer").lastElementChild.textContent = "You cracked the code!";
        document.getElementById("safe").src = "./assets/images/safe-opened2.png";
    }, 2000);
}

// Display clues based on the player's guess
function displayClue(j, k) {
    const clueDigits = [...document.getElementsByClassName("activeClue")];
    for (let i = 0; i < j; i++) {
        clueDigits[i].textContent = 2;
        clueDigits[i].style.backgroundImage = "url('./assets/images/buttons/bn-2.png')";
    }
    for (let i = j; i < k + j; i++) {
        clueDigits[i].textContent = 1;
        clueDigits[i].style.backgroundImage = "url('./assets/images/buttons/bn-1.png')";
    }
    clueDigits.forEach(item => {
        item.classList.remove("activeClue");
    });
}

// Show game instructions
function showInstruction() {
    document.getElementById("modalBody").innerHTML = 
    "<p>The objective of the game is to guess the code. Use your logic and deduction to figure out the correct combination</p><p>Colors can repeat. Drag and drop color pins from the palette to the answer box, then click the check button to submit your guess.</p><p>You'll get clues: a red pin means the <strong>color and position</strong> are correct, and a yellow pin means the color is right but in the <strong>wrong</strong> position.</p><p>Good luck!</p>";
}

// Show the new game modal and attach event listeners
function showNewGameModal() {
    document.getElementById("modalBody").innerHTML = 
    "<h2><img id='ideaModal' src='./assets/images/idea.png' alt='idea icon'>Start a new game</h2><div id='gameModal'><p>Difficulty</p><button type='button' data-type='difficulty' id='difficulty'>Easy</button><button data-type='start' data-bs-dismiss='modal'>Start</button></div>";

    // Attach event listener to the difficulty button after it is added to the DOM
    const difficultyButton = document.querySelector('[data-type="difficulty"]');
    difficultyButton.addEventListener("click", difficultySwitch);

    // Attach event listener to the start button after it is added to the DOM
    const startButton = document.querySelector('[data-type="start"]');
    startButton.addEventListener("click", function() {
        const difficulty = document.querySelector('[data-type="difficulty"]').textContent;
        startNewGame(difficulty);
    });
}