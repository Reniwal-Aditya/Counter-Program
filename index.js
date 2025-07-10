let count = 0;
count = Number(count);

document.getElementById("res").textContent = count;


document.getElementById("dec").onclick = function () {
    document.getElementById("res").textContent = --count;
}

document.getElementById("reset").onclick = function () {
    document.getElementById("res").textContent = count = 0;
}

document.getElementById("inc").onclick = function () {
    document.getElementById("res").textContent = ++count;
}