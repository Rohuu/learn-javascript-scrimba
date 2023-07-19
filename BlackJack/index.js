let firstCard = 10;
let secondCard = 4;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function startGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    }
    else if (sum === 21) {
        message = "You've got Blackjack!?";
        hasBlackJack = true;
    }
    else {
        message = "You're out of the game";
        isAlive = false;
    }
    sumEl.textContent = "Sum: " + sum;
    messageEl.textContent = message;
    cardsEl.textContent = "Cards: " + firstCard + ", " + secondCard;
}

function newCard() {
    let newCard = 7;
    sum = sum + newCard;
    // sumEl.textContent = "Sum: " + newSum;
    // cardsEl.textContent = "Cards: " + firstCard + ", " + secondCard + ", " + newCard;
    startGame();
}