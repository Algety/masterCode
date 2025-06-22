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
            clicked = (clicked + 1) % 8;
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
    return submitButton, handleClick;
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

// Check the player's answer against the generated code
function checkAnswer() {
    const answerDigits = [...document.getElementsByClassName("clickedAnswer")].map(div => div.dataset.colorIndex);
    console.log(answerDigits);
    const codeValues = [...document.getElementsByClassName("codeDigit")].map(div => div.textContent.trim());
    console.log(codeValues);
    const uniqueAnswerDigits = [...new Set(answerDigits)];
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
        console.log(answerOccurrence + " " + codeOccurrence);
        return count + Math.min(answerOccurrence, codeOccurrence);
    }, 0);

    correctColorCount = Math.max(0, correctColorCount - correctPositionCount);

    document.querySelectorAll(".clickedAnswer").forEach(item => item.classList.remove("clickedAnswer"));
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
        "<p>The objective of the game is to guess the code. Use your logic and deduction to figure out the correct combination</p><p>Colours in the code can repeat. Click the pins in the answer box to change their colour, with every click they will change their colour. When you are ready to check your answer, click the check button to submit your guess.</p><p>You'll get clues: a red pin means there is a pin which <strong>color and position</strong> are correct, and a yellow pin means there is a pin which color is right but it is in the <strong>wrong</strong> position.</p><p>Good luck!</p>";
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