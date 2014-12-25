var pageMod = require("sdk/page-mod");

pageMod.PageMod({
    include: "*.millionbook.com",
    attachTo: ['top', 'existing'],
    contentScriptFile: "./resizer.js",

    onAttach: function(worker) {
        worker.port.emit("init");
    }
});
