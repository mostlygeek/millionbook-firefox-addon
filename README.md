# About

I built this as a last minute 🎄 Christmas 🎄 present for my mom. She often reads Chinese stories on Firefox on her tablet. Unfortunately, even the maximum text zoom is too small for her and strains on her eyes. [1]

"That's bullshit!", I exclaimed! I can FTFY with Greasemonkey! Oops. Turns out Greasemonkey isn't supported on Firefox for Android. #sadness.

After much grumbling and searching it turned out a custom add-on would do the trick!

## How I built it

* Started at [Firefox's Add-On SDK docs](https://developer.mozilla.org/en-US/Add-ons/SDK) and installed the `cfx` command line utility
* Using the [page-mod SDK](https://developer.mozilla.org/en-US/Add-ons/SDK/High-Level_APIs/page-mod), I run a custom script, `resizer.js` on the [millionbook.com](http://millionbook.com) website
* `resizer.js` adds a floating button, that when clicked will change an inline css style to resize the font. It will also remember the last zoom level across pages.
* Here's how it looks: (*I don't read Chinese so if text is NSFW, oops!*)![screenshot](https://raw.githubusercontent.com/mostlygeek/millionbook-firefox-addon/master/screenshots/1.png?a)
* Built into an XPI file for Android: `$ cfx xpi --force-mobile`
* Put it into my Dropbox and bit.ly linked it: [http://bit.ly/16SBRmF](http://bit.ly/16SBRmF) so I can open it on the tablet
* \o/


----

[1] [official fix in the works - bug 1074381](https://bugzilla.mozilla.org/show_bug.cgi?id=1074381)