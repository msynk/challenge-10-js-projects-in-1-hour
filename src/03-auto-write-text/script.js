var text = 'My viewers are the best!   ',
index = 0;

setInterval(writeText, 100);

function writeText() {
    document.body.textContent = text.slice(0, index);
    index++;
    if (index > text.length) {
        index = 0;
    }
}