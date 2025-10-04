// Initialize the game when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.getElementsByTagName("button");
    for (const button of buttons) {
        button.addEventListener("click", function () {
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
    codeContainer.innerHTML = "";
    for (const item of code) {
        const digit = document.createElement("div");
        digit.textContent = item;
        digit.className = "codeDigit";
        codeContainer.appendChild(digit);
    }
}

// Display the palette of available digits
function displayPalett() {
    const palettBox = document.getElementById("palettBox");
    palettBox.innerHTML = "";
    for (let i = 1; i < 9; i++) {
        const digit = document.createElement("div");
        // digit.textContent = i;
        digit.className = "palettColor";
        // digit.id = "palettDigit-" + i;
        digit.style.backgroundImage = "url('./assets/images/buttons/b-" + i + ".png')";
        palettBox.appendChild(digit);
    }
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
    const numberOfDigits = document.getElementsByClassName("codeDigit").length;
    for (let i = 1; i <= numberOfDigits; i++) {
        const digit = document.createElement("div");
        digit.textContent = i;
        // digit.dataset.codeDigit = i;
        digit.className = "answerDigit";
        answerBox.appendChild(digit);
    }
    setupAnswerDigitCycling();
}

function setupAnswerDigitCycling() {
    const answerDigits = document.getElementsByClassName("answerDigit");
    for (const answerDigit of answerDigits) {
        answerDigit.dataset.colorIndex = 0;
        answerDigit.addEventListener("click", function () {
            if (this.classList.contains("disabled")) return;
            this.classList.add("clickedAnswer");
            let clicked = parseInt(this.dataset.colorIndex, 10);
            clicked = clicked == 7 ? 8 : (clicked + 1) % 8;
            this.dataset.colorIndex = clicked;
            this.style.backgroundImage = `url('./assets/images/buttons/b-${clicked}.png')`;
        });
    }
}

// Add a submit button for the player to submit their guess
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
}

// Check if the player's answer is complete
function isAnswerComplete() {
    const numberOfDigitsInAnswer = [...document.getElementsByClassName("clickedAnswer")].length;
    const numberOfDigits = document.getElementsByClassName("codeDigit").length;
    if (numberOfDigitsInAnswer < numberOfDigits) {
        document.getElementById("modalBody").innerHTML = "<p>You need to complete your code</p>";
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

    [...document.getElementsByClassName("clickedAnswer")].forEach(item => {
        item.classList.add("disabled");
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

// Add these helper functions before checkAnswer function
function getAnswerDigits() {
    return [...document.getElementsByClassName("clickedAnswer")]
        .map(div => div.dataset.colorIndex);
}

function getCodeValues() {
    return [...document.getElementsByClassName("codeDigit")]
        .map(div => div.textContent.trim());
}

function countCorrectPositions(answerDigits, codeValues) {
    return codeValues.reduce((count, codeDigit, index) => {
        return count + (codeDigit === answerDigits[index] ? 1 : 0);
    }, 0);
}

function countMatchingColors(answerDigits, codeValues, uniqueDigits) {
    return uniqueDigits.reduce((count, digit) => {
        const answerOccurrence = answerDigits.filter(d => d === digit).length;
        const codeOccurrence = codeValues.filter(c => c === digit).length;
        return count + Math.min(answerOccurrence, codeOccurrence);
    }, 0);
}

// Modify the checkAnswer function to use helper functions
function checkAnswer() {
    const answerDigits = getAnswerDigits();
    const codeValues = getCodeValues();
    const uniqueAnswerDigits = [...new Set(answerDigits)];

    const correctPositionCount = countCorrectPositions(answerDigits, codeValues);

    if (correctPositionCount === codeValues.length) {
        displayClue(correctPositionCount, 0);
        revealCode();
        endGame();
        return;
    }

    let correctColorCount = countMatchingColors(answerDigits, codeValues, uniqueAnswerDigits);
    correctColorCount = Math.max(0, correctColorCount - correctPositionCount);

    document.querySelectorAll(".clickedAnswer").forEach(item => 
        item.classList.remove("clickedAnswer")
    );
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
    modalBody.innerHTML =
        "<div class='modal-header'>" +
        "<button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'>" +
        "</button>" +
        "</div>" +
        "<p>Break the code by finding the right combination of colours!</p>" +
        "<p>How to play:</p>" +
        "<ul>" +
        "<li>Use the colour palette at the top to see all available colours</li>" +
        "<li>For each attempt, you'll have answer pins on the left and clue pins on the right</li>" + 
        "<li>Click a pin in your answer to cycle through available colours</li>" +
        "<li>Colours can appear multiple times in the code</li>" +
        "<li>Click the check button to submit your guess</li>" +
        "</ul>" +
        "<p>After each guess, you'll get clue pins:</p>" +
        "<ul>" +
        "<li><strong>Red pins</strong> = <em>how many</em> of your answer pins are the correct colour AND in the correct position</li>" +
        "<li><strong>Yellow pins</strong> = <em>how many</em> of your answer pins are the correct colour AND in the wrong position</li>" +
        "</ul>" +
        "<p><strong>Note:</strong> The position of the clue pins does not match the order of your answer pins.</p>";
}

// Show the new game modal and attach event listeners
function showNewGameModal() {
    document.getElementById("modalBody").innerHTML =
        "<h2><img id='ideaModal' src='./assets/images/idea.png' alt='idea icon'>Start a new game</h2><div id='gameModal'><p>Difficulty</p><button type='button' data-type='difficulty' id='difficulty'>Easy</button><button data-type='start' data-bs-dismiss='modal'>Start</button></div>";

    const difficultyButton = document.querySelector('[data-type="difficulty"]');
    difficultyButton.addEventListener("click", difficultySwitch);

    const startButton = document.querySelector('[data-type="start"]');
    startButton.addEventListener("click", function () {
        const difficulty = document.querySelector('[data-type="difficulty"]').textContent;
        startNewGame(difficulty);
    });
}