let countEl = document.getElementById("count-passengers");
let welcomeEl = document.getElementById("welcome-el");
let name = "Rohit";
let greetings = "Welcome back, ";
welcomeEl.innerText = greetings + name;

let count = 0;
function increment() {
    count = count + 1;
    countEl.innerText = count;
}

function decrement() {
    count = count - 1;
    countEl.innerText = count;
}

function save() {
    console.log(count);
}