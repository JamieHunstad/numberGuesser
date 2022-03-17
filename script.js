// UI
let min = document.querySelector(".min-num"),
    max = document.querySelector(".max-num"),
    userInput = document.querySelector("#guess-input"),
    guessBtn = document.querySelector("#guess-btn"),
    msg = document.querySelector(".message");

// Values
let minNum = 1,
    maxNum = 10,
    winningNum = Math.floor(Math.random() * (maxNum - minNum + 1)+1),
    attempt = 3;

// Assigning values to DOM
min.textContent = minNum;
max.textContent = maxNum;

// Event Listener

guessBtn.addEventListener("click", function () {
    if(guessBtn.value === "PLAY AGAIN") {
        console.log(guessBtn.value);
        window.location.reload();
    }else{
        setMessage();
    }});


function setMessage(){
    let guess = parseInt(userInput.value);

    if (isNaN(guess) || guess < minNum || guess > maxNum) {
        msg.textContent = `Guess a number between ${minNum} and ${maxNum}`;
        msg.style.color = "red";
    } else {
        attempt -= 1;
            if (attempt === 0){
                userInput.disable = true;
                msg.textContent = `Game Over you lost. the correct number was ${winningNum}`;
                msg.style.color = "red";
                guessBtn.value = "PLAY AGAIN";
            } else {
                msg.textContent = `${attempt} trys remaining`;
                userInput.value = "";
                msg.style.color = "black";
            }
    }

    if (guess === winningNum){
        userInput.disable = true;
        msg.textContent = `You guessed correct! It was ${guess}`;
        msg.style.color = "green";
        userInput.style.borderColor = "green";
        guessBtn.value = "PLAY AGAIN";
    } 

}