var toggle = document.getElementById('toggle');

toggle.onchange = function (e) {
    document.body.classList.toggle('dark', e.target.checked);
}