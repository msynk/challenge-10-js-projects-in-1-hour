var imgs = document.getElementById('imgs');
var img = document.querySelectorAll("#imgs img");
var idx = 0;

setInterval(run, 2000);

function run() {
    idx++;
    if (idx > img.length - 1) {
        idx = 0;
    }
    imgs.style.transform = `translateX(${-idx * 500}px)`;
};