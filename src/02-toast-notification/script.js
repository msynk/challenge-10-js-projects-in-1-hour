var btn = document.getElementById('btn');
var container = document.getElementById('container');

btn.onclick = function () {
    createNotification();
}

function createNotification() {
    var notif = document.createElement('div');
    notif.classList.add('toast');
    notif.textContent = 'this challenge is crazy';
    container.appendChild(notif);

    setTimeout(function () { notif.remove(); }, 3000);

}