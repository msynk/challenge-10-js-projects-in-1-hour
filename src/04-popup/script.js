var [container, open, close] = ['container', 'open', 'close'].map(document.getElementById.bind(document));

open.onclick = function () { container.classList.add('active'); }
close.onclick = function () { container.classList.remove('active'); }