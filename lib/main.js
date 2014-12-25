// Import the page-mod API
var pageMod = require("sdk/page-mod");
var tabs = require('sdk/tabs')
 

var { MatchPattern } = require("sdk/util/match-pattern");

console.log('test');

// Create a page mod
// It will run a script whenever a ".org" URL is loaded
// The script replaces the page contents with a message
pageMod.PageMod({
    include: "*.millionbook.com",
    attachTo: ['top', 'existing'],
    contentScriptFile: "./resizer.js",

    onAttach: function(worker) {
        worker.port.emit("init");
    }

});
