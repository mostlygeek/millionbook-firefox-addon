# About

I built this as a last minute 🎄 Christmas 🎄 present for my mom. She often reads online Chinese stories on Firefox on  her tablet. Unfortunately, the text zooms were too small for her and a strain on her eyes. [1]

"That's bullshit!", I exclaimed! I can FTFY with Greasemonkey! Oops. Turns out Greasemonkey isn't supported on Firefox for Android. #sadness.

After much grumbling and searching turns out the easiest solution was to just build it as a real extension. This turned out to be quite the rabbit hole.

## How I built it

* Started at [Firefox's Add-On SDK](https://developer.mozilla.org/en-US/Add-ons/SDK) and installed the `cfx` command line utility (I'm on a Mac)
* Using the [page-mod SDK](https://developer.mozilla.org/en-US/Add-ons/SDK/High-Level_APIs/page-mod), I run a custom script, `resizer.js` when on the [millionbook.com](http://millionbook.com) website.
* `resizer.js` adds a floating button, that when clicked will change an inline css style to resize the font. It will also remember the last zoom level across page refreshes.
* Here's how it looks: 

## Building XPI

Since the add-on is meant for Android it must be built like this:

  `$ cfx xpi --force-mobile`

----

[1] [official fix in the works - bug 1074381](https://bugzilla.mozilla.org/show_bug.cgi?id=1074381)