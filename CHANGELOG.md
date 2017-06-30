# Changelog
## 1.0.2 (6th June 2017)
- Shrinkwrap our package.

## 1.1.0 (9th June 2017)
- Now, require electron-installer-debian/redhat/flatpak directly from electron-installer-linux like so:
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

## 1.1.1 (9th June 2017)
- Fix repository field in package.json.

## 2.0.0-alpha.2 (1 has been skipped, was faulty) (29th June 2017)
- Add ESLint, Rollup, Webpack and Babel so we can write clean, standard compliant ES2017 code and build and minify it, and support ES Modules with Rollup as well.
- `debian.js, redhat.js and flatpak.js` are now deprecated entry points. They have not been removed as of yet.
- `index.js` uses ES Modules now. It exports 3 functions, `debian`, `redhat` and `flatpak`. `default` export is being worked on as of yet.
- The new `debian`, `redhat` and `flatpak` functions take the same parameters as the functions they wrap.. except they're promisified.
- Example of new usage:

```javascript
// Import our stuff...
import { debian, redhat, flatpak } from "electron-installer-linux";

// Example of how you'll use this.
debian({ ...options }).next(...callback) // Returns a Promise!
redhat({ ...options }).next(...callback) // Returns a Promise!
flatpak({ ...options }).next(...callback) // Returns a Promise!
```
