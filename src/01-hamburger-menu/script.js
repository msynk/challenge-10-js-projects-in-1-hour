var btn = document.getElementById('btn');
var nav = document.getElementById('nav');

btn.onclick = function () {
    nav.classList.toggle('active');
    btn.classList.toggle('active');
}