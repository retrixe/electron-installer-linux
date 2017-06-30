# electron-installer-linux
Aggregate electron-installer-debian, -redhat and -flatpak under a single package.

## Usage
```javascript
let debian, redhat, flatpak;
// Import from index.js...
debian = require("electron-installer-linux").debian;
redhat = require("electron-installer-linux").redhat;
flatpak = require("electron-installer-linux").flatpak;
// Or require them from individual files!
debian = require("electron-installer-linux/debian");
redhat = require("electron-installer-linux/redhat");
flatpak = require("electron-installer-linux/flatpak");
```
Once you've imported the modules, you have to use the imported modules exactly like `electron-installer-debian/redhat/flatpak's` own APIs.

Use the links here to go to their respective pages and see their APIs, though they are really, exactly the same.<br>
[electron-installer-debian](http://www.github.com/unindented/electron-installer-debian)<br>
[electron-installer-redhat](http://www.github.com/unindented/electron-installer-redhat)  
[electron-installer-flatpak](http://www.github.com/endlessm/electron-installer-flatpak)
