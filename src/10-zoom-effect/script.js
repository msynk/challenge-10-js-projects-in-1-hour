var container = document.getElementById('container'),
    img = document.querySelector('img');

container.onmousemove = function (e) {
    var x = e.clientX - e.target.offsetLeft,
        y = e.clientY - e.target.offsetTop;

    img.style.transformOrigin = `${x}px ${y}px`;
    img.style.transform = 'scale(2)';
};

container.onmouseleave = function (e) {
    img.style.transformOrigin = 'center center';
    img.style.transform = 'scale(1)';
};