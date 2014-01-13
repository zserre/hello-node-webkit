# Git Branch Manager

A simple app that shows the status of all branches on a Git project

## APIs

* [fs module](http://nodejs.org/api/fs.html)
* [events module](http://nodejs.org/api/events.html)
* [path module](http://nodejs.org/api/path.html)
* [util module](http://nodejs.org/api/util.html)
* [child_process module](http://nodejs.org/api/child_process.html)

## Use

These are the instructions for running this app on a Mac. These will vary slightly between Linux and Windows. See the [How to Run Apps](https://github.com/rogerwang/node-webkit/wiki/How-to-run-apps) and the [Getting Started with node webkit](https://github.com/rogerwang/node-webkit/wiki/Getting-Started-with-node-webkit) to learn more about running apps and deploying executable packages using node-webkit

Install the [Mac node-webkit](https://s3.amazonaws.com/node-webkit/v0.8.4/node-webkit-v0.8.4-osx-ia32.zip) 

Place node-webkit.app in the Apllication folder

To enable an easy to use aliasing use the following command:

alias nw="/Applications/node-webkit.app/Contents/MacOS/node-webkit"

To package the app:
<pre></code>
zip -r app.nw *
</code></pre>
Run the app:

nw app.nw
