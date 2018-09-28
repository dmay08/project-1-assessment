document.getElementById('plus').addEventListener('click', add);
document.getElementById('minus').addEventListener('click', subtract);
var result = document.querySelector('h1');

var sum = 0;

function add() {
    var n = parseFloat(document.getElementById('num').value);
    sum = parseFloat(n) + parseFloat(result.textContent);
    result.innerText =`${sum}`;
    if (sum < 0) {
        result.style.color = 'red';
    }   
}

function subtract() {
    var n = parseFloat(document.getElementById('num').value);
    sum = result.textContent - n;
    result.innerText = `${sum}`;
    if (sum < 0) {
        result.style.color = 'red';
    }
}

