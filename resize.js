function setStyle(el, fontSize) {
    el.style = "line-height: normal; font-size: " + fontSize;
}

function init() {
    // add some DOM UI elements 
    var style = document.createElement('style');
    style.textContent = [
        '#changeSize {'
        , '  position: fixed; left: 25px; top: 75px;'
        , '  width: 50px; height: 50px;'
        , '  font-size: 1em;'
        , '  background-color: rgba(6, 115, 35, 0.25);'
        , '  border: 1px solid black'
        , '}'
    ].join("\n");
    document.body.appendChild(style);

    document.body.insertAdjacentHTML('afterbegin', '<button id="changeSize">+</button>');

    const STORAGE_KEY = 'fontSizeIndex';

    var sizes = ["1rem", "2rem", "3rem", "4rem"];
    var sizeIndex = 0;
    var plusButton = document.getElementById('changeSize');

    // this seems fragile...
    var el = document.querySelector('.tt2');

    var prevValue = localStorage.getItem(STORAGE_KEY);
    if (prevValue !== null) {
        sizeIndex = prevValue % sizes.length;
        console.log('restoring last setting ' + sizes[sizeIndex]);
        setStyle(el, sizes[sizeIndex]);
    }

    plusButton.addEventListener("click", function () {
        sizeIndex = (sizeIndex + 1) % sizes.length;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(sizeIndex));
        setStyle(el, sizes[sizeIndex]);
    }, false);
}

init();