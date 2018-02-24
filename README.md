# electron-installer-linux

Aggregate electron-installer-debian, -redhat, -snap and -flatpak under a single package.
Promise-ified versions of each installer (excluding snap, that is already a Promise)

## Usage

```javascript
let debian, redhat, flatpak;
// Import from index.js...
debian = require("electron-installer-linux").debian;
redhat = require("electron-installer-linux").redhat;
flatpak = require("electron-installer-linux").flatpak;
```

Once you've imported the modules, you have to use the imported modules like `electron-installer-debian/redhat/flatpak's` own APIs, except you use `.then` for success and `.catch` for error like a promise instead of providing a callback.

Use the links here to go to their respective pages and see their APIs, though they are really, exactly the same.<br>
[electron-installer-debian](http://www.github.com/unindented/electron-installer-debian)<br>
[electron-installer-redhat](http://www.github.com/unindented/electron-installer-redhat)  
[electron-installer-flatpak](http://www.github.com/endlessm/electron-installer-flatpak)
[electron-installer-snap](https://github.com/electron-userland/electron-installer-snap)
