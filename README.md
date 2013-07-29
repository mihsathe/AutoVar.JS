AutoVar.JS
==========

Auto-AJAX updated variables. 

I often need to use frequent AJAX feed from the server. While it is not so hard to do with jQuery or so,
this piece of code makes the job easier by creating the smart valiables 'AutoVars'.

You can associate urls with these variables and make them do their job of listening to server as frequently as you want. You can also pause this process to avoid blocking server when not necessary. 

See index.html for example

Development
=====

Please feel free to fork in and work on it. Use the autovar.coffee file to develop. autovar.js is just for the deployment.

Installation
=====

Include jQuery and autovar.js from script folder. 

Run
=====

You can run this test application by directly opening the VS project file with Visual Studio 2012 or higher

Usage Example
=====

```
window.onload = function () {
            var temp = new AutoVar('Rand.ashx', null, ["#area"]);

            $("#button").click(function () {
                temp.pause();
            })
        }
```

You can use the 'AutoVar's with or without bindings.
