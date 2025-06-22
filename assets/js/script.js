// --- MOBILE SUPPORT: Palette images and mobile cycling ---
function isMobile() {
    return /Mobi|Android|iPhone|iPad|iPod|Opera Mini|IEMobile/i.test(navigator.userAgent);
}

// List your palette image URLs (update if you have more/less)
const paletteImages = [
    './assets/images/buttons/b-1.png',
    './assets/images/buttons/b-2.png',
    './assets/images/buttons/b-3.png',
    './assets/images/buttons/b-4.png',
    './assets/images/buttons/b-5.png',
    './assets/images/buttons/b-6.png',
    './assets/images/buttons/b-7.png',
    './assets/images/buttons/b-8.png'
];

// On mobile: cycle background image and store digit on answerDigit click
function setupMobileAnswerDigitCycling() {
    if (isMobile()) {
        document.querySelectorAll('.answerDigit').forEach(answer => {
            answer.classList.remove('dropzone', 'active');
            answer.removeEventListener("dragover", allowDrop);
            answer.removeEventListener("drop", handleDrop);
        });
        document.querySelectorAll('.palettColor').forEach(pal => {
            pal.setAttribute("draggable", "false");
        });

        document.querySelectorAll('.answerDigit').forEach(answer => {
            answer.dataset.colorIndex = 0;
            answer.dataset.digit = 1; // Start at 1
            answer.style.backgroundImage = `url('${paletteImages[0]}')`;
            answer.textContent = ""; // Hide digit
            answer.onclick = function () {
                let idx = parseInt(this.dataset.colorIndex, 10);
                idx = (idx + 1) % paletteImages.length;
                this.dataset.colorIndex = idx;
                this.dataset.digit = idx + 1; // Store digit (1-based)
                this.style.backgroundImage = `url('${paletteImages[idx]}')`;
                this.textContent = ""; // Hide digit
            };
        });
    }
}

// --- DRAG AND DROP & GAME LOGIC (existing code) ---

function getDragId(event) {
    event.dataTransfer.setData("text/plain", this.id);
}

function allowDrop(event) {
    event.preventDefault();
}

function handleDrop(event) {
    event.preventDefault();
    const draggedElementId = event.dataTransfer.getData("text/plain");
    const draggedElement = document.getElementById(draggedElementId);
    if (this.firstChild) {
        this.removeChild(this.firstChild);
        document.getElementById("palettBox").innerHTML = "";
        displayPalett();
    }
    this.appendChild(draggedElement);
    draggedElement.classList.add("added");
    draggedElement.setAttribute("draggable", "false");
    initializeDraggableElements();
}

function handleTouchStart(event) {
    event.preventDefault();
    const touch = event.touches[0];
    const draggedElement = event.target;
    draggedElement.classList.add("dragging");
    draggedElement.style.position = "absolute";
    draggedElement.style.left = `${touch.pageX}px`;
    draggedElement.style.top = `${touch.pageY}px`;
}

function handleTouchMove(event) {
    event.preventDefault();
    const touch = event.touches[0];
    const draggedElement = document.querySelector(".dragging");
    if (draggedElement) {
        draggedElement.style.left = `${touch.pageX}px`;
        draggedElement.style.top = `${touch.pageY}px`;
    }
}

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

function initializeDraggableElements() {
    const draggables = document.querySelectorAll(".draggable");
    draggables.forEach(draggable => {
        draggable.addEventListener("dragstart", getDragId);
        draggable.addEventListener("touchstart", handleTouchStart);
        draggable.addEventListener("touchmove", handleTouchMove);
        draggable.addEventListener("touchend", handleTouchEnd);
    });
}

function initializeDropzones() {
    const dropzones = document.querySelectorAll(".active");
    dropzones.forEach(dropzone => {
        dropzone.addEventListener("dragover", allowDrop);
        dropzone.addEventListener("drop", handleDrop);
    });
}

function disableDropzones() {
    const dropzones = document.querySelectorAll(".active");
    dropzones.forEach(dropzone => {
        dropzone.removeEventListener("dragover", allowDrop);
        dropzone.removeEventListener("drop", handleDrop);
    });
}

function reinitializeDragAndDrop() {
    initializeDraggableElements();
    initializeDropzones();
}

// --- DOMContentLoaded: call mobile cycling setup ---
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
    initializeDraggableElements();
    initializeDropzones();
    setupMobileAnswerDigitCycling(); // <-- ADD THIS
});

// --- Game logic (existing code) ---

function difficultySwitch() {
    const difficulty = document.querySelector('[data-type="difficulty"]');
    difficulty.textContent = difficulty.textContent === "Easy" ? "Medium" : "Easy";
}

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

function genCode(difficulty) {
    const codeLength = difficulty === "Easy" ? 4 : 5;
    const code = [];
    for (let i = 0; i < codeLength; i++) {
        const digit = Math.floor(Math.random() * 8 + 1);
        code.push(digit);
    }
    return code;
}

function placeCode(code) {
    const codeContainer = document.getElementById("codeToGuess");
    codeContainer.innerHTML = "";
    for (const item of code) {
        const digit = document.createElement("div");
        digit.textContent = item;
        digit.className = "codeDigit";
        codeContainer.appendChild(digit);
    }
}

function displayPalett() {
    const palettBox = document.getElementById("palettBox");
    palettBox.innerHTML = "";
    for (let i = 1; i < 9; i++) {
        const digit = document.createElement("div");
        digit.textContent = i;
        digit.className = "palettColor draggable";
        digit.setAttribute("draggable", "true");
        digit.id = "palettDigit-" + i;
        digit.style.backgroundImage = "url('./assets/images/buttons/b-" + i + ".png')";
        palettBox.appendChild(digit);
    }
    reinitializeDragAndDrop();
}

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
    reinitializeDragAndDrop();
    setupMobileAnswerDigitCycling(); // <-- ADD THIS
}

function addSubmitButton(answerBox) {
    const submitButton = document.createElement("button");
    submitButton.className = "answerItem";
    submitButton.id = "submitAnswer";
    submitButton.setAttribute("data-type", "submitButton");
    submitButton.innerHTML = "<i class='fa-solid fa-check'></i>";
    function handleClick() {
        if (isAnswerComplete()) {
            submitButtonClicked(submitButton, handleClick);
        }
    }
    submitButton.addEventListener("click", handleClick);
    answerBox.appendChild(submitButton);
    return submitButton, handleClick;
}

function isAnswerComplete() {
    let numberOfDigitsInAnswer, numberOfDigits;
    if (isMobile()) {
        numberOfDigitsInAnswer = [...document.getElementsByClassName("answerDigit")].filter(div => div.dataset.digit && div.dataset.digit !== "0").length;
        numberOfDigits = document.getElementsByClassName("codeDigit").length;
    } else {
        numberOfDigitsInAnswer = [...document.getElementsByClassName("added")].length;
        numberOfDigits = document.getElementsByClassName("codeDigit").length;
    }
    if (numberOfDigitsInAnswer < numberOfDigits) {
        document.getElementById("modalBody").innerHTML = "<p>You need to complete your code</p>";
        const modal = new bootstrap.Modal(document.getElementById("newGame"));
        modal.show();
        return false;
    }
    return true;
}

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
        if (activeDigitBox.firstChild) activeDigitBox.firstChild.classList.add("check");
        activeDigitBox.classList.remove("active");
    });
    checkAnswer();
    displayClue();
    if (document.querySelector(".started")) {
        addAnswerBox();
    }
}

function addClueBox(answerBox) {
    const clueBox = document.createElement("div");
    clueBox.className = "answerItem";
    clueBox.id = "clueBox";
    answerBox.appendChild(clueBox);
    addClueDigits(clueBox);
    return clueBox;
}

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

// --- MODIFIED: Use data-digit for mobile answer checking ---
function checkAnswer() {
    let answerDigits;
    if (isMobile()) {
        answerDigits = [...document.getElementsByClassName("answerDigit")].map(div => div.dataset.digit);
    } else {
        answerDigits = [...document.getElementsByClassName("check")].map(div => div.textContent.trim());
    }
    const codeValues = [...document.getElementsByClassName("codeDigit")].map(div => div.textContent.trim());
    //  const codeValues = ['1', '2', '2', '2', '3'];
    // You may want to update codeValues logic for mobile as well if needed
    console.log(answerDigits);
    console.log(codeValues);
    const uniqueAnswerDigits =  [...new Set(answerDigits)];
    console.log(uniqueAnswerDigits);
    const uniqueCodeDigits = [...new Set(codeValues)];
    console.log(uniqueCodeDigits);
    let correctPositionCount = 0;
    let correctColorCount = 0;

    correctPositionCount = codeValues.reduce((count, codeDigit, index) => {
        return count + (codeDigit === answerDigits[index] ? 1 : 0);
    }, 0);

    if (correctPositionCount === codeValues.length) {
        displayClue(correctPositionCount, 0);
        revealCode();
        endGame();
        return;
    }

    correctColorCount = uniqueAnswerDigits.reduce((count, digit) => {
        const answerOccurrence = answerDigits.filter(d => d === digit).length;
        const codeOccurrence = codeValues.filter(c => c === digit).length;
        return count + Math.min(answerOccurrence, codeOccurrence);
    }, 0);

    correctColorCount = Math.max(0, correctColorCount - correctPositionCount);

    document.querySelectorAll(".check").forEach(item => item.classList.remove("check"));
    displayClue(correctPositionCount, correctColorCount);
}

function revealCode() {
    [...document.getElementsByClassName("codeDigit")].forEach(item => {
        item.style.backgroundImage = `url('./assets/images/buttons/b-${item.textContent}.png')`;
    });
}

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

function showInstruction() {
    document.getElementById("modalBody").innerHTML = 
    "<p>The objective of the game is to guess the code. Use your logic and deduction to figure out the correct combination</p><p>Colors can repeat. Drag and drop color pins from the palette to the answer box, then click the check button to submit your guess.</p><p>You'll get clues: a red pin means the <strong>color and position</strong> are correct, and a yellow pin means the color is right but in the <strong>wrong</strong> position.</p><p>Good luck!</p>";
}

function showNewGameModal() {
    document.getElementById("modalBody").innerHTML = 
    "<h2><img id='ideaModal' src='./assets/images/idea.png' alt='idea icon'>Start a new game</h2><div id='gameModal'><p>Difficulty</p><button type='button' data-type='difficulty' id='difficulty'>Easy</button><button data-type='start' data-bs-dismiss='modal'>Start</button></div>";

    const difficultyButton = document.querySelector('[data-type="difficulty"]');
    difficultyButton.addEventListener("click", difficultySwitch);

    const startButton = document.querySelector('[data-type="start"]');
    startButton.addEventListener("click", function() {
        const difficulty = document.querySelector('[data-type="difficulty"]').textContent;
        startNewGame(difficulty);
    });
}