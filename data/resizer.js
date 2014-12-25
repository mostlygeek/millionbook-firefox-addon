function setStyle(el, fontSize) {
    el.style = "line-height: normal; font-size: " + fontSize;
}

self.port.on("init", function() {
    // add some DOM UI elements 
    document.body.insertAdjacentHTML('afterbegin', [
      '<style>'
      , '#changeSize {'
      , '  position: fixed; right: 0px; top: 75px;'
      , '  width: 25px; height: 25px;'
      , '  font-size: 1em;'
      , '  background-color: rgba(6, 115, 35, 0.25);'
      , '  border: 1px solid black'
      , '}'
      , '</style>'
    ].join("\n"));

    document.body.insertAdjacentHTML('afterbegin', '<button id="changeSize">+</button>');

    const STORAGE_KEY = 'fontSizeIndex';

    var sizes = ["12pt", "16pt", "24pt", "36pt", "48pt", "72pt", "84pt", "96pt"],
        sizeIndex = 0,
        b1 = document.getElementById('changeSize');

    // this seems fragile...
    var el = document.querySelector('.tt2');

    var prevValue = localStorage.getItem(STORAGE_KEY);
    if (prevValue !== null) {
      sizeIndex = prevValue % sizes.length;
      console.log('restoring last setting ' + sizes[sizeIndex]);
      setStyle(el, sizes[sizeIndex]);
    }


    b1.addEventListener("click", function() {
      sizeIndex = (sizeIndex + 1) % sizes.length;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(sizeIndex));
      setStyle(el, sizes[sizeIndex]);
    }, false);
});