var btn = document.getElementById('btn');
btn.onclick = function () {
    document.body.style.background = randomBg();
}

function randomBg() {
    return `hsl(${Math.floor(Math.random() * 360)},100%, 50%)`;
}