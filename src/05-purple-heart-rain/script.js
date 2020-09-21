
setInterval(createHeart, 300);

function createHeart() {
    var heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = '💜';
    heart.style.left = Math.random() * 100 + 'vh';
    document.body.appendChild(heart);

    setTimeout(heart.remove.bind(heart), 3000);
}