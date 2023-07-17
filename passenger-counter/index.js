let countEl = document.getElementById("count-passengers");
let count = 0;
function increment() {
    count = count + 1;
    countEl.innerText = count;
}

function decrement() {
    count = count - 1;
    countEl.innerText = count;
}