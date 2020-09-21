var sounds = [
    'applause',
    'boo',
    'gasp',
    'tada',
    'victory',
    'wrong'
];

sounds.forEach(function (sound) {
    var btn = document.createElement('button');
    btn.className = 'btn';
    btn.textContent = sound;
    btn.onclick = function () {
        stopSongs();
        document.getElementById(sound).play();
    }

    document.body.appendChild(btn);
});

function stopSongs() {
    sounds.forEach(function (s) {
        var audio = document.getElementById(s);
        audio.pause();
        audio.currentTime = 0;
    });
}