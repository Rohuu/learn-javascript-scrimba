let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

let player = {
    name: "Rohit",
    chips: 145
}

function getRandomCard() {
    let randomNum = Math.floor(Math.random() * 13) + 1;
    if (randomNum > 10) {
        return 10;
    }
    else if (randomNum === 1) {
        return 11;
    }
    else {
        return randomNum;
    }
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    sum = firstCard + secondCard;
    cards = [firstCard, secondCard];
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: ";

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }

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
}

function newCard() {
    if (hasBlackJack === false && isAlive === true) {
        let newCard = getRandomCard();
        sum = sum + newCard;
        cards.push(newCard);
        renderGame();
    }
}

playerEl.textContent = player.name + ": $ " + player.chips;


